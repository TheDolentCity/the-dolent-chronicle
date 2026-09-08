import type { CollectionEntry } from "astro:content";
import { LinkList } from "@/components/lists/LinkList";

type Post = CollectionEntry<"posts">;

export function PostList({ posts }: { posts: Post[] }) {
	return (
		<ul className="not-prose">
			{posts.map((post) => (
				<PostListItem key={post.id} post={post} />
			))}
		</ul>
	);
}

function PostListItem({ post }: { post: Post }) {
	return (
		<LinkList.Item href={`/posts/${post.id}`}>
			<LinkList.Title title={post.data.title} />
			<LinkList.Line />
			<LinkList.Date date={post.data.published} />
		</LinkList.Item>
	);
}
