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

    async addPartialMessage(message) {
	const timestamp = new Date().toISOString()
	if (this._.messages[this._.messages.length - 1]?.partial)
	    this._.messages.pop()
	this._.messages.push({ timestamp, ...message, partial: true })
	await this.updated()
    }
    
    async addMessage(message) {
	const timestamp = new Date().toISOString()
	if (this._.messages[this._.messages.length - 1]?.partial)
	    this._.messages.pop()
	this._.messages.push({ timestamp , ...message })
	await this.updated()	
    }

    async complete(model) {	
	const result = this.ollama.chatStreaming({
	    model: model,
	    messages: this._.messages,
	    stream: false,
	})
	await this.addMessage(result.message)
    }

    async completeStreaming(model) {	
	const stream = this.ollama.chatStreaming({
	    model: model,
	    messages: this._.messages,
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
