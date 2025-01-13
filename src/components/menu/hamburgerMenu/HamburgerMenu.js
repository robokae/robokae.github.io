import content from "content/hamburgerMenu.json";
import {
  Container,
  Content,
  MenuLink,
  MenuOption,
  MenuOptionsContainer,
  Overlay,
} from "./HamburgerMenu.styles";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useLocation } from "react-router-dom";

function HamburgerMenu({ display, clickHandler }) {
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
    <TransitionGroup component={null}>
      <Container>
        <CSSTransition
          in={display}
          classNames="overlay"
          timeout={{ enter: 100, exit: 250 }}
        >
          <Overlay
            onClick={clickHandler}
            disableTransition={disableTransition}
          />
        </CSSTransition>
        <CSSTransition in={display} classNames="content" timeout={100}>
          <Content
            ref={menuRef}
            height={height}
            disableTransition={disableTransition}
          >
            <MenuOptionsContainer>
              {links.map((link, index) => (
                <CSSTransition
                  key={index}
                  in={display}
                  classNames="link"
                  timeout={350}
                >
                  <MenuOption>
                    {
                      <MenuLink onClick={clickHandler} to={link.to}>
                        {link.label}
                      </MenuLink>
                    }
                  </MenuOption>
                </CSSTransition>
              ))}
            </MenuOptionsContainer>
          </Content>
        </CSSTransition>
      </Container>
    </TransitionGroup>
  );
}

export default HamburgerMenu;
