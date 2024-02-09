<svelte:options customElement="hpc-chatbot" />

<script>
 import { onMount } from "svelte"
 import { Ollama } from "./lib/ollama.js"
 import { Chat } from "./lib/chats.js"

 // prompt to use as the initial one 
 const systemPrompt = { role: "system", content: "You are LucIAno, an helpful AI assistant, expert in High Performance Computing, Linux System Administration, and Python and FORTRAN programming. You always answer to users very precisely and to-the-point, helping them to clarify their question when they are vaguely expressed. You politely refuse to answer questions not related to your expertise area. Write output in Markdown." }

 // AI models to use in order of preference
 const modelList = [
     { model: "notux:8x7b-v1-q3_K_L", premium: true },
     { model: "nous-hermes2-mixtral:8x7b-dpo-q3_K_L", premium: true },
     { model: "solar:10.7b-instruct-v1-q3_K_L", premium: true },
     { model: "mistral:7b-instruct-v0.2-q3_K_L", premium: false },
     { model: "stablelm2:1.6b-zephyr-q3_K_L", premium: false },
 ]

 let ollama // ollama object to interact with the server
 let status // status variable bind to the svelte store of ollama
 let model // model that has been chosen as the best currently available
 let chat // chat that is currently visible on the screen

 onMount(async () => {
     const baseUrl = `${window.location.protocol}//${window.location.hostname}:${window.location.port}`
     ollama = new Ollama(baseUrl)
     status = ollama.status
     model = await ollama.getBestModel(modelList)
     if (model) {
	 await ollama.preloadModel(model)
	 chat = new Chat(() => chat = chat, ollama)
	 chat.addMessage(systemPrompt)
     }
 })

 let text

 const roleIcons = { user: "👤", assistant: "🤖" }

 async function handleUserMessage() {
     chat.addMessage({ role: "user", content: text })
     text = ""
     await chat.complete(model)
 }
</script>

<content class="chat-bot">
    <div class="mb-10 text-bold">
	🤖 HPC AI Assistant
	<span title={status ? $status.description : ""}>{status ? $status.icon : ""}</span>
    </div>
    {#if model && chat}
	{#each chat._.messages as message}
	    {#if message.role != "system" }
		<div class="message">
		    {roleIcons[message.role]}
		    {message.content}
		</div>
	    {/if}
	{/each}
	<form action="#" on:submit|preventDefault={handleUserMessage}>
	    <input disabled={status && $status.slug == "running"} class="text" bind:value={text} type="text"
		   placeholder="What do you want help with?" />
	</form>
	<div class="mt-10 text-small">The assistant makes mistakes, always check important information</div>
    {/if}
</content>

<style>
 .mb-10 { margin-bottom: 10px; }
 .text-bold { font-weight: 700; }
 .mt-10 { margin-top: 10px; }
 .text-small { font-size: 80%; }

 .text {
     display: block;
     border-radius: 10px;
     font-size: 120%;
     padding: 8px 8px;
     width: 100%;
 }
 
 .chat-bot {
     min-width: 25%;
     border: 1px solid grey;
     border-radius: 5px;
     position: absolute;
     bottom: 10px;
     right: 10px;
     padding: 10px 10px;
     display: flex;
     flex-direction: column;
     align-items: stretch;
 }
</style>
