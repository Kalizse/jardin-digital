
// @ts-check
import {
	defineConfig,
	passthroughImageService,
	sharpImageService,
} from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";

// Desactivar optimización de imágenes en desarrollo
const disableImageOptimization = process.env.NODE_ENV === "development";

export default defineConfig({
	trailingSlash: "never",

	site: "https://kalizse.github.io",
	base: "/jardin-digital",

	vite: {
		plugins: [tailwindcss()],
	},

	integrations: [mdx(), icon(), sitemap()],

	image: {
		service: disableImageOptimization
			? passthroughImageService()
			: sharpImageService(),
	},
});
