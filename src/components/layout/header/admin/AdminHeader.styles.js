import { Breakpoint, Layout } from "constants/layout";
import styled from "styled-components";
export const Container = styled.header`
  width: 100%;
  height: max-content;
  position: relative;
  z-index: 10;
`;

export const NavContainer = styled.div`
  width: 100%;
  height: ${Layout.HEADER_HEIGHT};
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 ${Layout.SECTION_PADDING};
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: transparent;
  border: 1px solid transparent;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.headerColor};
  border-color: ${({ theme }) => theme.lineColor};

  @media ${Breakpoint.MOBILE_LG} {
    padding: 0 ${Layout.SECION_PADDING_SM};
  }
`;

export const Nav = styled.nav`
  width: ${Layout.CONTENT_MAX_WIDTH};
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;
  gap: 1.5rem;

  & > :first-child {
    margin-right: auto;
  }
`;
