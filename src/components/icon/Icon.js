import * as icons from "react-bootstrap-icons";
import styled from "styled-components";

const Container = styled.div`
  width: max-content;
  display: flex;
  align-items: center;
`;

function Icon({ name, size = "sm", onClick, ...props }) {
  const convertSize = (size) => {
    switch (size) {
      case "xs":
        return "0.75rem";
      case "sm":
        return "1rem";
      case "md":
        return "1.25rem";
      case "lg":
        return "1.5rem";
      case "xl":
        return "1.75rem";
      default:
        return "1.25rem";
    }
  };

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
