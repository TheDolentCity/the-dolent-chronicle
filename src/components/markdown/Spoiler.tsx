import { CssBuilder } from "@/utils/css-builder";
import { useState, type ReactNode } from "react";

export function Spoiler({ children }: { children: ReactNode }) {
	const [revealed, setRevealed] = useState(false);

	const css = new CssBuilder()
		.addClass("inline transition duration-500 select-text")
		.addClass("blur-sm", !revealed)
		.build();

	return (
		<span
			onClick={() => setRevealed(true)}
			title="Click to reveal"
			className={css}
		>
			{children}
		</span>
	);
}
