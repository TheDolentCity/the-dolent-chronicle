import { Star } from "lucide-react";

export const StarCount = [0, 1, 2, 3, 4, 5] as const;

export function Stars({ stars }: { stars: (typeof StarCount)[number] }) {
	if (!StarCount.includes(stars)) {
		throw new Error(
			"Invalid `type` prop passed to the `<Aside>` component.\n" +
				`Received: ${JSON.stringify(stars)}\n` +
				`Expected one of ${StarCount.map((i) => JSON.stringify(i)).join(", ")}`
		);
	}

	const positive = [...Array(stars)];
	const negative = [...Array(5 - stars)];

	return (
		<div className="not-prose flex gap-1 -mt-4">
			{positive.map((e, i) => (
				<Star className="text-amber-600 fill-amber-600 dark:text-amber-400 dark:fill-amber-400" />
			))}
			{negative.map((e, i) => (
				<Star className="opacity-50 text-amber-600 dark:text-amber-400" />
			))}
		</div>
	);
}
