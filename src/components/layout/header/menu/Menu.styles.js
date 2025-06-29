import { Link } from "components/Link";
import { Breakpoint, Layout } from "constants/layout";
import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: max-content;
  position: fixed;
  top: 0;
  left: 0;
  display: none;

  ${(props) =>
    props.display &&
    css`
      display: block;
    `}
`;

export const Content = styled.section`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.headerColor};
  z-index: 10;
`;

export const MenuHeader = styled.nav`
  height: ${Layout.HEADER_HEIGHT};
  width: 100%;
  padding: 0 ${Layout.SECTION_PADDING};
  border-bottom: 1px solid ${({ theme }) => theme.lineColor};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media ${Breakpoint.MOBILE_LG} {
    padding: 0 ${Layout.SECION_PADDING_SM};
  }
`;

export const MenuOptionsContainer = styled.ul`
  width: 100%;
  height: 100%;
  padding: 0 ${Layout.SECTION_PADDING};
  display: flex;
  flex-direction: column;
  list-style: none;

  @media ${Breakpoint.MOBILE_LG} {
    padding: 0 ${Layout.SECION_PADDING_SM};
  }

  & > * {
    padding-top: 1.25rem;
  }

  & > :last-child {
    padding-bottom: 1.25rem;
  }

  & > :not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.lineColor};
  }
`;

export const MenuOption = styled.li`
  width: 100%;
  height: 100%;

  & > a {
    display: block;
    text-align: left;
    font-size: 1.2rem;
    padding-bottom: 1.25rem;

    &:hover {
      color: ${({ theme }) => theme.accentColor};
    }
  }
`;

export const MenuLink = styled(Link)`
  -webkit-tap-highlight-color: transparent;
`;
