<script>
 export let prompt = "..."
 export let handleUserMessage
</script>

<button on:click={() => handleUserMessage(prompt)}
    class="my-1 py-1 px-2 w-full bg-slate-600 hover:bg-slate-500 text-white text-justify text-sm rounded-lg">
    {prompt}
</button>

<style>
 @tailwind base;
 @tailwind components;
 @tailwind utilities;
</style>
