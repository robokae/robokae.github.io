import content from "content/hamburgerMenu.json";
import {
  Container,
  Content,
  MenuLink,
  MenuOption,
  MenuOptionsContainer,
} from "./HamburgerMenu.styles";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

function HamburgerMenu({ display, toggleCallback }) {
  const { links } = content;
  const { pathname } = useLocation();
  const [height, setHeight] = useState(null);
  const [disableTransition, setDisableTransition] = useState(false);
  const DISABLE_TRANSITION_DURATION = 300;
  const menuRef = useRef(null);

  useLayoutEffect(() => {
    if (menuRef.current) {
      display && setHeight(menuRef.current.offsetHeight);
    }
  }, [display]);

  useEffect(() => {
    // Disable the menu closing transition when navigating pages
    setDisableTransition(true);
    setTimeout(() => setDisableTransition(false), DISABLE_TRANSITION_DURATION);
  }, [pathname]);

  return (
    <Container display={display}>
      <Content
        ref={menuRef}
        height={height}
        disableTransition={disableTransition}
        display={display}
      >
        <MenuOptionsContainer>
          {links.map((link, index) => (
            <MenuOption key={index}>
              <MenuLink onClick={toggleCallback} to={link.to}>
                {link.label}
              </MenuLink>
            </MenuOption>
          ))}
        </MenuOptionsContainer>
      </Content>
    </Container>
  );
}

export default HamburgerMenu;
