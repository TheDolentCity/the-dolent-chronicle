import { themeStore } from "@/stores/theme-store";
import { Themes } from "@/types/themes";
import { LocalStorageKeys } from "@/utils/localStorage";
import { useStore } from "@nanostores/react";
import clsx from "clsx";
import { MonitorCog, Moon, Sun } from "lucide-react";
import { useEffect, type ReactNode } from "react";

function setDocumentTheme(theme: Themes) {
	document.documentElement.className = theme;
	document.documentElement.dataset.theme = theme;
}

const THEME_LIST: Array<{ icon: ReactNode; value: Themes }> = [
	{
		icon: <MonitorCog style={{ width: "1rem", height: "1rem" }} />,
		value: Themes.Auto,
	},
	{
		icon: <Sun style={{ width: "1rem", height: "1rem" }} />,
		value: Themes.Light,
	},
	{
		icon: <Moon style={{ width: "1rem", height: "1rem" }} />,
		value: Themes.Dark,
	},
];

export function ThemeSelect({ className }: { className?: string | undefined }) {
	const currentTheme = useStore(themeStore);

	useEffect(() => {
		const theme = localStorage.getItem(LocalStorageKeys.Theme);
		if (
			theme === Themes.Auto ||
			theme === Themes.Light ||
			theme === Themes.Dark
		) {
			themeStore.set(theme);
			return;
		}

		// Default theme
		themeStore.set(Themes.Auto);
	}, []);

	function changeTheme(value: Themes) {
		themeStore.set(value);

		let theme = value;

		// If auto, get the preferred theme from the bowser
		if (value === Themes.Auto) {
			theme = window.matchMedia("(prefers-color-scheme: dark)").matches
				? Themes.Dark
				: Themes.Light;
		}

		// Update theme in local storage and document element
		localStorage.setItem(LocalStorageKeys.Theme, value);
		setDocumentTheme(theme);
	}

	return (
		<ThemeSelectRadioGroup className={className}>
			<ThemeSelectRadioIndicator theme={currentTheme} />
			{THEME_LIST.map((item) => (
				<ThemeSelectRadioOption
					key={item.value}
					icon={item.icon}
					theme={item.value}
					currentTheme={currentTheme}
					changeTheme={changeTheme}
				/>
			))}
		</ThemeSelectRadioGroup>
	);
}

function ThemeSelectRadioGroup({ className, children }: { className?: string | undefined, children: React.ReactNode }) {
	return (
		<div
			className={clsx("relative inline-flex p-0.5 items-center rounded-full bg-zinc-400/25 dark:bg-zinc-900 mst", className)}
			role="radiogroup"
		>
			{children}
		</div>
	);
}

function ThemeSelectRadioIndicator({ theme }: { theme: Themes }) {
	return (
		<div
			className={clsx(
				"transition-left absolute top-0.5 h-7 w-7 rounded-full bg-zinc-100 dark:bg-zinc-950 mst",
				theme === Themes.Auto && "left-0.5",
				theme === Themes.Light && "left-[30px]",
				theme === Themes.Dark && "left-[58px]"
			)}
		></div>
	);
}

function ThemeSelectRadioOption({
	icon,
	theme,
	currentTheme,
	changeTheme,
}: {
	icon: ReactNode;
	theme: Themes;
	currentTheme: Themes;
	changeTheme: Function;
}) {
	return (
		<div
			className={clsx(
				"relative inline-flex h-7 w-7 items-center justify-center cursor-pointer",
				theme === currentTheme
					? "text-zinc-900 dark:text-zinc-300"
					: "text-zinc-500 dark:text-zinc-500"
			)}
			onClick={() => changeTheme(theme)}
			onKeyDown={(e) => {
				if (e.key === "Enter" || e.key === " ") {
					changeTheme(theme);
				}
			}}
			tabIndex={0}
			role="radio"
			aria-label={theme}
			aria-checked={theme === currentTheme}
		>
			{icon}
		</div>
	);
}
