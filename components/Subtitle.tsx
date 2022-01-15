type SubtitleProps = {
  className?: string;
};

const Subtitle: React.FC<SubtitleProps> = ({ children, className }) => (
  <h2
    className={
      className +
      " font-light text-base text-gray-500 sm:text-lg md:text-xl md:max-w-3xl"
    }
  >
    {children}
  </h2>
);

export default Subtitle;
