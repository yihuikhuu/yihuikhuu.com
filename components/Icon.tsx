import { SimpleIcon } from "simple-icons";

export type IconProps = {
  icon: SimpleIcon;
  size: number;
};

const Icon = ({ icon, size }: IconProps) => {
  return (
    <svg
      role="img"
      viewBox={`0 0 ${size} ${size}`}
      height={size}
      width={size}
      fill={`#${icon.hex}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{icon.title}</title>
      <path d={icon.path} />
    </svg>
  );
};

export default Icon;
