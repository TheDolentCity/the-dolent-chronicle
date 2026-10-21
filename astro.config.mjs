// @ts-check
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import { remarkReadingTime } from "./plugins/remark-reading-plugin.mjs";
import { unified } from "@astrojs/markdown-remark";

export default defineConfig({
	site: "https://thedolentchronicle.com",
	output: "static",
	adapter: vercel({
		imageService: true,
	}),
	integrations: [sitemap(), mdx(), react()],
	markdown: {
		processor: unified({
			remarkPlugins: [remarkReadingTime],
		}),
		shikiConfig: {
			theme: "vitesse-dark",
		},
	},
	prefetch: true,
	redirects: {
		"/posts/review-runecairn-bestiary":
			"/posts/play-critica-runecairn-bestiary",
	},
	vite: {
		plugins: [mdx(), sitemap(), tailwindcss()],
		build: {
			rolldownOptions: {
				// Drops ONE warning (#1252): rolldown's MODULE_LEVEL_DIRECTIVE for
				// the `"use astro:head-inject"` directive Astro prepends to every
				// `?astroPropagatedAssets` MDX module — one per MDX page importing a
				// component, eight today. Nothing reads that directive any more; it
				// is dead code Astro left behind when head propagation moved to
				// module-id detection, and rolldown 1.2.9 started warning on it.
				// Upstream: withastro/astro#18087, fix in #18088. Delete this hook
				// once the Astro release carrying that fix is installed. Every other
				// warning, and this code for any other directive, still prints.
				onwarn(warning, defaultHandler) {
					if (
						warning.code === "MODULE_LEVEL_DIRECTIVE" &&
						warning.message.includes('"use astro:head-inject"')
					) {
						return;
					}
					defaultHandler(warning);
				},
			},
		},
	},
});
