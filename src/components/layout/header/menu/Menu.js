import {
  Container,
  Content,
  MenuHeader,
  MenuLink,
  MenuOption,
  MenuOptionsContainer,
} from "./Menu.styles";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "components/Link";
import Overlay from "components/overlay/Overlay";
import { StyledIcon } from "components/layout/header/Nav.styles";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function Menu({ data, display, toggleCallback }) {
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
      <Overlay onClick={toggleCallback} />
      <Content
        ref={menuRef}
        height={height}
        disableTransition={disableTransition}
      >
        <MenuHeader>
          {data
            .filter((link) => link.position === "left")
            ?.map((link, index) => (
              <Link key={index} to={link.to} onClick={toggleCallback}>
                {link.label}
              </Link>
            ))}
          <StyledIcon onClick={toggleCallback} icon={faTimes} fixedWidth />
        </MenuHeader>
        <MenuOptionsContainer>
          <div>
            {data
              .filter((link) => link.position === "right")
              .map((link, index) => (
                <MenuOption key={index}>
                  <MenuLink onClick={toggleCallback} to={link.to}>
                    {link.label}
                  </MenuLink>
                </MenuOption>
              ))}
          </div>
        </MenuOptionsContainer>
      </Content>
    </Container>
  );
}

export default Menu;
