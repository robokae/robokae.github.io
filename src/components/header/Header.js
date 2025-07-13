import { useCallback, useEffect, useState } from "react";
import { Container } from "./Header.styles";
import { useResponsiveHeader } from "hooks/useResponsiveHeader";
import Menu from "components/menu/Menu";
import Nav from "./Nav";

function Header({ data, transitionBgOnScroll }) {
  const [transition, setTransition] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const { headerLinks, isDesktop } = useResponsiveHeader(data);
  const toggleMenu = () => setShowMenu((prev) => !prev);

  const handleScroll = useCallback(() => {
    transitionBgOnScroll && setTransition(window.scrollY >= 20);
  }, [transitionBgOnScroll]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [transitionBgOnScroll, handleScroll]);

  return (
    <Container transparent={transitionBgOnScroll} transition={transition}>
      <Nav
        data={headerLinks}
        isDesktop={isDesktop}
        showMenu={showMenu}
        toggleMenu={toggleMenu}
      />
      <Menu display={showMenu} data={data} toggleCallback={toggleMenu} />
    </Container>
  );
}

export default Header;
