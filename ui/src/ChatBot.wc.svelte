<svelte:options customElement={{ tag: "hpc-chatbot" }} />

<script>
 import { onMount, tick } from "svelte"
 import { get } from "svelte/store"
 import { get_current_component } from "svelte/internal"
 import { SvelteToast, toast } from "@zerodevx/svelte-toast"
 import Spinner from "./Spinner.svelte"
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
     if (get(status).slug == "running") {
	 toast.push("Wait for the assistant to answer before sending a reply")
	 return
     }
     await chat.addMessage({ role: "user", content: text })
     text = ""
     await tick()
     await highlightCode()
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
	 await chat.addMessage(config.prompts.assistant)
     }
 })

 async function copyChat() {
     try {
	 const mdchat = chat.toMarkdown()
	 await navigator.clipboard.writeText(mdchat)
	 toast.push("Chat copied to clipboard!")
     } catch (error) {
	 toast.push(`Error in copying text to clipboard: ${error}`)
     }
 }

 async function regenerateMessage(messageId) {
     await chat.regenerateStreaming(model, messageId)
     await tick()
     await highlightCode()
 }

 async function copyMessage(messageId) {
     try {
	 const mdmessage = chat.messageToMarkdown(messageId)
	 await navigator.clipboard.writeText(mdmessage)
	 toast.push("Message copied to clipboard!")
     } catch (error) {
	 toast.push(`Error in copying text to clipboard: ${error}`)
     }
 }

 let helpdeskMode = false
 async function startSupportBot() {
     // change the system prompt and add notice to the user in chat
     helpdeskMode = true
     chat._.messages[0] = config.prompts.helpdesk
     await chat.addMessage(config.prompts.helpnotice)
     await tick()
     await chat.completeStreaming(model)
     await tick()
     // TODO: Highlight code blocks while the model is still writing
     await highlightCode()
 }

 let chatBotOpen = false
 let chatBotExpanded = false

 let msgTextSize = "text-base" 
 function cycleTextSize() {
     msgTextSize = (msgTextSize == "text-base") ? "text-sm" :
		   (msgTextSize == "text-sm") ? "text-lg" :
		   (msgTextSize == "text-lg") ? "text-base" : "text-base"
 }

 function keyPressedInForm(e) {
     if (e.keyCode == 10) // Ctrl + Enter
	 setTimeout(handleUserMessage, 0)
     else if (e.keyCode == 13 && !e.shiftKey) // Enter w/o Shift
	 setTimeout(handleUserMessage, 0)
 }
</script>

<button class="absolute bottom-2 right-2 py-2 px-4 bg-violet-700 hover:bg-violet-600 font-bold text-lg text-white rounded-lg" class:hidden={chatBotOpen} on:click={() => chatBotOpen = true}>
    <span title="Try our AI Assistant">✨</span>
    <span class="px-1">Need Help?</span>
    <span title={status ? $status.description : ""}>{status ? $status.icon : ""}</span>
</button>

<div id="chatbot" class="absolute bottom-0 right-0 top-0 left-0 px-2 py-2 w-full h-full flex flex-row justify-end pointer-events-none" class:hidden={!chatBotOpen}>
    <content class="bg-violet-100 text-base rounded-md h-full px-4 py-2 z-50 pointer-events-auto
		    flex flex-row justify-center"
	     class:w-full={chatBotExpanded} class:max-w-1-3={!chatBotExpanded}>
	<div class="flex flex-col items-stretch justify-between max-w-screen-md">
	    <div class="mb-4 font-bold text-xl flex flex-row flex-wrap-reverse items-stretch justify-between">
		<div class="flex flex-row flex-no-wrap justify-start flex-auto py-1">
		    <div title={status ? $status.description : ""}>✨ HPC Assistant {status ? $status.icon : ""}</div>
		</div>
		<div class="flex flex-row flex-no-wrap justify-end flex-auto py-1 gap-1">
		    <button title="Copy the conversation as Markdown" on:click={copyChat}>📋</button>
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
		    {#each chat._.messages as message (message.id)}
			{#if message.role != "system" }
			    <div class="rounded-md py-2 px-4 text-justify block w-full my-2 {msgTextSize}"
				 class:bg-sky-200={message.role == "user"} class:bg-lime-200={message.role == "assistant"} class:bg-orange-200={message.role == "notice"}>
				<div class="mb-2 flex flex-row flex-wrap justify-between items-baseline">
				    <div class="flex flex-row flex-nowrap justify-start items-baseline gap-2">
					<span class="font-bold mr-4">
					    {#if message.role == "user"}
						You
					    {:else if message.role == "notice"}
						Important
					    {:else}
						Assistant
					    {/if}
					</span>
					<button on:click={copyMessage(message.id)}>
					    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Copy</title><path d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z" /></svg>
					</button>
					{#if message.role == "assistant"}
					    <button on:click={regenerateMessage(message.id)}>
						<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Regenerate</title><path d="M12,6V9L16,5L12,1V4A8,8 0 0,0 4,12C4,13.57 4.46,15.03 5.24,16.26L6.7,14.8C6.25,13.97 6,13 6,12A6,6 0 0,1 12,6M18.76,7.74L17.3,9.2C17.74,10.04 18,11 18,12A6,6 0 0,1 12,18V15L8,19L12,23V20A8,8 0 0,0 20,12C20,10.43 19.54,8.97 18.76,7.74Z" /></svg>
					    </button>
					{/if}
				    </div>
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
		    <div class="my-2 relative">
			<div on:keypress={keyPressedInForm} contenteditable="true" disabled={status && $status.slug == "running"} class="w-full px-2 py-1 text-lg rounded-lg bg-violet-100 break-words text-justify border-2 border-solid border-black" bind:innerText={text} type="text" placeholder="What do you want help with?" role="input" />
			{#if status && $status.slug == "running"}
			    <div class="absolute bottom-0 top-0 right-2 py-1">
				<Spinner title="Waiting for the assistant..." />
			    </div>
			{/if}
		    </div>
		    <div class="mt-2 text-sm text-justify">The assistant makes mistakes and cannot read the documentation yet: always check important information!</div>
		    <button class:hidden={helpdeskMode} class="mt-2 py-1 w-full bg-violet-600 hover:bg-violet-700 font-bold text-lg text-white rounded-lg" on:click={startSupportBot}>
			<span class="px-1">👩‍💻 I Need Human Help for This!</span>
		    </button>
		{/if}
	    </div>
	</div>
    </content>
</div>

<SvelteToast />

<style>
 @tailwind base;
 @tailwind components;
 @tailwind utilities;

 .max-w-1-3 {
     max-width: 33.33%;
 }

 [contenteditable=true]:empty:before {
     content: attr(placeholder);
     color: grey;
 }
</style>

