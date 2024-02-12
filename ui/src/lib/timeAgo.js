import TimeAgo from "javascript-time-ago"
import en from "javascript-time-ago/locale/en"
import { readable } from "svelte/store"

TimeAgo.addLocale(en)
const ago = new TimeAgo("en-US")

const timeAgo = ts => ago.format(new Date(ts))

// returns a svelte store with subscribe updating the time every second
export default readable(timeAgo, set => {
    const timer = setInterval(() => set(timeAgo), 1000)
    return () => clearInterval(timer)
})
