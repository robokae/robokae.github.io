import { Breakpoint } from "constants/layout";
import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 1fr;
  gap: 2rem;

  @media ${Breakpoint.TABLET} {
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
  }

  @media ${Breakpoint.MOBILE_LG} {
    gap: 1.5rem;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem 0.5rem;

  @media ${Breakpoint.TABLET} {
    align-items: center;
    text-align: center;
    border-radius: 0;
  }
`;

export const IconContainer = styled.div`
  width: max-content;
  background: ${(props) =>
    ({ theme }) =>
      theme.pages.home.overview[props.index].backgroundColor};
  color: ${(props) =>
    ({ theme }) =>
      theme.pages.home.overview[props.index].foregroundColor};
  padding: 1rem;
  border-radius: 0.5rem;

  @media ${Breakpoint.MOBILE_LG} {
    font-size: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  @media ${Breakpoint.TABLET} {
    width: 80%;
  }

  @media ${Breakpoint.MOBILE_LG} {
    width: 95%;
  }
`;
