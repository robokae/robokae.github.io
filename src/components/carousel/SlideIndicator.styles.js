import styled, { css } from "styled-components";

export const ActionButton = styled.button`
  height: 2.2rem;
  width: 2.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.tertiaryBackgroundColor};
  outline: none;
  border: transparent;
  border-radius: 9999px;
  opacity: 0.3;
  transition: opacity 0.2s ease-in-out;
  color: ${({ theme }) => theme.secondaryFontColor};
  ${(props) =>
    props.active &&
    css`
      cursor: pointer;
      opacity: 1;
    `};
`;

export const NumbersContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  min-width: 3rem;
`;

export const DotsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledDot = styled.div`
  color: ${({ theme }) => theme.secondaryFontColor};
  opacity: ${(props) => (props.isActive ? "1" : "0.3")};
`;
