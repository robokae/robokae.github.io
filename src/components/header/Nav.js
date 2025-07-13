import ThemeToggleButton from "components/button/ThemeToggle";
import Icon from "components/icon/Icon";
import { Link } from "components/Link";
import { Container, LinkContainer } from "./Nav.styles";
import Button from "components/button/Button";

function Nav({ data, isDesktop, showMenu, toggleMenu }) {
  return (
    <Container>
      {data.map((links, index) => (
        <LinkContainer key={index}>
          {links.map((link, index) => (
            <Link key={index} to={link.to} onClick={showMenu && toggleMenu}>
              {link.type === "text"
                ? link.label
                : link.type === "icon" && <Icon name={link.icon} />}
            </Link>
          ))}
        </LinkContainer>
      ))}
      {isDesktop && <ThemeToggleButton />}
      {!isDesktop && (
        <Button>
          <Icon onClick={toggleMenu} name="List" size="lg" />
        </Button>
      )}
    </Container>
  );
}

export default Nav;
