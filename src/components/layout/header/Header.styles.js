import styled, { css } from "styled-components";
import { Breakpoint, Layout } from "constants/layout";
import Icon from "components/icon/Icon";

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
  border-color: transparent;
  box-sizing: border-box;
  ${(props) =>
    props.transitionBackground &&
    css`
      transition: all 0.35s ease;
      background-color: ${({ theme }) => theme.headerColor};
      border-bottom: 1px solid ${({ theme }) => theme.lineColor};
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
  justify-content: space-between;
  align-items: center;
`;

export const StyledIcon = styled(Icon)`
  cursor: pointer;
`;

export const LinkContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;
`;
