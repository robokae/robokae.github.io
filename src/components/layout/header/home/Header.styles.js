import styled, { css } from "styled-components";
import { Breakpoint, Layout } from "constants/layout";

export const Container = styled.header`
  width: 100%;
  height: ${Layout.HEADER_HEIGHT};
  padding: 0 ${Layout.SECTION_PADDING};
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: ${({ theme }) => theme.headerColor};
  border: 1px solid ${({ theme }) => theme.lineColor};

  @media ${Breakpoint.MOBILE_LG} {
    padding: 0 ${Layout.SECION_PADDING_SM};
  }

  ${(props) =>
    props.transparent &&
    css`
      background-color: transparent;
      border-color: transparent;
    `}

  ${(props) =>
    props.transition &&
    css`
      background-color: ${({ theme }) => theme.headerColor};
      border-color: ${({ theme }) => theme.lineColor};
      transition: background-color 0.35s ease;
    `}
`;
