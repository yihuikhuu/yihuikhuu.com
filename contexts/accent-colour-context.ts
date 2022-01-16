import React from "react";

export type AccentColourOptions = "violet" | "teal" | "sky" | "lime" | "pink";

type AccentColourContextOptions = {
  colour: AccentColourOptions;
  setColour: (colour: AccentColourOptions) => void;
};

const AccentColourContext = React.createContext<AccentColourContextOptions>({
  colour: "violet",
  setColour: (colour: AccentColourOptions) => {},
});

export default AccentColourContext;
