import { FC } from "react";
import Image from "next/image";

type MenuItemProps = {
  icon: string;
  label: string;
  minimized: boolean;
  isActive?: boolean;
  onClick: (label: string) => void;
};

const MenuItem: FC<MenuItemProps> = ({
  icon,
  label,
  minimized,
  isActive,
  onClick,
}) => {
  return (
    <div
      onClick={() => onClick(label)}
      className={`flex w-[90%] items-center px-4 py-3 rounded-lg transition-all duration-250 ${
        isActive ? "bg-gray-100 text-gray-800" : "text-gray-400"
      } hover:bg-gray-100 hover:text-gray-800 cursor-pointer`}
    >
      <Image src={`${icon}`} alt={label} width={24} height={24} />
      {!minimized && <span className="ml-4">{label}</span>}
    </div>
  );
};

export default MenuItem;
