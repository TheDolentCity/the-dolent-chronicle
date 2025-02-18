import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { rssSchema } from '@astrojs/rss';

// Define collections
const posts = defineCollection({
	loader: glob({ base: './src/posts', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		published: z.coerce.date(), // Transform string to Date object
		updated: z.coerce.date().optional(),
		image: z.string().optional(),
	}),
});

// Export a single `collections` object to register your collection(s)
export const collections = { posts };
