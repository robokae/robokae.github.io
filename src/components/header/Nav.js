import ThemeToggle from "components/button/themeToggle/ThemeToggle";
import Icon from "components/icon/Icon";
import { Container, LinkContainer } from "./Nav.styles";
import Button from "components/button/Button";
import ButtonLink from "components/link/buttonLink/ButtonLink";

function Nav({ data, isDesktop, showMenu, toggleMenu }) {
  return (
    <Container>
      {data.map((links, index) => (
        <LinkContainer key={index}>
          {links.map((link, index) => (
            <ButtonLink
              key={index}
              to={link.to}
              underline={false}
              onClick={() => showMenu && toggleMenu}
              tooltip={link.tooltip}
            >
              {link.type === "text"
                ? link.label
                : link.type === "icon" && <Icon name={link.icon} />}
            </ButtonLink>
          ))}
        </LinkContainer>
      ))}
      {isDesktop && <ThemeToggle variant="plain" />}
      {!isDesktop && (
        <Button>
          <Icon onClick={toggleMenu} name="List" size="lg" />
        </Button>
      )}
    </Container>
  );
}

export default Nav;
