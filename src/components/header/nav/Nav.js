import { useIsMobile } from "hooks/useIsMobile";
import React from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

function Nav({ data }) {
  const { isMobile } = useIsMobile();

  return isMobile ? <MobileNav data={data} /> : <DesktopNav data={data} />;
}

export default Nav;
