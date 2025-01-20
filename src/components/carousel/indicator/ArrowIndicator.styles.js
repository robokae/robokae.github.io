import styled, { css } from "styled-components";

export const ActionButton = styled.button`
  font-size: 1rem;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.tertiaryBackgroundColor};
  outline: none;
  border: transparent;
  border-radius: 50%;
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
  gap: 0.5rem;
`;
