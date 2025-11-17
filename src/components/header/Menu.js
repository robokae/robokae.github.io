import {
  Container,
  Content,
  MenuHeader,
  MenuLink,
  MenuOption,
  MenuOptionsContainer,
} from "./Menu.styles";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Overlay from "components/overlay/Overlay";
import Stack from "components/Stack";
import ThemeToggle from "components/button/themeToggle/ThemeToggle";
import { useLocation } from "react-router-dom";
import Link from "components/link/Link";
import { Button, Icon } from "@robokae/robokae-ui";

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
          <Button>
            <Icon onClick={toggleCallback} name="X" size="lg" />
          </Button>
        </MenuHeader>
        <MenuOptionsContainer>
          <div>
            {data
              .filter((link) => link.position === "right")
              .map((link, index) => (
                <MenuOption key={index}>
                  <MenuLink
                    underline={false}
                    onClick={toggleCallback}
                    to={link.to}
                  >
                    {link.label}
                  </MenuLink>
                </MenuOption>
              ))}
          </div>
          <Stack justifyContent="space-between">
            <p style={{ fontSize: "1.2rem" }}>Theme</p>
            <ThemeToggle label />
          </Stack>
        </MenuOptionsContainer>
      </Content>
    </Container>
  );
}

export default Menu;
