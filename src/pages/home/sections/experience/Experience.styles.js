import styled from "styled-components";
import { Breakpoint, Layout } from "constants/layout";
import Card from "components/card/Card";

export const CardLayout = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media ${Breakpoint.MOBILE_LG} {
    gap: 1.5rem;
  }
`;

export const StyledCard = styled(Card)`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
  background-image: ${(props) => props.background};
  padding: ${Layout.PADDING_LG};

  &.even-card {
    flex-direction: row;

    @media ${Breakpoint.MOBILE_LG} {
      flex-direction: column;
    }
  }

  @media ${Breakpoint.LAPTOP} {
    flex-direction: column;
    align-items: center;
    gap: 0;
    padding: 3rem ${Layout.PADDING_MD};
  }
`;

export const ImageContainer = styled.div`
  padding: 8rem 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    max-width: 390px;
  }

  @media ${Breakpoint.LAPTOP} {
    width: 80%;
    padding: 3rem 0;

    img {
      width: 60%;
    }
  }

  @media ${Breakpoint.MOBILE_LG} {
    padding: 2rem 0;

    img {
      width: 80%;
    }
  }
`;

export const DetailsContainer = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;

  p {
    width: 90%;
  }

  @media ${Breakpoint.LAPTOP} {
    width: 100%;
    text-align: center;
    align-items: center;
    padding: 3rem 2rem;
  }

  @media ${Breakpoint.MOBILE_LG} {
    padding: 2rem 0;

    p {
      width: 100%;
    }
  }
`;
