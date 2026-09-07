import { HeroLayout } from "components/layout/Layout.styles";
import { Breakpoint, Layout, Style } from "global/constants";
import styled, { css } from "styled-components";

export const Container = styled(HeroLayout)`
  width: 100vw;
  padding: ${Layout.SECTION_PADDING};
  background-color: ${({ theme }) => theme.pages.home.hero.backgroundColor};
  padding-bottom: 0;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  max-width: ${Layout.CONTENT_MAX_WIDTH};
  margin-top: ${Layout.HEADER_HEIGHT};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${Layout.GAP_LG};
  border-radius: ${Style.BORDER_RADIUS};

  @media ${Breakpoint.MOBILE_LG} {
    gap: ${Layout.GAP_LG};
    justify-content: space-between;
  }
`;

export const HeadingContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${Layout.GAP_MD};
  padding: ${Layout.PADDING_LG} 0;
`;

export const headingStyle = css`
  width: 100%;
  text-align: center;
`;

export const Heading = styled.div`
  ${headingStyle};
`;

export const SubHeading = styled.div`
  ${headingStyle}
  & > * {
    color: ${({ theme }) => theme.pages.home.hero.subheadingColor};
    font-weight: normal;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
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
