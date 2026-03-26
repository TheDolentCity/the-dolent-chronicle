import { SITE_DESCRIPTION, SITE_TITLE } from "@/constants";
import { getContainerRenderer as getMDXRenderer } from "@astrojs/mdx";
import { getContainerRenderer as getReactContainerRenderer } from "@astrojs/react";
import rss, { type RSSFeedItem } from "@astrojs/rss";
import type { APIContext } from "astro";
import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { loadRenderers } from "astro:container";
import { getCollection, render } from "astro:content";
import { transform, walk } from "ultrahtml";
import sanitize from "ultrahtml/transformers/sanitize";

export async function GET(context: APIContext) {
	// Get the URL to prepend to relative site links. Based on `site` in `astro.config.mjs`.
	// Removes trailing slashes from the site URI.
	let site = context.site?.href || "https://thedolentchronicle.com";
	site = site.at(-1) === "/" ? site.slice(0, -1) : site;

	// Load renderers for UI frameworks (e.g. MDX, React, Vue, etc.)
	const renderers = await loadRenderers([
		getMDXRenderer(),
		getReactContainerRenderer(),
	]);

	// Create a new Astro container that we can render components with.
	// See https://docs.astro.build/en/reference/container-reference/
	const container = await AstroContainer.create({ renderers });

	// Load the content collection for the RSS feed.
	// Sort by publication date descending.
	const posts = (await getCollection("posts")).sort((a, b) =>
		a.data.published > b.data.published ? -1 : 1,
	);

	// Loop over blog posts to create feed items for each, including full content
	const items: RSSFeedItem[] = [];
	for (const post of posts) {
		// Get the `<Content/>` for the current post and render it to a string
		const { Content } = await render(post);
		const rawContent = await container.renderToString(Content);

		// Process and sanitize the raw content:
		// - Removes `<!DOCTYPE html>` preamble
		// - Makes link `href` and image `src` attributes absolute instead of relative
		// - Strips any `<script>` and `<style>` tags
		const content = await transform(
			rawContent.replace(/^<!DOCTYPE html>/, ""),
			[
				async (node) => {
					await walk(node, (node) => {
						// Fix relative anchor and img urls
						if (node.name === "a" && node.attributes.href?.startsWith("/")) {
							node.attributes.href = site + node.attributes.href;
						}
						if (node.name === "img" && node.attributes.src?.startsWith("/")) {
							node.attributes.src = site + node.attributes.src;
						}
					});
					return node;
				},
				sanitize({ dropElements: ["script", "style"] }),
			],
		);

		items.push({
			...post.data,
			pubDate: post.data.published,
			link: `/posts/${post.id}/`,
			content: content,
		});
	}

	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: site,
		items: items,
	});
}
