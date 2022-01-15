import Link from "next/link";

type LetsTalkButtonProps = {
  className?: string;
};

const LetsTalkButton: React.FC<LetsTalkButtonProps> = ({ className }) => (
  <span className={className + " inline-flex rounded-md shadow"}>
    <Link href="/contact">
      <a className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-violet-600 bg-white hover:text-violet-500">
        Lets talk
      </a>
    </Link>
  </span>
);

export default LetsTalkButton;
