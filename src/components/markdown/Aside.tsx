import { CssBuilder } from "@/utils/css-builder";
import { BookMarked, BookOpenText, CircleHelp, Info } from "lucide-react";

export const AsideVariants = ["example", "info", "tip", "question"] as const;

interface AsideProps {
	type?: (typeof AsideVariants)[number];
	title?: string;
	children: React.ReactNode;
}

export function Aside(props: AsideProps) {
	function capitalize(s: string) {
		return s.charAt(0).toUpperCase() + s.slice(1);
	}
	
	if (props?.type && !AsideVariants.includes(props.type)) {
		throw new Error(
			"Invalid `type` prop passed to the `<Aside>` component.\n" +
				`Received: ${JSON.stringify(props.type)}\n` +
				`Expected one of ${AsideVariants.map((i) => JSON.stringify(i)).join(", ")}`
		);
	}

	const type = props.type ?? "info";
	const title = props.title ? props.title : capitalize(type);

	const asideCss = new CssBuilder()
		.addClass("not-prose my-4 lg:my-8 p-4 border-l-4 leading-none")
		.addClass("border-accent-800 dark:border-accent-400")
		.addClass("text-zinc-700 dark:text-zinc-300")
		.addClass("bg-accent-100/50 dark:bg-accent-950/50")
		.build();
	
	const titleCss = new CssBuilder()
		.addClass("flex gap-2 mb-2 items-center font-semibold")
		.addClass("text-accent-900 dark:text-accent-400")
		.build();

	return (
		<aside aria-label={title} className={asideCss}>
			<p className={titleCss} aria-hidden="true">
				<AsideIcon type={type} /> {title}
			</p>
			<p className="not-prose text-base">
				{props.children}
			</p>
		</aside>
	);
}

export function AsideIcon({ type } : { type: (typeof AsideVariants)[number]}) {
	switch (type) {
		case "example":
			return <BookOpenText className="s-4 text-[1.5rem]" />
		case "info":
			return <Info className="s-4 text-[1.5rem]" />
		case "tip":
			return <BookMarked className="s-4 text-[1.5rem]" />
		case "question":
			return <CircleHelp className="s-4 text-[1.5rem]" />
		default: break;
	}
}