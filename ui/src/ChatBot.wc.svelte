<svelte:options customElement="hpc-chatbot" />

<script>
 import { onMount } from "svelte"
 import { Ollama } from "./lib/ollama.js"
 import { Chat } from "./lib/chats.js"
 import config from "./lib/config.js"

 let ollama // ollama object to interact with the server
 let status // status variable bind to the svelte store of ollama
 let model // model that has been chosen as the best currently available
 let chat // chat that is currently visible on the screen

 onMount(async () => {
     const baseUrl = `${window.location.protocol}//${window.location.hostname}:${window.location.port}`
     ollama = new Ollama(baseUrl)
     status = ollama.status
     model = await ollama.getBestModel(config.modelList)
     if (model) {
	 await ollama.preloadModel(model)
	 chat = new Chat(() => chat = chat, ollama)
	 chat.addMessage(config.systemPrompt)
     }
 })

 let text
 let chatBotOpen = false

 const roleIcons = { user: "👤", assistant: "🤖" }

 async function handleUserMessage() {
     chat.addMessage({ role: "user", content: text })
     text = ""
     await chat.complete(model)
 }
</script>

<button class="bot-opener" class:hidden={chatBotOpen} on:click={() => chatBotOpen = true}>
    <div class="text-bold">
	<span>✨ Need Help?</span>
	<span title={status ? $status.description : ""}>{status ? $status.icon : ""}</span>
    </div>
</button>

<content class="chat-bot" class:hidden={!chatBotOpen}>
    <div class="mb-10 text-bold">
	<span>🤖 HPC Assistant</span>
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
	<div class="text-small">Also, the assistant cannot read the documentation yet</div>
	<!-- TODO: Add the button "I need a Human!" that performs initial triage and writes a detailed email -->
    {/if}
</content>

<style>
 .mb-10 { margin-bottom: 10px; }
 .text-bold { font-weight: 700; }
 .mt-10 { margin-top: 10px; }
 .text-small { font-size: 80%; }

 .hidden {
     visibility: hidden;
 }
 
 .text {
     display: block;
     border-radius: 10px;
     font-size: 120%;
     padding: 8px 8px;
     width: 100%;
 }
 
 .chat-bot {
     background-color: white;
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

 .bot-opener {
     border: 0;
     background-color: #9a0eea;
     color: white;
     font-weight: 700;
     font-size: 120%;
     border-radius: 5px;
     position: absolute;
     bottom: 10px;
     right: 10px;
     padding: 10px 16px;
 }
</style>
