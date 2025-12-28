import { Container, Content } from "./Header.styles";
import Link from "components/link/Link";
import Nav from "./nav/Nav";
import useScroll from "hooks/useScroll";
import { useEffect } from "react";
import classNames from "classnames";
import { HeaderProvider, useHeaderContext } from "context/HeaderContext";

function Header({ children }) {
  return <HeaderProvider>{children}</HeaderProvider>;
}

Header.Content = function HeaderContent({ children }) {
  const { isTransparent, transition } = useHeaderContext();

  return (
    <Container
      className={classNames({
        "transition-transparency": isTransparent,
        "no-transition": !transition,
      })}
    >
      <Content>{children}</Content>
    </Container>
  );
};

Header.Brand = function HeaderBrand({ logo, url }) {
  const { handleLinkClick } = useHeaderContext();

  return (
    <Link to={url} underline={false} onClick={handleLinkClick}>
      {logo}
    </Link>
  );
};

Header.Nav = function HeaderNav({ links }) {
  return <Nav data={links} />;
};

Header.TransparentBackground = function TransparentHeader({
  transitionAtHeight = 20,
}) {
  const { scrollPosition } = useScroll();
  const { setIsTransparent } = useHeaderContext();

  useEffect(() => {
    setIsTransparent(scrollPosition.y <= transitionAtHeight);

    return () => setIsTransparent(false);
  }, [scrollPosition.y, transitionAtHeight, setIsTransparent]);
};

export default Header;
