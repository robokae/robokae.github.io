import { Card } from "@robokae/robokae-ui";
import { Breakpoint, Layout } from "global/constants";
import styled from "styled-components";

export const StyledCard = styled(Card)`
  background: ${({ theme }) => theme.pages.home.reflection.background};
  padding: 12rem ${Layout.SECTION_PADDING};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
  text-align: center;

  p {
    width: 80%;
    font-size: larger;
  }

  @media ${Breakpoint.TABLET} {
    padding: 6rem ${Layout.SECTION_PADDING_SM};
    gap: 3rem;

    p {
      width: 100%;
      font-size: 1rem;
    }
  }
`;

export const CardImage = styled.img`
  max-width: 650px;

  @media ${Breakpoint.LAPTOP} {
    width: 60%;
  }

  @media ${Breakpoint.MOBILE_LG} {
    width: 70%;
  }
`;
