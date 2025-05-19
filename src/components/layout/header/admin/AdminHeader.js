import ToggleButton from "components/button/ToggleButton";
import { Container, Nav, NavContainer } from "./AdminHeader.styles";

function AdminHeader({ links }) {
  return (
    <Container>
      <NavContainer>
        <Nav>
          {/* <ToggleButton
            onClick={toggleTheme}
            icon={themeToggleConfig[theme].icon}
            backgroundColor={themeToggleConfig[theme].backgroundColor}
            sliderColor={themeToggleConfig[theme].sliderColor}
          /> */}
        </Nav>
      </NavContainer>
    </Container>
  );
}

export default AdminHeader;
