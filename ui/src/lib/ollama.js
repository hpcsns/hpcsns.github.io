import localForage from "localforage"
import { get, writable } from "svelte/store"

localForage.config({
    name: "SNS HPC AI Assitant",
})

const Status = {
    Unknown: { slug: "unknown", description: "Checking the AI server status...", icon: "⏳" },
    Error: { slug: "error", description: "The AI server is currently unavailable", icon: "🔴" },
    OK: { slug: "ok", description: "The AI server is fully functional", icon: "🟢" },
    Running: { slug: "running", description: "The AI server is working to answer", icon: "🔵" },
    Degraded: { slug: "degraded", description: "The AI server is currently degraded", icon: "🟡" },
}

export class Ollama {
    constructor (baseURL) {
	this.baseURL = baseURL
	this.status = writable(Status.Unknown)
    }

    // list available models on the backend
    async getBestModel (modelList, options) {
	options = options || {}
	try {
	    const response = await fetch(`${this.baseURL}/api/tags`, { method: "GET", ...options })
	    if (response.status === 200) {
		const data = await response.json()
		const availableModels = data.models.map(x => x.model)
		for (const model of modelList)
		    if (availableModels.includes(model.model)) {
			this.status.set(model.premium ? Status.OK : Status.Degraded)
			return model.model
		    }
	    }
	} catch (error) {
	    console.error(error)
	}
	this.status.set(Status.Error)
    }

    // perform an empty model request to preload it
    async preloadModel (model, options) {
	options = options || {}
	try {
	    const response = await fetch(`${this.baseURL}/api/generate`, {
		method: "POST",
		body: JSON.stringify({ model: model }),
		...options,
	    })
	    if (response.status === 200)
		return null
	} catch (error) {
	    console.error(error)
	}
	this.status.set(Status.Error)
    }

    async chat(body, options) {
	options = options || {}
	const iStatus = get(this.status)
	try {
	    this.status.set(Status.Running)
	    const response = await fetch(`${this.baseURL}/api/chat`, {
		method: "POST",
		body: JSON.stringify(body),
		...options,
	    })
	    if (response.status === 200) {
		this.status.set(iStatus)
		return await response.json()
	    }
	} catch (error) {
	    console.error(error)
	}
	this.status.set(Status.Error)
    }
}
