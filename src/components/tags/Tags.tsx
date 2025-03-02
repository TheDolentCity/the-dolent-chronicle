import clsx from "clsx";

interface Tag {
  tag: string;
  count: number;
}

export function TagList({ tags, className }: { tags: Tag[], className?: string | undefined }) {
  return (
    <ul className={clsx("not-prose flex flex-wrap gap-2 mt-16", className)}>
      {
        tags.map((tag) => (
          <TagListItem key={tag.tag} tag={tag} />
        ))
      }
    </ul>
  );
}

function TagListItem({ tag }: { tag: Tag }) {
  return (
    <TagListItemLink id={tag.tag}>
      <TagListItemText>{tag.tag}</TagListItemText>
      <TagListItemCount>{tag.count}</TagListItemCount>
    </TagListItemLink>
  );
}

function TagListItemLink({ id, children }: { id: string, children: React.ReactNode }) {
  return (
    <li>
      <a
        data-astro-prefetch
        href={`/tags/${id}/`}
        className="flex gap-1 px-2 py-1.5 rounded-lg font-medium bg-zinc-400/25 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
      >
        {children}
      </a>
    </li>
  );
}

function TagListItemText({ children }: { children: React.ReactNode }) {
	return (
		<span className="text-xs capitalize leading-none">{children}</span>
	);
}

function TagListItemCount({ children }: { children: React.ReactNode }) {
	return (
		<span className="text-xs leading-none">{children}</span>
	);
}