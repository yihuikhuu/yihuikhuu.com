import { Switch } from "@headlessui/react";
import { MoonIcon, SunIcon } from "@heroicons/react/outline";
import AccentColourContext from "contexts/accent-colour-context";
import ThemeContext from "contexts/theme-context";
import { classNames } from "helpers/classnames";

type ThemeSelectorProps = {
  className?: string;
};

const ThemeSelector = ({ className }: ThemeSelectorProps) => (
  <ThemeContext.Consumer>
    {({ theme, setTheme }) => (
      <AccentColourContext.Consumer>
        {({ colour }) => (
          <Switch.Group>
            <div className={className + " flex items-center"}>
              <Switch.Label className="mr-2">
                {theme == "dark" ? (
                  <MoonIcon className="h-5 w-5 text-white" />
                ) : (
                  <SunIcon className="h-5 w-5 text-gray-900" />
                )}
              </Switch.Label>
              <Switch
                checked={theme == "dark"}
                onChange={(value: boolean) =>
                  setTheme(value ? "dark" : "light")
                }
                className={classNames(
                  theme == "dark" ? "bg-gray-600" : "bg-gray-200",
                  `transition-colors focus:ring-${colour}-500`,
                  `relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-white dark:ring-offset-gray-900`
                )}
                aria-label="theme-toggle"
              >
                <span
                  className={classNames(
                    theme == "dark" ? "translate-x-6" : "translate-x-1",
                    "inline-block w-4 h-4 transform bg-white rounded-full transition-transform"
                  )}
                />
              </Switch>
            </div>
          </Switch.Group>
        )}
      </AccentColourContext.Consumer>
    )}
  </ThemeContext.Consumer>
);

export default ThemeSelector;
