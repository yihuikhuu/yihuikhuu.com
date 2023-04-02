import Image from "next/image";
import { SimpleIcon } from "simple-icons";
import Icon from "components/Icon";
import { classNames } from "helpers/classnames";
import { m } from "framer-motion";

export type IconType = {
  className: string;
  name: string;
  icon?: SimpleIcon;
  imageLink?: string;
  href?: string;
};

type IconCardProps = {
  icon: IconType;
};

const IconCard = ({
  icon: { className, icon, imageLink, name },
}: IconCardProps) => (
  <div className="flex flex-col items-center">
    <m.div
      className="rounded h-24 w-24 flex justify-center items-center overflow-hidden bg-white/50 dark:bg-white"
      whileHover={{ scale: 1.1 }}
    >
      <div
        className={classNames(
          "transition-all h-full w-full flex justify-center items-center backdrop-blur",
          className
        )}
      >
        {icon ? <Icon icon={icon} size={32} /> : <span></span>}
        {imageLink ? (
          <Image priority src={imageLink} alt={name} width={32} height={32} />
        ) : (
          <span></span>
        )}
      </div>
    </m.div>
    <span className="transition-colors mt-3 text-sm text-gray-700 dark:text-white text-center">
      {name}
    </span>
  </div>
);

export default IconCard;
