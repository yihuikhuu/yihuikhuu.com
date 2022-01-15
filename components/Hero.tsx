type HeroProps = {
  className?: string;
};

const Hero: React.FC<HeroProps> = ({ children, className }) => (
  <div className={className + " mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6"}>
    {children}
  </div>
);

export default Hero;
