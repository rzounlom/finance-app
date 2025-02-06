"use client";

import { FC, useState } from "react";

import DeskTopMenuItem from "./DesktopMenuItem";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { menuItems } from "./menuItems";

const DesktopSidebar: FC = () => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [activeItem, setActiveItem] = useState("Overview");

  const toggleSidebar = () => setIsMinimized(!isMinimized);

  const handleMenuItemClick = (label: string) => {
    setActiveItem(label);
  };

  return (
    <aside
      className={`hidden bg-gray-900 text-gray-200 lg:flex flex-col h-screen rounded-r-xl ${
        isMinimized ? "w-16" : "w-64"
      } transition-width duration-300`}
    >
      <div className="flex items-center justify-center py-6">
        {!isMinimized && <h1 className="text-2xl font-bold">finance</h1>}
      </div>
      <nav className="flex flex-col flex-1 space-y-4">
        {menuItems.map((item) => (
          <DeskTopMenuItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            minimized={isMinimized}
            isActive={activeItem === item.label}
            onClick={handleMenuItemClick}
          />
        ))}
      </nav>

      <div className={`w-full flex flex-col items-start pl-4 justify-center`}>
        <UserButton />
        <button
          onClick={toggleSidebar}
          className="flex items-center justify-center py-4 text-gray-400 hover:text-gray-200 transition-colors"
        >
          <Image
            src="/minimize.svg"
            height={20}
            width={20}
            alt="minimize"
            className={`transform transition-transform ${
              isMinimized ? "-rotate-180 " : ""
            }`}
          />
          {!isMinimized && <span className="ml-2">Minimize Menu</span>}
        </button>
      </div>
    </aside>
  );
};

export default DesktopSidebar;
