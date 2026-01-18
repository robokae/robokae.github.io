import { Breakpoint, Layout } from "global/constants";
import styled from "styled-components";

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 1fr;
  gap: 1.5rem;

  @media ${Breakpoint.LAPTOP} {
    grid-template-columns: repeat(2, 1fr);
  }

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
  gap: 1.5rem;
  padding-bottom: ${Layout.PADDING_SM};
  position: relative;

  @media ${Breakpoint.TABLET} {
    align-items: center;
    text-align: center;
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
  padding: 0.75rem;
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
  gap: 1rem;

  @media ${Breakpoint.TABLET} {
    width: 80%;
  }

  @media ${Breakpoint.MOBILE_LG} {
    width: 95%;
  }
`;
