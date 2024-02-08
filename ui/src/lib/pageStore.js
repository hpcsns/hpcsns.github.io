import { writable } from "svelte/store"

function createPageStore() {
    const { subscribe, set } = writable(window.location)
    window.addEventListener("popstate", () => set(window.location))
    return { subscribe }
}

export const page = createPageStore()
