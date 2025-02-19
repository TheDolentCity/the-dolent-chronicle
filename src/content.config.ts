import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Define collections
const posts = defineCollection({
	loader: glob({ base: './src/posts', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		published: z.coerce.date(), // Transform string to Date object
		updated: z.coerce.date().optional(), // Transform string to Date object
		image: z.string().optional(),
		tags: z.array(z.string()).optional(),
	}),
});

// Export a single `collections` object to register your collection(s)
export const collections = { posts };
