// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	modules: ["@vueuse/nuxt", "@nuxt/content"],
	css: ["vuetify/lib/styles/main.sass", "mdi/css/materialdesignicons.min.css"],
	content: {
		highlight: {
			// Theme used in all color schemes.
			theme: "github-light",
		},
		navigation: {
			fields: ["author", "publishedAt"],
		},
	},
	build: {
		transpile: ["vuetify"],
	},
	vite: {
		define: {
			"process.env.DEBUG": false,
		},
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@use "@/styles/main.scss" as *;',
				},
			},
		},
	},
});
