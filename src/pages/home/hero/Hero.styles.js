import { HeroLayout } from "components/layout/Layout.styles";
import { Breakpoint, Layout } from "global/constants";
import styled from "styled-components";

export const Container = styled(HeroLayout)`
  width: 100%;
  background-color: ${({ theme }) => theme.pages.home.hero.backgroundColor};
  padding-top: ${Layout.HEADER_HEIGHT};
  padding-bottom: 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${Layout.GAP_LG};
`;

export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Layout.GAP_MD};
  padding: ${Layout.PADDING_LG} 0;
  text-align: center;
`;

export const SubHeading = styled.h4`
  color: ${({ theme }) => theme.pages.home.hero.subheadingColor};
  font-weight: normal;
`;

export const Image = styled.img`
  max-width: 500px;

  @media ${Breakpoint.TABLET} {
    max-width: 375px;
  }

  @media ${Breakpoint.MOBILE_LG} {
    max-width: 300px;
  }
`;
