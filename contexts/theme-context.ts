import React from "react";

export type ThemeOptions = "dark" | "light";

export type ThemeContextOptions = {
  theme: ThemeOptions;
  setTheme: (theme: ThemeOptions) => void;
};

const ThemeContext = React.createContext<ThemeContextOptions>({
  theme: "light",
  setTheme: (theme: ThemeOptions) => {},
});

export default ThemeContext;
