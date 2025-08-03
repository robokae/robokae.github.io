import { Container } from "./Link.styles";

function Link({ underline = true, to, ...props }) {
  return (
    <Container to={to} underline={underline} {...props}>
      {props.children}
    </Container>
  );
}

export default Link;
