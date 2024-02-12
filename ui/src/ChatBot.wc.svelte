<svelte:options customElement="hpc-chatbot" />

<script>
 import { onMount } from "svelte"
 import { Ollama } from "./lib/ollama.js"
 import { Chat } from "./lib/chats.js"
 import config from "./lib/config.js"
 import timeAgo from "./lib/timeAgo.js"

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

 async function handleUserMessage() {
     chat.addMessage({ role: "user", content: text })
     text = ""
     await chat.complete(model)
 }
</script>

<button class="absolute bottom-2 right-2 py-2 px-4 bg-violet-600 font-bold text-lg text-white rounded-lg" class:hidden={chatBotOpen} on:click={() => chatBotOpen = true}>
    <span title="Try our AI Assistant">✨</span>
    <span class="px-1">Need Help?</span>
    <span title={status ? $status.description : ""}>{status ? $status.icon : ""}</span>
</button>

<content class="absolute bottom-2 right-2 py-2 px-4 bg-white text-base rounded-md flex flex-col items-stretch" class:hidden={!chatBotOpen}>
    <div class="mb-4 font-bold text-xl">
	<span>✨ HPC Assistant</span>
	<span title={status ? $status.description : ""}>{status ? $status.icon : ""}</span>
    </div>
    {#if model && chat}
	{#each chat._.messages as message}
	    {#if message.role != "system" }
		<div class="rounded-md py-2 px-4 text-justify text-base block w-3/4 my-2"
		     class:bg-sky-200={message.role == "user"} class:place-self-end={message.role == "user"}
		     class:bg-lime-200={message.role == "assistant"} class:place-self-start={message.role == "assistant"}>

		    <div class="mb-2 flex flex-row justify-between items-baseline">
			<span class="font-bold">{#if message.role == "user"}You{:else}Assistant{/if}</span>
			<span class="text-grey-500 text-sm">{$timeAgo(message.timestamp)}</span>
		    </div>
		    <div>
			{message.content}
		    </div>
		</div>
	    {/if}
	{/each}
	
	<form action="#" on:submit|preventDefault={handleUserMessage} class="my-2">
	    <input disabled={status && $status.slug == "running"} class="w-full px-2 py-1 text-lg rounded-lg" bind:value={text} type="text"
		   placeholder="What do you want help with?" />
	</form>
	<div class="mt-2 text-sm">The assistant makes mistakes, always check important information</div>
	<div class="text-sm">Also, the assistant cannot read the documentation yet</div>
	<!-- TODO: Add the button "I need a Human!" that performs initial triage and writes a detailed email -->
    {/if}
</content>

<style>
 @tailwind base;
 @tailwind components;
 @tailwind utilities;
</style>
