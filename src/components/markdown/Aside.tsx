import { CssBuilder } from "@/utilities/css-builder";
import {
	BookOpenText,
	CircleCheck,
	CircleHelp,
	Info,
	OctagonAlert,
} from "lucide-react";

export const AsideVariants = [
	"example",
	"info",
	"alert",
	"question",
	"tip",
] as const;

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
				`Expected one of ${AsideVariants.map((i) => JSON.stringify(i)).join(
					", ",
				)}`,
		);
	}

	const type = props.type ?? "info";
	const title = props.title ? props.title : capitalize(type);

	const asideCss = new CssBuilder()
		.addClass(
			"not-prose dark:saturate-50 my-4 lg:my-8 p-4 border-l-4 text-base",
		)
		.addClass(
			"border-blue-800 dark:border-blue-400 text-zinc-700 dark:text-zinc-300 bg-blue-100/50 dark:bg-blue-950/50",
			type == "example",
		)
		.addClass(
			"border-blue-800 dark:border-blue-400 text-zinc-700 dark:text-zinc-300 bg-blue-100/50 dark:bg-blue-950/50",
			type == "info",
		)
		.addClass(
			"border-negative-800 dark:border-negative-400 text-zinc-700 dark:text-zinc-300 bg-negative-100/50 dark:bg-negative-950/50",
			type == "alert",
		)
		.addClass(
			"border-warning-800 dark:border-warning-400 text-zinc-700 dark:text-zinc-300 bg-warning-100/50 dark:bg-warning-950/50",
			type == "question",
		)
		.addClass(
			"border-accent-800 dark:border-accent-400 text-zinc-700 dark:text-zinc-300 bg-accent-100/50 dark:bg-accent-950/50",
			type == "tip",
		)
		.build();

	const titleCss = new CssBuilder()
		.addClass("flex gap-2 mb-2 items-center font-semibold leading-none")
		.addClass("text-blue-900 dark:text-blue-400", type == "example")
		.addClass("text-blue-900 dark:text-blue-400", type == "info")
		.addClass("text-negative-900 dark:text-negative-400", type == "alert")
		.addClass("text-warning-900 dark:text-warning-400", type == "question")
		.addClass("text-accent-900 dark:text-accent-400", type == "tip")
		.build();

	return (
		<aside aria-label={title} className={asideCss}>
			<p className={titleCss} aria-hidden="true">
				<AsideIcon type={type} /> {title}
			</p>
			{props.children}
		</aside>
	);
}

export function AsideIcon({ type }: { type: (typeof AsideVariants)[number] }) {
	switch (type) {
		case "example":
			return <BookOpenText className="s-4 text-[1.5rem]" />;
		case "info":
			return <Info className="s-4 text-[1.5rem]" />;
		case "alert":
			return <OctagonAlert className="s-4 text-[1.5rem]" />;
		case "question":
			return <CircleHelp className="s-4 text-[1.5rem]" />;
		case "tip":
			return <CircleCheck className="s-4 text-[1.5rem]" />;
		default:
			break;
	}
}
