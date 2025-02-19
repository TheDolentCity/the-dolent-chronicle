export function PostList({ children }: { children: React.ReactNode }) {
	return (
		<div
			className="relative flex p-0.5 items-center rounded-full bg-zinc-400/25 dark:bg-zinc-900 mst"
			role="radiogroup"
		>
			{children}
		</div>
	);
}