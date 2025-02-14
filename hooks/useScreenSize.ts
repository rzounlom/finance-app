import { useEffect, useState } from "react";

type ScreenSize = {
  width: number;
  height: number;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
};

const useScreenSize = (): ScreenSize => {
  const isClient = typeof window !== "undefined";

  const getSize = () => ({
    width: isClient ? window.innerWidth : 1024, // Default width (fallback)
    height: isClient ? window.innerHeight : 768, // Default height (fallback)
    isMobile: isClient ? window.innerWidth < 768 : false, // Tailwind `md`
    isTablet: isClient
      ? window.innerWidth >= 768 && window.innerWidth < 1280
      : false, // Tailwind `lg`
    isDesktop: isClient ? window.innerWidth >= 1280 : true, // Tailwind `xl`
  });

  const [screenSize, setScreenSize] = useState<ScreenSize>(getSize);

  useEffect(() => {
    if (!isClient) return; // Prevent running on the server

    const handleResize = () => setScreenSize(getSize);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isClient]);

  return screenSize;
};

export default useScreenSize;
