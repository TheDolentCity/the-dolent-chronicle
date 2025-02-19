import { atom } from 'nanostores';
import { Themes } from "@/types/themes";

export const themeStore = atom(Themes.Auto);