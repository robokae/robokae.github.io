import styled from "styled-components";
import { Breakpoint, Layout } from "constants/layout";
import { Typography } from "constants/typography";
import { ContentLayout, SectionLayout } from "components/layout/Layout.styles";
import Card from "components/card/Card";
import { Style } from "constants/style";

export const Section = styled(SectionLayout)`
  @media ${Breakpoint.MOBILE_LG} {
    padding-left: 0;
    padding-right: 0;
  }
`;

export const Content = styled(ContentLayout)`
  @media ${Breakpoint.TABLET} {
    ${Typography.SECTION_TITLE_TAG} {
      padding: 0 ${Layout.SECTION_PADDING};
    }
  }

  @media ${Breakpoint.MOBILE_LG} {
    ${Typography.SECTION_TITLE_TAG} {
      padding: 0 ${Layout.SECTION_PADDING_SM};
    }
  }
`;

export const CardLayout = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;

  & > :nth-child(even) {
    flex-direction: row-reverse;

    @media ${Breakpoint.LAPTOP} {
      flex-direction: column;
    }
  }

  @media ${Breakpoint.LAPTOP} {
    gap: 2rem;
  }

  @media ${Breakpoint.MOBILE_LG} {
    display: none;
  }
`;

export const StyledCard = styled(Card)`
  width: 100%;
  padding: ${Layout.PADDING_LG};
  display: flex;
  flex-direction: row;
  gap: 2rem;
  background-image: ${(props) => props.background};

  @media ${Breakpoint.LAPTOP} {
    padding: ${Layout.PADDING_LG};
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  @media ${Breakpoint.MOBILE_LG} {
    background-image: none;
    padding: 0;
    gap: 0;
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  padding: 6rem 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: ${Style.BORDER_RADIUS};
  width: 50%;

  img {
    width: 65%;

    @media ${Breakpoint.LAPTOP} {
      width: 40%;
    }

    @media ${Breakpoint.MOBILE_LG} {
      width: 45%;
    }
  }

  @media ${Breakpoint.LAPTOP} {
    width: 100%;
    padding: 3rem 0;
  }

  @media ${Breakpoint.MOBILE_LG} {
    padding: 3rem 0;
    width: 100%;
    background-image: ${(props) => props.background};
    border-radius: ${Style.BORDER_RADIUS} ${Style.BORDER_RADIUS} 0 0;
  }
`;

export const DetailsContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
  background: none;

  & > * {
    color: ${({ theme }) => theme.pages.home.experience.fontColor};

    @media ${Breakpoint.MOBILE_LG} {
      color: ${({ theme }) => theme.primaryFontColor};
    }
  }

  @media ${Breakpoint.LAPTOP} {
    width: 80%;
    text-align: center;
  }

  @media ${Breakpoint.MOBILE_LG} {
    width: 100%;
    justify-content: flex-start;
    padding: ${Layout.CARD_PADDING};
    text-align: left;
  }
`;

export const ResponsiveHeading = styled.h4`
  @media ${Breakpoint.MOBILE_LG} {
    display: flex;
    align-items: center;
    height: ${(props) => props.height};
  }
`;

export const CarouselContainer = styled.div`
  width: 100%;
  display: none;

  @media ${Breakpoint.MOBILE_LG} {
    display: block;
  }
`;
