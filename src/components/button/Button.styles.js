import { Style } from "constants/style";
import styled, { css } from "styled-components";

const baseButtonStyles = css`
  padding: 0.5rem 1rem;
  color: ${({ theme }) => theme.primaryFontColor};
  border-radius: ${Style.BORDER_RADIUS_SM};
  border: none;
  cursor: pointer;
`;

export const PrimaryButton = styled.button`
  ${baseButtonStyles}
  color: ${({ theme }) => theme.button.cta.fontColor};
  background-color: ${({ theme }) => theme.button.cta.backgroundColor};
`;

export const SecondaryButton = styled.button`
  ${baseButtonStyles}
  background-color: ${({ theme }) => theme.button.secondary.backgroundColor};
  color: ${({ theme }) => theme.button.secondary.fontColor};
`;

export const PlainButton = styled.button`
  ${baseButtonStyles}
  padding: 0;
  background-color: transparent;
`;

export const OutlinedButton = styled.button`
  ${baseButtonStyles}
  padding: 0.5rem 0.75rem;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.lineColor};
`;
