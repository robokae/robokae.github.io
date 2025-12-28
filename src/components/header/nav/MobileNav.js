import { Button, Flex, Icon } from "@robokae/robokae-ui";
import { Container, Options } from "./MobileNav.styles";
import Link from "components/link/Link";
import { useEffect, useRef, useState } from "react";
import Overlay from "components/overlay/Overlay";
import classNames from "classnames";
import ThemeToggle from "components/button/themeToggle/ThemeToggle";
import { useHeaderContext } from "context/HeaderContext";

function MobileNav({ data }) {
  const { isMenuOpen, toggleMenu, handleLinkClick, transition } =
    useHeaderContext();
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      setHeight(isMenuOpen ? ref.current.scrollHeight : 0);
    }
  }, [isMenuOpen]);

  return (
    <>
      <Button>
        <Icon onClick={toggleMenu} name={isMenuOpen ? "X" : "List"} size="md" />
      </Button>
      <Container
        ref={ref}
        height={height}
        className={classNames({
          open: isMenuOpen,
          "no-transition": !transition,
        })}
      >
        <Options>
          {data.map((link, index) => (
            <Link
              key={index}
              className="menu-link"
              underline={false}
              to={link.url}
              onClick={handleLinkClick}
            >
              {link.label}
            </Link>
          ))}
          <Flex justifyContent="space-between" alignItems="center">
            <p>Theme</p>
            <ThemeToggle />
          </Flex>
        </Options>
        <Overlay
          transition={transition}
          isVisible={isMenuOpen}
          onClick={toggleMenu}
        />
      </Container>
    </>
  );
}

export default MobileNav;
