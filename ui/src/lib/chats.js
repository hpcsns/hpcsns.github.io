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
		lastUpdated: ts,
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
	    this._.lastUpdated = new Date().toISOString()
	await localForage.setItem(`chat/${this._.chatId}`, JSON.stringify(this._))
    }

    addMessage(message) {
	this._.messages.push(message)
	this.updated()	
    }

    async complete(model) {	
	// TODO: Make the endpoint streaming
	const result = await this.ollama.chat({
	    model: model,
	    messages: this._.messages,
	    stream: false,
	})
	this.addMessage(result.message)
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
