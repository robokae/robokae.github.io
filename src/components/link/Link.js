import { Container } from "./Link.styles";

function Link({ ...props }) {
  return <Container {...props}>{props.children}</Container>;
}

export default Link;
