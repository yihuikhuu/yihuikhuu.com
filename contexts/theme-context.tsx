import { wrapProvider } from "helpers/provider-wrapper";
import { createContext, useContext } from "react";

export type ThemeOptions = "dark" | "light";

export interface ThemeContextOptions {
  theme: ThemeOptions;
  setTheme: (theme: ThemeOptions) => void;
}

const ThemeContext = createContext<ThemeContextOptions>({
  theme: "light",
  setTheme: (theme: ThemeOptions) => {},
});

export const useTheme = () => useContext(ThemeContext);
export const ThemeProvider = wrapProvider(ThemeContext.Provider);
