import Typography from "@tailwindcss/typography"

export default {
    content: ["./src/**/*.svelte"],
    theme: {
	extend: {},
    },
    plugins: [
	Typography,
    ],
    darkmode: "class",
}

