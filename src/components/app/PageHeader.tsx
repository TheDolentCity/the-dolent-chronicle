export function PageHeader({ children }: { children: React.ReactNode }) {
	return (
		<div className="relative flex gap-4 !mb-1 lg:!mb-4 items-center justify-between">
			{children}
		</div>
	);
}
