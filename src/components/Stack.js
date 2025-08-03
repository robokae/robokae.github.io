import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justifyContent || "center"};
  align-items: ${(props) => props.alignItems || "center"};
  gap: ${(props) => props.gap || 0};
`;

function Stack({ direction, justifyContent, alignItems, gap, ...props }) {
  return (
    <Container
      direction={direction}
      justifyContent={justifyContent}
      alignItems={alignItems}
      gap={gap}
      {...props}
    >
      {props.children}
    </Container>
  );
}

export default Stack;
