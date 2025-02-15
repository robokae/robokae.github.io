import styled from "styled-components";
import { Breakpoint, Layout } from "constants/layout";
import { Typography } from "constants/typography";
import { ContentLayout, SectionLayout } from "components/layout/Layout.styles";
import Card from "components/card/Card";
import { Style } from "constants/style";

export const Section = styled(SectionLayout)`
  @media ${Breakpoint.LAPTOP} {
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
      padding: 0 ${Layout.SECION_PADDING_SM};
    }
  }
`;

export const CardLayout = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: row;
  gap: ${Layout.GAP_MD};
  position: relative;

  & > * {
    height: auto;
  }

  @media ${Breakpoint.LAPTOP} {
    display: none;
  }
`;

export const StyledCard = styled(Card)`
  width: 100%;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0;
`;

export const ImageContainer = styled.div`
  padding: 2.5rem 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.backgroundColor};
  border-radius: ${Style.BORDER_RADIUS} ${Style.BORDER_RADIUS} 0 0;

  img {
    width: 45%;

    @media ${Breakpoint.LAPTOP} {
      width: 30%;
    }

    @media ${Breakpoint.MOBILE_LG} {
      width: 45%;
    }
  }
`;

export const DetailsContainer = styled.div`
  padding: ${Layout.CARD_PADDING};
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const CarouselContainer = styled.div`
  width: 100%;
  display: none;

  @media ${Breakpoint.LAPTOP} {
    display: block;
  }
`;
