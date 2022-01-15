import Link from "next/link";

type LetsTalkButtonProps = {
  className?: string;
};

const LetsTalkButton: React.FC<LetsTalkButtonProps> = ({ className }) => (
  <span className={className + " inline-flex rounded-md shadow"}>
    <Link href="/contact">
      <a className="transition-colors inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-violet-600 bg-white hover:text-violet-700 hover:bg-gray-50 dark:bg-gray-600 dark:text-violet-200 dark:hover:text-violet-400 dark:hover:bg-gray-700">
        Let&apos;s talk
      </a>
    </Link>
  </span>
);

export default LetsTalkButton;
