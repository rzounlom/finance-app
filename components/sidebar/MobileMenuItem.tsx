import { FC } from "react";
import Image from "next/image";
import { type MenuItemProps } from "./menuItems";

const MobileMenuItem: FC<MenuItemProps> = ({
  menuItem: { icon, label, url },
  isActive,
  onClick,
}) => {
  return (
    <div
      onClick={() => onClick(url)}
      className={`flex flex-col w-[100%] items-center justify-center px-2 py-3 rounded-lg transition-all duration-250 ${
        isActive ? "bg-gray-100 text-gray-800" : "text-gray-400"
      } `}
    >
      <Image src={`${icon}`} alt={label} width={24} height={24} />
      <p className="hidden mt-2 md:block">{label}</p>
    </div>
  );
};

export default MobileMenuItem;
