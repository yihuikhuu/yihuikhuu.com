import { SimpleIcon } from "simple-icons";
import Icon from "components/Icon";
import { classNames } from "helpers/classnames";
import ColourThemeContext from "contexts/colour-theme-context";

export type IconType = {
  name: string;
  icon?: SimpleIcon;
  href?: string;
};

type IconCardProps = {
  icon: IconType;
};

const IconCard: React.FC<IconCardProps> = ({ icon }) => (
  <ColourThemeContext.Consumer>
    {({ theme }) => (
      <div className="flex flex-col items-center">
        <div
          className={classNames(
            "transition-all flex justify-center items-center rounded shadow-lg hover:shadow-2xl h-16 w-16 backdrop-blur bg-white/50 dark:bg-white border-2",
            `bg-${theme}-300`,
            `hover:bg-${theme}-500`
          )}
        >
          {icon.icon ? <Icon icon={icon.icon} size={24} /> : <span></span>}
        </div>
        <span className="transition-colors mt-3 text-sm text-gray-700 dark:text-white text-center">
          {icon.name}
        </span>
      </div>
    )}
  </ColourThemeContext.Consumer>
);

export default IconCard;
