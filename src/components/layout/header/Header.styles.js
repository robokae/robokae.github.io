import styled, { css } from "styled-components";
import { Breakpoint, Layout } from "constants/layout";
import Icon from "components/icon/Icon";
import { Style } from "constants";

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
  transition: all 0.35s ease;
  ${(props) =>
    props.transitionBackground &&
    css`
      transition-property: all;
      background-color: ${({ theme }) => theme.headerColor};
      border-color: ${({ theme }) => theme.lineColor};
    `}
  ${(props) =>
    props.disableTransition &&
    css`
      transition: none;
    `}

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

export const StyledIcon = styled(Icon)`
  cursor: pointer;
`;

export const SmallStyledIcon = styled(StyledIcon)`
  font-size: 1.1rem;
`;

export const LinkContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;
`;

export const HamburgerMenuContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: ${Layout.HEADER_HEIGHT};
  left: 0;
  z-index: 1;
  display: none;
  ${(props) =>
    props.display &&
    css`
      display: block;
    `}
`;

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: ${({ theme }) => theme.overlayColor};
  transition: all ${Style.TRANSITION_DURATION} ease-out;
  z-index: 2;
`;
