import type { ThemeOption } from "../types/theme";

export const themeStyles: Record<ThemeOption, string> = {
  light: "bg-white text-black border-gray-200",
  dark: "bg-gray-800 text-white border-gray-600",
  ocean: "bg-blue-100 text-blue-900 border-blue-400",
  forest: "bg-green-100 text-green-900 border-green-400",
};