import { defineConfig } from "vite"
import { svelte } from "@sveltejs/vite-plugin-svelte"

function WcHotReload() {
    return {
	name: "wc-hot-reload",
	enforce: "post",
	handleHotUpdate({ file, server }) {
	    if (file.includes(".wc.") && file.endsWith(".svelte"))
		server.ws.send({ type: "full-reload", path: "components.js" })
	}
    }
}

export default defineConfig({
    plugins: [
	svelte({
	    include: /\.wc\.svelte$/,
	    emitCss: false,
	    compilerOptions: {
		customElement: true,
	    },
	}),
	svelte({
	    exclude: /\.wc\.svelte$/,
	    emitCss: false,
	}),
	WcHotReload(),
    ],
    build: {
	sourcemap: true,
	target: "modules",
	lib: {
	    entry: "src/components.js",
	    name: "hpc-components",
	    fileName: "components",
	},
    },
    server: {
	proxy: {
	    "/api": {
		target: "http://localhost:11434",
		changeOrigin: true,
	    },
	},
    },
})
