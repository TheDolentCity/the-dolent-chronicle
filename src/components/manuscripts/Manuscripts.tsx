import type { CollectionEntry } from "astro:content";
import { LinkList } from "@/components/lists/LinkList";

type Manuscript = CollectionEntry<"manuscripts">;

export function ManuscriptList({ manuscripts }: { manuscripts: Manuscript[] }) {
	return (
		<ul className="not-prose">
			{manuscripts.map((manuscript) => (
				<ManuscriptListItem key={manuscript.id} manuscript={manuscript} />
			))}
		</ul>
	);
}

function ManuscriptListItem({ manuscript }: { manuscript: Manuscript }) {
	return (
		<LinkList.Item href={`/manuscripts/${manuscript.id}`}>
			<LinkList.Title title={manuscript.data.title} />
			<LinkList.Line />
			<LinkList.Date date={manuscript.data.published} />
		</LinkList.Item>
	);
}
