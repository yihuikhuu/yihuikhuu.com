import { SimpleIcon } from "simple-icons";
import Icon from "components/Icon";

export type IconType = {
  name: string;
  icon?: SimpleIcon;
  href?: string;
};

type IconCardProps = {
  icon: IconType;
};

const IconCard: React.FC<IconCardProps> = ({ icon }) => (
  <div className="flex flex-col items-center">
    <div className="transition-all flex justify-center items-center rounded shadow-lg hover:shadow-2xl h-16 w-16 backdrop-blur bg-white/50 dark:bg-white border-2 border-violet-300 hover:border-violet-500">
      {icon.icon ? <Icon icon={icon.icon} size={24} /> : <span></span>}
    </div>
    <span className="transition-colors mt-3 text-sm text-gray-700 dark:text-white text-center">
      {icon.name}
    </span>
  </div>
);

export default IconCard;
