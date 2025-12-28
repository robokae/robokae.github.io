import * as icons from "react-bootstrap-icons";
import styled from "styled-components";

const Container = styled.div`
  width: max-content;
  display: flex;
  align-items: center;
`;

function Icon({ name, size, onClick, ...props }) {
  const convertSize = (size) =>
    ({
      xs: "0.75rem",
      sm: "1rem",
      md: "1.25rem",
      lg: "1.5rem",
      xl: "1.75rem",
    }[size] || "1.25rem");

  const BootstrapIcon = icons[name];
  if (!BootstrapIcon) {
    throw new Error(`No Bootstrap icon found for '${name}'`);
  }
  return (
    <Container style={props} onClick={onClick}>
      <BootstrapIcon size={convertSize(size)} />
    </Container>
  );
}

export default Icon;
