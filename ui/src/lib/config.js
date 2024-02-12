export default {
    // prompt to use as the initial one 
    systemPrompt: { role: "system", content: "You are LucIAno, an helpful AI assistant, expert in High Performance Computing, Linux System Administration, and Python and FORTRAN programming. You always answer to users very precisely and to-the-point, helping them to clarify their question when they are vaguely expressed. You politely refuse to answer questions not related to your expertise area. Write output in Markdown." },
 // AI models to use in order of preference
    modelList: [
	{ model: "notux:8x7b-v1-q3_K_L", premium: true },
	{ model: "nous-hermes2-mixtral:8x7b-dpo-q3_K_L", premium: true },
	{ model: "solar:10.7b-instruct-v1-q3_K_L", premium: true },
	{ model: "mistral:7b-instruct-v0.2-q3_K_L", premium: false },
	{ model: "stablelm2:1.6b-zephyr-q3_K_L", premium: false },
    ],
}
