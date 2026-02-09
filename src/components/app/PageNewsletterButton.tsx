import { MoveLeft, Newspaper } from "lucide-react";

export function PageNewsletterButton() {
	return (
		<a
			href="/newsletter"
			title="Sign up to newsletter"
			className="not-prose absolute -left-10 lg:-left-14 top-1 lg:top-2 p-2 rounded-full text-zinc-600 dark:text-zinc-400 hover:bg-white hover:dark:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-100 mst"
		>
			{/* <p className="hidden sm:block absolute -left-30 -top-20 font-beanie text-3xl text-amber-700 dark:text-amber-400">
				Newsletter
				<br /> signup!
			</p> */}
			<Newspaper className="size-4 lg:size-6" />
		</a>
	);
}
