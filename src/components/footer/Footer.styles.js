import Link from "components/link/Link";
import { Breakpoint, Layout } from "global/constants";
import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  height: max-content;
  position: relative;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: auto;
  border-top: 1px solid ${({ theme }) => theme.lineColor};

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
  flex-direction: column;
  gap: 1.5rem;
  padding: ${Layout.SECTION_PADDING};
  font-size: 0.9rem;

  @media ${Breakpoint.MOBILE_LG} {
    padding: ${Layout.SECTION_PADDING} ${Layout.SECTION_PADDING_SM};
  }
`;

export const Logo = styled.img`
  width: 56px;
  height: 48px;

  @media ${Breakpoint.MOBILE_LG} {
    width: 42px;
    height: 36px;
  }
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media ${Breakpoint.TABLET} {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

export const LinkContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.secondaryFontColor};

  &:hover {
    text-decoration: underline;
  }
`;

export const Caption = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.secondaryFontColor};

  @media ${Breakpoint.TABLET} {
    justify-content: left;
  }
`;
