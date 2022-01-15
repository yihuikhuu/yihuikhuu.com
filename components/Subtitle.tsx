type SubtitleProps = {
  className?: string;
};

const Subtitle: React.FC<SubtitleProps> = ({ children, className }) => (
  <h2
    className={
      className +
      " transition-colors font-light text-base text-gray-500 dark:text-gray-400 sm:text-lg md:text-xl md:max-w-3xl"
    }
  >
    {children}
  </h2>
);

export default Subtitle;
