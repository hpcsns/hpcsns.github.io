import { createId } from "@paralleldrive/cuid2"

export class Chat {
    // TODO: Implement message tree with branches
    constructor (updated, ollama, _chat) {
	this.updated = updated
	this.ollama = ollama
	if (_chat)
	    this._ = _chat
	else {
	    const ts = new Date().toISOString()
	    this._ = {
		chatId: createId(),
		created: ts,
		updated: ts,
		title: null,
		tags: [],
		starred: false,
		messages: [],
		options: {},
	    }
	}
    }

    async save({ untouched }) {
	if (untouched)
	    this._.updated = new Date().toISOString()
	await localForage.setItem(`chat/${this._.chatId}`, JSON.stringify(this._))
    }

    async regenerateStreaming(model, fromMessageId) {
	for (let index = 0; index < this._.messages.length; index++)
	    if (this._.messages[index].id == fromMessageId)
		this._.messages = this._.messages.slice(0, index)
	await this.updated()
	await this.completeStreaming(model)
	await this.updated()
    }

    messageToMarkdown(messageId) {
	for (let index = 0; index < this._.messages.length; index++)
	    if (this._.messages[index].id == messageId)
		return this._.messages[index].content
    }

    async addPartialMessage(message) {
	const timestamp = new Date().toISOString()
	let id = createId()
	if (this._.messages[this._.messages.length - 1]?.partial)
	    id = this._.messages.pop().id
	this._.messages.push({ timestamp, ...message, partial: true, id: id })
	await this.updated()
    }
    
    async addMessage(message) {
	const timestamp = new Date().toISOString()
	let id = createId()
	if (this._.messages[this._.messages.length - 1]?.partial)
	    id = this._.messages.pop().id
	this._.messages.push({ timestamp , ...message, id: id })
	await this.updated()
    }

    async complete(model) {	
	const result = this.ollama.chatStreaming({
	    model: model,
	    messages: this._.messages.map(msg => ({
		...msg,
		role: msg.role != "notice" ? msg.role : "assistant",
	    })),
	    stream: false,
	})
	await this.addMessage(result.message)
    }

    async completeStreaming(model) {	
	const stream = this.ollama.chatStreaming({
	    model: model,
	    messages: this._.messages.map(msg => ({
		...msg,
		role: msg.role != "notice" ? msg.role : "assistant",
	    })),
	    stream: true,
	})
	let message = { role: "assistant", content: "" }
	for await (const piece of stream) {
	    // build the full message meanwhile
	    message.content += piece.message.content
	    await this.addPartialMessage(message)
	    if (piece.done)
		await this.addMessage(message)
	}
    }

    toMarkdown() {
	const metadata = {
	    id: this._.chatId,
	    title: this._.title,
	    created: this._.created,
	    updated: this._.updated,
	}
	const frontmatter = "---\n" + Object.entries(metadata).map(
	    ([key, value]) => `${key}: ${value}\n`).join("") + "---\n"
	const messages = this._.messages.filter(msg => msg.role != "system")
	      .map(msg => `role: ${msg.role}\ntimestamp: ${msg.timestamp}\n\n${msg.content}\n`).join(`\n---\n`)
	return frontmatter + messages
    }
}

// returns an array of Chat objects
export async function loadChats (ollama) {
    const keys = await localForage.keys()
    const chats = Promise.all(
	keys.filter(key => key.startsWith("chat/"))
	    .map(async key => JSON.parse(await localForage.getItem(key)))
    )
    return chats.map(_chat => new Chat(ollama, _chat))
}
