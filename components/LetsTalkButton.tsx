import { classNames } from "helpers/classnames";
import Link from "next/link";

type LetsTalkButtonProps = {
  className?: string;
};

const LetsTalkButton = ({ className }: LetsTalkButtonProps) => (
  <span className={className + " inline-flex rounded-md shadow"}>
    <Link
      href="/contact"
      className={classNames(
        "transition-colors inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md bg-white hover:bg-gray-50 dark:bg-gray-600 dark:hover:bg-gray-700",
        `text-accent-600 hover:text-accent-700 dark:text-accent-200 dark:hover:text-accent-400`
      )}
    >
      Let&apos;s talk
    </Link>
  </span>
);

export default LetsTalkButton;
