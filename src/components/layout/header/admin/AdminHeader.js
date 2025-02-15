import ToggleButton from "components/themeSwitcher/ToggleButton";
import { Container, Nav, NavContainer } from "./AdminHeader.styles";
import { themeToggleConfig } from "components/themeSwitcher/themeToggleConfig";

function AdminHeader({ links, theme, toggleTheme }) {
  return (
    <Container>
      <NavContainer>
        <Nav>
          <ToggleButton
            onClick={toggleTheme}
            icon={themeToggleConfig[theme].icon}
            backgroundColor={themeToggleConfig[theme].backgroundColor}
            sliderColor={themeToggleConfig[theme].sliderColor}
          />
        </Nav>
      </NavContainer>
    </Container>
  );
}

export default AdminHeader;
