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
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-bottom: 1px solid transparent;

  @media ${Breakpoint.MOBILE_LG} {
    padding: 0 ${Layout.SECTION_PADDING_SM};
  }

  ${(props) =>
    props.transparent &&
    css`
      background-color: transparent;
      border-color: transparent;
      box-shadow: none;
    `}

  ${(props) =>
    props.transition &&
    css`
      background-color: ${({ theme }) => theme.headerColor};
      box-shadow: ${({ theme }) => theme.boxShadow};
    `}
`;
