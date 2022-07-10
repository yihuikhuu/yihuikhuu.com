import { SimpleIcon } from "simple-icons";
import Icon from "components/Icon";
import { classNames } from "helpers/classnames";
import AccentColourContext from "contexts/accent-colour-context";

export type IconType = {
  name: string;
  icon?: SimpleIcon;
  href?: string;
};

type IconCardProps = {
  icon: IconType;
};

const IconCard = ({ icon }: IconCardProps) => (
  <AccentColourContext.Consumer>
    {({ colour }) => (
      <div className="flex flex-col items-center">
        <div
          className={classNames(
            "transition-all flex justify-center items-center rounded h-16 w-16 backdrop-blur bg-white/50 dark:bg-white border-2",
            `border-${colour}-300`,
            `hover:border-${colour}-500`
          )}
        >
          {icon.icon ? <Icon icon={icon.icon} size={24} /> : <span></span>}
        </div>
        <span className="transition-colors mt-3 text-sm text-gray-700 dark:text-white text-center">
          {icon.name}
        </span>
      </div>
    )}
  </AccentColourContext.Consumer>
);

export default IconCard;
