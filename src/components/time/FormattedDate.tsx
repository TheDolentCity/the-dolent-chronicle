export function FormattedDate({ date } : { date: Date }) {
	const dateTime = date.toISOString();
	const localDateTime = date.toLocaleDateString("en-us", {
		year: "numeric",
		month: "short",
		day: "numeric",
	});

	return (
		<time dateTime={dateTime} className="tabular-nums truncate">
			{localDateTime}
		</time>
	);
}