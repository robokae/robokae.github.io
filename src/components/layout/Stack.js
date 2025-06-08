import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: ${(props) =>
    props.direction === "column" ? "column" : "row"};
  justify-content: ${(props) => props.justifyContent || "center"};
  align-items: ${(props) => props.alignItems || "center"};
  gap: ${(props) => props.gap || "0"};
`;

function Stack(props) {
  return <Container {...props}>{props.children}</Container>;
}

export default Stack;
