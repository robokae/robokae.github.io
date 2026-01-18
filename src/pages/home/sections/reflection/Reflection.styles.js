import Section from "components/page/Section";
import { Layout } from "constants";
import { Breakpoint } from "constants";
import styled from "styled-components";

export const StyledSection = styled(Section)`
  background: ${({ theme }) => theme.pages.home.reflection.background};
  padding: 10rem 0;
  gap: 3.5rem;

  @media ${Breakpoint.TABLET} {
    padding: 6rem 0;
    gap: 3rem;
  }
`;

export const StyledContent = styled(Section.Content)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media ${Breakpoint.LAPTOP} {
    flex-direction: column;
    gap: ${Layout.GAP_XL};
  }

  & > img {
    max-width: 500px;

    @media ${Breakpoint.LAPTOP} {
      width: 60%;
    }

    @media ${Breakpoint.MOBILE_LG} {
      width: 70%;
    }
  }

  & > div {
    width: 45%;
    display: flex;
    flex-direction: column;
    gap: ${Layout.GAP_MD};

    @media ${Breakpoint.LAPTOP} {
      width: 100%;
      gap: ${Layout.GAP_LG};
    }
  }
`;
