import AccentColourContext from "contexts/accent-colour-context";
import { classNames } from "helpers/classnames";
import Link from "next/link";

type LetsTalkButtonProps = {
  className?: string;
};

const LetsTalkButton: React.FC<LetsTalkButtonProps> = ({ className }) => (
  <AccentColourContext.Consumer>
    {({ colour }) => (
      <span className={className + " inline-flex rounded-md shadow"}>
        <Link href="/contact">
          <a
            className={classNames(
              "transition-colors inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md bg-white hover:bg-gray-50 dark:bg-gray-600 dark:hover:bg-gray-700",
              `text-${colour}-600 hover:text-${colour}-700 dark:text-${colour}-200 dark:hover:text-${colour}-400`
            )}
          >
            Let&apos;s talk
          </a>
        </Link>
      </span>
    )}
  </AccentColourContext.Consumer>
);

export default LetsTalkButton;
