"use client";

import React, { useState } from "react";

import MobileMenuItem from "./MobileMenuItem";
import { menuItems } from "./menuItems";

const MobileSidebar: React.FC = () => {
  const [activeItem, setActiveItem] = useState("Overview");

  const handleMenuItemClick = (label: string) => {
    setActiveItem(label);
  };

  return (
    <nav className="fixed bottom-0 w-full bg-gray-900 text-gray-200 flex justify-between px-4 sm:px-14 py-2 lg:hidden rounded-t-xl">
      {menuItems.map((item) => (
        <MobileMenuItem
          key={item.label}
          icon={item.icon}
          label={item.label}
          isActive={activeItem === item.label}
          onClick={handleMenuItemClick}
        />
      ))}
    </nav>
  );
};

export default MobileSidebar;
