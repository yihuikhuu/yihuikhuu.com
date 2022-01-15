import * as React from "react";

export type ColourThemeOptions = "violet" | "teal" | "sky" | "lime" | "pink";

type ColourThemeContextOptions = {
  theme: ColourThemeOptions;
  setTheme: (theme: ColourThemeOptions) => void;
};

const ColourThemeContext = React.createContext<ColourThemeContextOptions>({
  theme: "violet",
  setTheme: (theme: ColourThemeOptions) => {},
});

export default ColourThemeContext;
