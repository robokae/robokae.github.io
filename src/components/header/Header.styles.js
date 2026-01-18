import { Breakpoint, Layout } from "global/constants";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: ${Layout.HEADER_HEIGHT};
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: ${({ theme }) => theme.headerColor};
  box-shadow: 0.2rem 0.25rem 3rem rgba(8, 10, 10, 0.1);
  transition: all 0.2s ease;

  &.transition-transparency {
    background-color: transparent;
    box-shadow: none;
    transition: all 0.25s ease-in;
    transition-delay: 0.2s;
  }

  &.no-transition {
    transition: none;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: ${Layout.CONTENT_MAX_WIDTH};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 ${Layout.SECTION_PADDING};

  @media ${Breakpoint.MOBILE_LG} {
    padding: 0 ${Layout.SECTION_PADDING_SM};
  }
`;
