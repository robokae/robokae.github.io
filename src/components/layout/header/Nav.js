import { faBars } from "@fortawesome/free-solid-svg-icons";
import ThemeToggleButton from "components/button/ThemeToggleButton";
import Icon from "components/icon/Icon";
import { Link } from "components/Link";
import { Container, LinkContainer, StyledIcon } from "./Nav.styles";

function Nav({ data, isDesktop, showMenu, toggleMenu }) {
  return (
    <Container>
      {data.map((links, index) => (
        <LinkContainer key={index}>
          {links.map((link, index) => (
            <Link key={index} to={link.to} onClick={showMenu && toggleMenu}>
              {link.type === "text"
                ? link.label
                : link.type === "icon" && (
                    <Icon icon={[link.icon.style, link.icon.name]} />
                  )}
            </Link>
          ))}
        </LinkContainer>
      ))}
      <ThemeToggleButton />
      {!isDesktop && (
        <StyledIcon onClick={toggleMenu} icon={faBars} fixedWidth />
      )}
    </Container>
  );
}

export default Nav;
