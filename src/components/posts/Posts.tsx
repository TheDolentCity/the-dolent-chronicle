import type { CollectionEntry } from "astro:content";
import { FormattedDate } from "@/components/time/FormattedDate";

type Post = CollectionEntry<"posts">;

export function PostList({ posts }: { posts: Post[] }) {
	return (
		<ul className="not-prose">
			{
				posts.map((post) => (
					<PostListItem key={post.id} post={post} />
				))
			}
		</ul>
	);
}

function PostListItem({ post }: { post: Post }) {
	return (
		<PostListItemLink id={post.id}>
			<PostListItemTitle title={post.data.title} />
			<PostListItemLine />
			<PostListItemDate published={post.data.published} />
		</PostListItemLink>
	);
}

function PostListItemLink({ id, children }: { id: string, children: React.ReactNode }) {
	return (
		<li>
			<a
				data-astro-prefetch
				href={`/posts/${id}/`}
				className="group flex flex-col sm:flex-row max-w-full gap-0.5 sm:gap-0 px-2 py-2 sm:items-center justify-between text-sm md:text-base overflow-hidden rounded hover:bg-zinc-400/25 dark:hover:bg-zinc-900 mst"
			>
				{children}
			</a>
		</li>
	);
}

function PostListItemTitle({ title }: { title: string }) {
	return (
		<h4 className="flex-none truncate text-zinc-900 dark:text-zinc-100">{title}</h4>
	);
}

function PostListItemLine() {
	return (
		<span className="hidden sm:flex grow w-full h-px mx-4 border-t border-dashed border-zinc-500 dark:border-zinc-700" />
	);
}

function PostListItemDate({ published }: { published: Date }) {
	return (
		<p className="flex-none truncate text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
			<FormattedDate date={published} />
		</p>
	);
}