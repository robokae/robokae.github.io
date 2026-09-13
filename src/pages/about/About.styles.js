import Card from "components/card/Card";
import Section from "components/page/Section";
import { Breakpoint, Layout } from "global/constants";
import styled from "styled-components";

export const StyledSection = styled(Section)`
  width: 70%;
  padding-top: 6rem;

  @media ${Breakpoint.LAPTOP} {
    width: 90%;
    padding-top: ${Layout.PADDING_LG};
  }

  @media ${Breakpoint.MOBILE_LG} {
    width: 100%;
  }
`;

export const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  font-size: larger;
`;

export const CardsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.5rem;
  grid-auto-rows: 1fr;

  @media ${Breakpoint.TABLET} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${Breakpoint.MOBILE_LG} {
    grid-template-columns: 1fr;
  }
`;

export const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 0.25rem;
`;

export const StyledText = styled.p`
  display: flex;
  align-items: center;
  flex: 1;

  @media ${Breakpoint.MOBILE_LG} {
    margin-bottom: auto;
  }
`;

export const CardContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  gap: 1rem;
`;
