import { Container } from "./Tooltip.styles";

function Tooltip({ position = "bottom", ...props }) {
  return (
    <Container position={position}>
      <p>{props.children}</p>
    </Container>
  );
}

export default Tooltip;
