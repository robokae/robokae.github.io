import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

function Stack(props) {
  const defaultProps = {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: "0",
  };
  return (
    <Container style={{ ...defaultProps, ...props }}>
      {props.children}
    </Container>
  );
}

export default Stack;
