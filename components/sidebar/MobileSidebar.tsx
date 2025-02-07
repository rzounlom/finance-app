"use client";

import { FC, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import MobileMenuItem from "./MobileMenuItem";
import { menuItems } from "./menuItems";

const MobileSidebar: FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState(pathname);

  const handleMenuItemClick = (url: string) => {
    router.push(url);
  };

  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  return (
    <nav className="fixed bottom-0 w-full bg-gray-900 text-gray-200 flex justify-between px-4 sm:px-14 py-2 xl:hidden rounded-t-xl">
      {menuItems.map((item) => (
        <MobileMenuItem
          menuItem={item}
          key={item.label}
          isActive={currentPath === item.url}
          onClick={handleMenuItemClick}
        />
      ))}
    </nav>
  );
};

export default MobileSidebar;
