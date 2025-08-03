import Card from "components/card/Card";
import { Breakpoint } from "constants/layout";
import styled from "styled-components";

export const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const CardsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.75rem;
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
