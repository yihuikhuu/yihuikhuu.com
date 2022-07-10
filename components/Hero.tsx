type HeroProps = {
  children: React.ReactNode;
  className?: string;
};

const Hero = ({ children, className }: HeroProps) => (
  <div className={className + " mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6"}>
    {children}
  </div>
);

export default Hero;
