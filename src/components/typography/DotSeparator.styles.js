import styled from "styled-components";

export const Dot = styled.span`
  width: 0.25rem;
  height: 0.25rem;
  background-color: ${({ theme }) => theme.secondaryFontColor};
  border-radius: 50%;
`;
