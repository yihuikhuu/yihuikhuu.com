type TitleSize = "large" | "base" | "small";

type TitleProps = {
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

const Title: React.FC<TitleProps> = ({ children, className, size }) => (
  <h1 className={className + " transition-colors " + classNames[size]}>
    {children}
  </h1>
);

export default Title;
