type TitleSize = "large" | "base" | "small";

type TitleProps = {
  children: React.ReactNode;
  className?: string;
  size: TitleSize;
};

const classNames: Record<TitleSize, string> = {
  large:
    "text-4xl tracking-tight font-semibold text-gray-900 dark:text-white sm:text-5xl md:text-6xl",
  base: "text-xl tracking-tight font-semibold text-gray-900 dark:text-white sm:text-2xl md:text-3xl",
  small:
    "text-lg tracking-tight font-semibold text-gray-900 dark:text-white sm:text-xl md:text-2xl",
};

const Title = ({ children, className, size }: TitleProps) => (
  <h1 className={className + " transition " + classNames[size]}>{children}</h1>
);

export default Title;
