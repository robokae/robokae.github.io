import { useCallback, useEffect, useState } from "react";
import {
  Container,
  HamburgerMenuContainer,
  LinkContainer,
  Nav,
  NavContainer,
  StyledIcon,
} from "./DynamicHeader.styles";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useResize } from "hooks/useResize";
import { DeviceSize } from "constants/layout";
import { Link } from "components/Link";
import { useLocation } from "react-router-dom";
import ToggleButton from "components/button/ToggleButton";
import HamburgerMenu from "components/menu/hamburgerMenu/HamburgerMenu";
import { themeToggleConfig } from "config/themeToggleConfig";
import Overlay from "components/overlay/Overlay";
import Icon from "components/icon/Icon";

function DynamicHeader({ links, dynamicHeader, theme, toggleTheme }) {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);
  const [isBackgroundTransparent, setIsBackgroundTransparent] = useState(true);
  const [disableTransition, setDisableTransition] = useState(false);

  const { width } = useResize();
  const { pathname } = useLocation();

  const SCROLL_THRESHOLD = 20;
  const SCROLL = "scroll";
  const DISABLE_TRANSITION_DURATION = 1000;

  const isMobileHeader = width < DeviceSize.TABLET;
  const leftLinks = links.filter((link) => link.position === "left");
  const rightLinks = links.filter((link) => link.position === "right");
  const headerLinks = isMobileHeader ? [leftLinks] : [leftLinks, rightLinks];

  const toggleMenu = () => setShowHamburgerMenu((prev) => !prev);

  const handleScroll = useCallback(() => {
    dynamicHeader
      ? setIsBackgroundTransparent(window.scrollY <= SCROLL_THRESHOLD)
      : setIsBackgroundTransparent(false);
  }, [dynamicHeader]);

  useEffect(() => {
    // Temporarily disable the transition
    setDisableTransition(true);
    setTimeout(() => setDisableTransition(false), DISABLE_TRANSITION_DURATION);
  }, [pathname, theme, showHamburgerMenu]);

  useEffect(() => {
    /**
     * Disable the transparent header when the hamburger menu is displayed and
     * temporarily remove the scroll event listener so that the header does not
     * flicker during scroll
     */
    if (showHamburgerMenu) {
      setIsBackgroundTransparent(false);
      window.removeEventListener(SCROLL, handleScroll);
      return;
    }

    // When the hamburger menu is not displayed, enable the scroll event handler
    window.addEventListener(SCROLL, handleScroll);

    setIsBackgroundTransparent(dynamicHeader);

    return () => window.removeEventListener(SCROLL, handleScroll);
  }, [showHamburgerMenu, dynamicHeader, handleScroll]);

  useEffect(() => {
    /**
     * When the hamburger menu is closed and the scroll position is beyond that
     * of the threshold (e.g., the page is scrolled to the center), the header
     * will be transparent, so need to call the scroll handler to make the
     * header non-transparent
     */
    window.scrollY > SCROLL_THRESHOLD && handleScroll();
  }, [showHamburgerMenu, handleScroll]);

  return (
    <Container>
      <NavContainer
        transitionBackground={!isBackgroundTransparent}
        disableTransition={disableTransition}
      >
        <Nav>
          {headerLinks.map((links, index) => (
            <LinkContainer key={index}>
              {links.map((link, index) => (
                <Link
                  key={index}
                  to={link.to}
                  onClick={showHamburgerMenu && toggleMenu}
                >
                  {link.type === "text"
                    ? link.label
                    : link.type === "icon" && (
                        <Icon icon={[link.icon.style, link.icon.name]} />
                      )}
                </Link>
              ))}
            </LinkContainer>
          ))}
          <ToggleButton
            onClick={toggleTheme}
            icon={themeToggleConfig[theme].icon}
            backgroundColor={themeToggleConfig[theme].backgroundColor}
            sliderColor={themeToggleConfig[theme].sliderColor}
          />
          {isMobileHeader && (
            <StyledIcon
              onClick={toggleMenu}
              icon={showHamburgerMenu ? faTimes : faBars}
              fixedWidth
            />
          )}
        </Nav>
      </NavContainer>
      <HamburgerMenuContainer display={showHamburgerMenu}>
        <Overlay onClick={toggleMenu} disableTransition={disableTransition} />
        <HamburgerMenu toggleCallback={toggleMenu} />
      </HamburgerMenuContainer>
    </Container>
  );
}

export default DynamicHeader;
