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
  gap: 5rem;
  position: relative;

  & > div > div {
    border-radius: ${Style.BORDER_RADIUS} 0 0 ${Style.BORDER_RADIUS};
  }

  & > :nth-child(even) {
    flex-direction: row-reverse;

    & > div {
      border-radius: 0 ${Style.BORDER_RADIUS} ${Style.BORDER_RADIUS} 0;
    }
  }

  @media ${Breakpoint.TABLET} {
    gap: 3rem;

    & > div > div {
      border-radius: ${Style.BORDER_RADIUS} ${Style.BORDER_RADIUS} 0 0;
    }

    & > :nth-child(even) {
      flex-direction: column;

      & > div {
        border-radius: ${Style.BORDER_RADIUS} ${Style.BORDER_RADIUS} 0 0;
      }
    }
  }

  @media ${Breakpoint.MOBILE_LG} {
    display: none;
  }
`;

export const StyledCard = styled(Card)`
  width: 100%;
  padding: 0;
  display: flex;
  flex-direction: row;
  gap: 0;

  @media ${Breakpoint.TABLET} {
    flex-direction: column;
    align-items: center;
  }

  @media ${Breakpoint.MOBILE_LG} {
    background-image: none;
    padding: 0;
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  padding: 11rem 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 50%;
  background-image: ${(props) => props.background};

  img {
    width: 50%;

    @media ${Breakpoint.TABLET} {
      width: 40%;
    }

    @media ${Breakpoint.MOBILE_LG} {
      width: 45%;
    }
  }

  @media ${Breakpoint.TABLET} {
    width: 100%;
    padding: 5rem 0;
  }

  @media ${Breakpoint.MOBILE_LG} {
    padding: 3rem 0;
    width: 100%;
    border-radius: ${Style.BORDER_RADIUS} ${Style.BORDER_RADIUS} 0 0;
  }
`;

export const DetailsContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
  padding: ${Layout.PADDING_LG};

  @media ${Breakpoint.TABLET} {
    width: 90%;
    text-align: center;
    padding: 4rem ${Layout.PADDING_LG};
  }

  @media ${Breakpoint.MOBILE_LG} {
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
