<script>
 export let size = 24
 export let speed = 750
 export let title = "Loading..."
</script>

<svg class="spinner" style="animation-duration: {speed}ms;" width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>{title}</title><path d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z" /></svg>

<style>
 .spinner {
     transition-property: transform;
     animation-name: svelte-spinner_infinite-spin;
     animation-iteration-count: infinite;
     animation-timing-function: linear;
 }

 @keyframes svelte-spinner_infinite-spin {
     from { transform: rotate(0deg); }
     to { transform: rotate(360deg); }
 }
</style>
