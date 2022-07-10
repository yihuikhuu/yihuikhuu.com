type SubtitleProps = {
  children: React.ReactNode;
  className?: string;
};

const Subtitle = ({ children, className }: SubtitleProps) => (
  <h2
    className={
      className +
      " transition-colors text-base text-gray-700 dark:text-gray-300 sm:text-lg md:text-xl md:max-w-3xl"
    }
  >
    {children}
  </h2>
);

export default Subtitle;
