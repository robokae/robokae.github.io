import { Link } from "components/Link";
import { Breakpoint, Layout } from "constants/layout";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: max-content;
  position: fixed;
  box-sizing: border-box;
  z-index: 10;
`;

export const Content = styled.section`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.headerColor};

  @media ${Breakpoint.MOBILE_LG} {
    padding: 0 ${Layout.SECION_PADDING_SM};
  }
`;

export const MenuOptionsContainer = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 2rem 0;
`;

export const MenuOption = styled.li`
  width: 100%;
  height: 100%;

  & > a {
    display: block;
    text-align: center;
    font-size: 1.25rem;
    padding: 1.25rem ${Layout.SECTION_PADDING};

    &:hover {
      color: ${({ theme }) => theme.accentColor};
    }
  }
`;

export const MenuLink = styled(Link)`
  -webkit-tap-highlight-color: transparent;
`;
