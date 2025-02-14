import { FC } from "react";
import { type MenuItemProps } from "./menuItems";

const DeskTopMenuItem: FC<MenuItemProps> = ({
  menuItem: { icon: Icon, label, url },
  minimized,
  isActive,
  onClick,
}) => {
  return (
    <div
      onClick={() => onClick(url)}
      className={`flex w-[90%] items-center px-4 py-3 rounded-lg transition-all duration-250 ${
        isActive
          ? "bg-gray-100 text-gray-800 border-l-[4px] border-money-green"
          : "text-gray-400"
      } hover:bg-gray-100   cursor-pointer`}
    >
      <Icon
        size={24}
        weight="fill"
        className={`${isActive ? "text-money-green" : "text-gray-300"}`}
      />
      {!minimized && <span className="ml-4">{label}</span>}
    </div>
  );
};

export default DeskTopMenuItem;
