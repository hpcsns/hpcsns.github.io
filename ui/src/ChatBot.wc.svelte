<svelte:options customElement="hpc-chatbot" />

<script>
 import { onMount } from "svelte"
 import { page } from "./lib/pageStore.js"

 const model = "stablelm2:1.6b-zephyr-q3_K_L"
 let baseUrl
 $: baseUrl = `${$page.protocol}//${$page.hostname}:${$page.port}`

 let messages = [
     { role: "system", content: "You are LucIAno, an helpful AI assistant, expert in High Performance Computing, Linux System Administration, and Python and FORTRAN programming. You always answer to users very precisely and to-the-point, helping them to clarify their question when they are vaguely expressed. You politely refuse to answer questions not related to your expertise area. Write output in Markdown." },
 ]
 let aiStatus = "🟡"
 let text

 const roleIcons = { user: "👤", assistant: "🤖" }

 // perform a fetch to Ollama API to preload the model and check availability
 onMount(async () => {
     try {
	 const response = await fetch(`${baseUrl}/api/generate`, {
	     method: "POST",
	     body: JSON.stringify({ model: model }),
	 })
	 aiStatus = (response.status === 200) ? "🟢" : "🔴"
     } catch (err) {
	 aiStatus = "🔴"
     }
 })

 async function handleUserMessage() {
     // TODO: Make the endpoint streaming
     messages = [...messages, { role: "user", content: text }]
     text = ""
     aiStatus = "🔵"
     const response = await fetch(`${baseUrl}/api/chat`, {
	 method: "POST",
	 body: JSON.stringify({
	     model: model,
	     messages: messages,
	     stream: false,
	 }),
     })
     if (response.status === 200) {
	 const data = await response.json()
	 aiStatus = "🟢"
	 messages = [...messages, data.message]
     } else
	 aiStatus = "🔴"
 }
</script>

<content class="chat-bot">
    <div class="mb-10 text-bold">🤖 HPC AI Assistant {aiStatus}</div>
    {#each messages as message}
	{#if message.role != "system" }
	    <div class="message">
		{roleIcons[message.role]}
		{message.content}
	    </div>
	{/if}
    {/each}
    <form action="#" on:submit|preventDefault={handleUserMessage}>
	<input class="text" bind:value={text} type="text" placeholder="What do you want help with?" />
    </form>
    <div class="mt-10 text-small">The assistant makes mistakes, always check important information</div>
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
