import styled from "styled-components";
import Link from "components/link/Link";
import { Breakpoint, Layout } from "global/constants";
import { Card } from "@robokae/robokae-ui";
import Section from "components/page/Section";

export const StyledSection = styled(Section)`
  padding-top: 6rem;

  @media ${Breakpoint.TABLET} {
    padding-top: ${Layout.PADDING_LG};
  }
`;

export const SubHeading = styled.p`
  width: 85%;
  text-align: center;
  font-weight: normal;

  @media ${Breakpoint.LAPTOP_LG} {
    width: 65%;
  }

  @media ${Breakpoint.TABLET} {
    width: 90%;
  }
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  gap: 1.5rem;
  height: max-content;

  @media ${Breakpoint.LAPTOP} {
    grid-template-columns: 1fr;
  }
`;

export const StyledCard = styled(Card)`
  padding: 2rem;
  gap: 2rem;
`;

export const CardHeading = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Layout.GAP_LG};
`;

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: row;
  gap: ${Layout.GAP_SM};
  margin-top: auto;
  color: ${({ theme }) => theme.accentColor};
`;

export const TranslateRight = styled.div`
  transition: all 0.2s ease-in-out;
  transform: translateX(${(props) => (props.isHovered ? "0.5rem" : "0")});
`;
