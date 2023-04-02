import { wrapProvider } from "helpers/provider-wrapper";
import { createContext, useContext } from "react";

export type AccentColourOptions = "violet" | "teal" | "sky" | "lime" | "pink";

interface AccentColourContextOptions {
  colour: AccentColourOptions;
  setColour: (colour: AccentColourOptions) => void;
}

const AccentColourContext = createContext<AccentColourContextOptions>({
  colour: "violet",
  setColour: (colour: AccentColourOptions) => {},
});

export const useAccentColour = () => useContext(AccentColourContext);
export const AccentColourProvider = wrapProvider(AccentColourContext.Provider);
