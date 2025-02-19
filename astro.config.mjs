// @ts-check
import { remarkReadingTime } from "./plugins/remark-reading-plugin.mjs";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
	site: "https://thedolentchronicle.com",
	output: "static",
	adapter: vercel(),
	integrations: [react()],
	markdown: {
		remarkPlugins: [remarkReadingTime],
	},
	vite: {
		plugins: [mdx(), sitemap(), tailwindcss()],
	},
});
