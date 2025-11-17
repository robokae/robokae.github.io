import ThemeToggle from "components/button/themeToggle/ThemeToggle";
import { Container, LinkContainer } from "./Nav.styles";
import { Button, Icon, Tooltip } from "@robokae/robokae-ui";
import LinkButton from "components/link/linkButton/LinkButton";
import { useThemeContext } from "context/ThemeContext";

function Nav({ data, isDesktop, showMenu, toggleMenu }) {
  const { theme } = useThemeContext();

  return (
    <Container>
      {data.map((links, index) => (
        <LinkContainer key={index}>
          {links.map((link, index) => (
            <LinkButton
              key={index}
              to={link.to}
              onClick={() => showMenu && toggleMenu}
              tooltipData={link.tooltip}
            >
              {link.type === "text"
                ? link.label
                : link.type === "icon" && <Icon name={link.icon} />}
            </LinkButton>
          ))}
        </LinkContainer>
      ))}
      {isDesktop ? (
        <Tooltip
          position="bottom"
          content={`${theme === "light" ? "Dark" : "Light"} theme`}
        >
          <ThemeToggle variant="plain" />
        </Tooltip>
      ) : (
        <Button>
          <Icon onClick={toggleMenu} name="List" size="lg" />
        </Button>
      )}
    </Container>
  );
}

export default Nav;
