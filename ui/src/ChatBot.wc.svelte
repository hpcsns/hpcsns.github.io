<svelte:options customElement={{ tag: "hpc-chatbot" }} />

<script>
 import { onMount, tick } from "svelte"
 import { get_current_component } from "svelte/internal"
 import Showdown from "showdown"
 import Highlight from "highlight.js"
 import CopyButtonPlugin from "highlightjs-copy"
 import { Ollama } from "./lib/ollama.js"
 import { Chat } from "./lib/chats.js"
 import config from "./lib/config.js"
 import timeAgo from "./lib/timeAgo.js"

 import highlightCopyStyle from "highlightjs-copy/dist/highlightjs-copy.min.css?raw"
 import highlightStyle from "highlight.js/styles/atom-one-dark.css?raw"

 const self = get_current_component()
 // inject full CSS styles for highlight
 const style = document.createElement("style")
 style.textContent += highlightStyle
 style.textContent += highlightCopyStyle
 self.$$.root.appendChild(style)
 
 const mdConverter = new Showdown.Converter()
 
 let ollama // ollama object to interact with the server
 let status // status variable bind to the svelte store of ollama
 let model // model that has been chosen as the best currently available
 let chat // chat that is currently visible on the screen

 Highlight.configure({
     languageDetectRe: /\blanguage-([\w-]+)\b/i,
 })
 Highlight.addPlugin(new CopyButtonPlugin())

 let text
 async function highlightCode() {
     const chatbotWCs = document.querySelectorAll("hpc-chatbot")
     for (let chatbotwc of chatbotWCs)
	 for (let codeblock of chatbotwc.shadowRoot.querySelectorAll("pre code:not([data-highlighted])"))
	     Highlight.highlightElement(codeblock)
 }

 // called when the chat has an update
 async function onChatUpdate() {
     chat = chat
 }

 async function handleUserMessage() {
     // TODO: Check if CTRL key is pressed and ignore
     await chat.addMessage({ role: "user", content: text })
     text = ""
     await chat.completeStreaming(model)
     await tick()
     // TODO: Highlight code blocks while the model is still writing
     await highlightCode()
 }

 onMount(async () => {
     // load ollama model and understand its status
     const baseUrl = `${window.location.protocol}//${window.location.hostname}:${window.location.port}`
     ollama = new Ollama(baseUrl)
     status = ollama.status
     model = await ollama.getBestModel(config.modelList)
     if (model) {
	 await ollama.preloadModel(model)
	 chat = new Chat(onChatUpdate, ollama)
	 await chat.addMessage(config.systemPrompt)
     }
 })

 let chatBotOpen = false
 let chatBotExpanded = false

 let msgTextSize = "text-base" 
 function cycleTextSize() {
     msgTextSize = (msgTextSize == "text-base") ? "text-sm" :
		   (msgTextSize == "text-sm") ? "text-lg" :
		   (msgTextSize == "text-lg") ? "text-base" : "text-base"
 }
</script>

<button class="absolute bottom-2 right-2 py-2 px-4 bg-violet-700 hover:bg-violet-600 font-bold text-lg text-white rounded-lg" class:hidden={chatBotOpen} on:click={() => chatBotOpen = true}>
    <span title="Try our AI Assistant">✨</span>
    <span class="px-1">Need Help?</span>
    <span title={status ? $status.description : ""}>{status ? $status.icon : ""}</span>
</button>

<div id="chatbot" class="absolute bottom-0 right-0 top-0 left-0 px-2 py-2 w-full h-full flex flex-row justify-end pointer-events-none" class:hidden={!chatBotOpen}>
    <content class="bg-violet-100 text-base rounded-md h-full px-4 py-2 z-50 pointer-events-auto
		    flex flex-col items-stretch justify-between"
	     class:w-full={chatBotExpanded} class:max-w-1-3={!chatBotExpanded}>
	<div class="mb-4 font-bold text-xl flex flex-row flex-wrap-reverse items-stretch justify-between">
	    <div class="flex flex-row flex-no-wrap justify-start flex-auto py-1">
		<div title={status ? $status.description : ""}>✨ HPC Assistant {status ? $status.icon : ""}</div>
	    </div>
	    <div class="flex flex-row flex-no-wrap justify-end flex-auto py-1">
		<button title="Change the messages text size" on:click={cycleTextSize}>🗛</button>
		{#if !chatBotExpanded}
		    <button title="Expand full width" on:click={() => chatBotExpanded = true}>↖️</button>
		{:else}
		    <button title="Reduce to lateral" on:click={() => chatBotExpanded = false}>↘️</button>
		{/if}
		<button title="Minify the assistant" on:click={() => chatBotOpen = false}>➖</button>
	    </div>
	</div>
	<div class="overflow-auto flex flex-col items-stretch">
	    {#if model && chat}
		{#each chat._.messages as message}
		    {#if message.role != "system" }
			<div class="rounded-md py-2 px-4 text-justify block w-full my-2 {msgTextSize}"
			     class:bg-sky-200={message.role == "user"} class:bg-lime-200={message.role == "assistant"}>			    
			    <div class="mb-2 flex flex-row flex-wrap justify-between items-baseline">
				<span class="font-bold">{#if message.role == "user"}You{:else}Assistant{/if}</span>
				<span class="text-grey-500 text-sm">{$timeAgo(message.timestamp)}</span>
			    </div>
			    <div class="prose-stone">
				{@html mdConverter.makeHtml(message.content)}
			    </div>
			</div>
		    {/if}
		{/each}
	    {/if}
	</div>

	<div>
	    {#if model && chat}
		<form action="#" on:submit|preventDefault={handleUserMessage} class="my-2">
		    <input disabled={status && $status.slug == "running"} class="w-full px-2 py-1 text-lg rounded-lg bg-violet-100" bind:value={text} type="text"
			   placeholder="What do you want help with?" />
		</form>
		<div class="mt-2 text-sm text-justify">The assistant makes mistakes and cannot read the documentation yet: always check important information!</div>
		<!-- TODO: Add the button "I need a Human!" that performs initial triage and writes a detailed email -->
	    {/if}
	</div>
    </content>
</div>

<style>
 @tailwind base;
 @tailwind components;
 @tailwind utilities;

 .max-w-1-3 {
     max-width: 33.33%;
 }
</style>

