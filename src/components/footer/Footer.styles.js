import { Breakpoint, Layout } from "constants/layout";
import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  height: max-content;
  position: relative;
  bottom: 0;
  padding: 0 ${Layout.SECTION_PADDING};
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: auto;
  background-color: ${({ theme }) => theme.footerColor};

  @media ${Breakpoint.MOBILE_LG} {
    padding: 0;
  }

  @media ${Breakpoint.MOBILE_S} {
    justify-content: left;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: ${Layout.CONTENT_MAX_WIDTH};
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem 0;
  font-size: 0.9rem;

  @media ${Breakpoint.TABLET} {
    flex-direction: column;
  }

  @media ${Breakpoint.MOBILE_S} {
    gap: 1.5rem;
  }
`;

export const LinkContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: left;
  flex-direction: row;
  gap: 1.5rem;
  color: ${({ theme }) => theme.secondaryFontColor};

  @media ${Breakpoint.TABLET} {
    justify-content: center;
  }

  @media ${Breakpoint.MOBILE_S} {
    padding: 0 ${Layout.SECTION_PADDING_SM};
    display: grid;
    justify-content: left;
    grid-template-columns: max-content max-content;
    grid-template-rows: 1fr 1fr;
    grid-row-gap: 0.5rem;
    grid-column-gap: 3rem;
    grid-auto-flow: column;
  }
`;

export const CaptionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.secondaryFontColor};

  @media ${Breakpoint.TABLET} {
    align-items: center;
  }

  @media ${Breakpoint.MOBILE_S} {
    padding: 0 ${Layout.SECTION_PADDING_SM};
    align-items: flex-start;
  }
`;

export const Caption = styled.p`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;

  @media ${Breakpoint.MOBILE_S} {
    flex-direction: column;
    gap: 0;
  }
`;
