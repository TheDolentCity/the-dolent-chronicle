import { FormattedDate } from "@/components/time/FormattedDate";

function LinkList({ children }: { children: React.ReactNode }) {
	return <ul className="not-prose">{children}</ul>;
}

function Item({ href, children }: { href: string; children: React.ReactNode }) {
	return (
		<li>
			<a
				data-astro-prefetch
				href={href}
				className="group flex flex-col sm:flex-row max-w-full gap-0.5 sm:gap-0 px-2 py-2 sm:items-center justify-between text-sm md:text-base overflow-hidden rounded hover:bg-zinc-400/25 dark:hover:bg-zinc-900 mst"
			>
				{children}
			</a>
		</li>
	);
}

function Title({ title }: { title: string }) {
	return (
		<h4 className="flex-none truncate text-zinc-900 dark:text-zinc-100">
			{title}
		</h4>
	);
}

function Line() {
	return (
		<span className="hidden sm:flex grow w-full h-px mx-4 border-t border-dashed border-zinc-500 dark:border-zinc-700" />
	);
}

function Date({ date }: { date: Date }) {
	return (
		<p className="flex-none truncate text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
			<FormattedDate date={date} />
		</p>
	);
}

LinkList.Item = Item;
LinkList.Title = Title;
LinkList.Line = Line;
LinkList.Date = Date;

export { LinkList };
