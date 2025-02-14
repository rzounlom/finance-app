import { FC } from "react";
import { type MenuItemProps } from "./menuItems";

const MobileMenuItem: FC<MenuItemProps> = ({
  menuItem: { icon: Icon, label, url },
  isActive,
  onClick,
}) => {
  return (
    <div
      onClick={() => onClick(url)}
      className={`flex flex-col w-[100%] items-center justify-center px-2 py-3 rounded-lg transition-all duration-250 ${
        isActive
          ? "bg-gray-100 text-gray-800 border-b-[4px] border-money-green"
          : "text-gray-400"
      } `}
    >
      <Icon
        weight="fill"
        size={24}
        className={`${isActive ? "text-money-green" : "text-gray-300"}`}
      />{" "}
      <p className="hidden mt-2 md:block">{label}</p>
    </div>
  );
};

export default MobileMenuItem;
