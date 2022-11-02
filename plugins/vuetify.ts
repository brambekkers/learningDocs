import light from "./themes/light";
import dark from "./themes/dark";

import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

export default defineNuxtPlugin((nuxtApp) => {
	const vuetify = createVuetify({
		components,
		directives,
		display: {
			mobileBreakpoint: "md",
		},
		theme: {
			defaultTheme: "light",
			themes: { light, dark },
		},
	});

	nuxtApp.vueApp.use(vuetify);
});
