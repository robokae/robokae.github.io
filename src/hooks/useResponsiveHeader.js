import { DeviceSize } from "constants/layout";
import { useResize } from "./useResize";
import { useEffect, useState } from "react";

export const useResponsiveHeader = (links) => {
  const { width } = useResize();
  const isDesktop = width > DeviceSize.TABLET;
  const [headerLinks, setHeaderLinks] = useState([]);

  useEffect(() => {
    const navLinks = links.reduce(
      (acc, link) => {
        acc[link.position === "left" ? 0 : 1].push(link);
        return acc;
      },
      [[], []]
    );
    setHeaderLinks(isDesktop ? navLinks : [navLinks[0]]);
  }, [isDesktop, links]);

  return { isDesktop, headerLinks };
};
