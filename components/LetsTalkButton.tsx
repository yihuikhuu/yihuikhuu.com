import ColourThemeContext from "contexts/colour-theme-context";
import { classNames } from "helpers/classnames";
import Link from "next/link";

type LetsTalkButtonProps = {
  className?: string;
};

const LetsTalkButton: React.FC<LetsTalkButtonProps> = ({ className }) => (
  <ColourThemeContext.Consumer>
    {({ theme }) => (
      <span className={className + " inline-flex rounded-md shadow"}>
        <Link href="/contact">
          <a
            className={classNames(
              "transition-colors inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md bg-white hover:bg-gray-50 dark:bg-gray-600 dark:hover:bg-gray-700",
              `text-${theme}-600 hover:text-${theme}-700 dark:text-${theme}-200 dark:hover:text-${theme}-400`
            )}
          >
            Let&apos;s talk
          </a>
        </Link>
      </span>
    )}
  </ColourThemeContext.Consumer>
);

export default LetsTalkButton;
