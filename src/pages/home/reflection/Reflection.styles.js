import Section from "components/page/Section";
import { Breakpoint, Layout } from "global/constants";
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
  flex-direction: column;
  gap: ${Layout.GAP_XL};

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
    width: 65%;
    display: flex;
    flex-direction: column;
    gap: ${Layout.GAP_LG};
    text-align: center;

    @media ${Breakpoint.LAPTOP} {
      width: 100%;
    }

    & > p {
      font-size: larger;
    }
  }
`;
