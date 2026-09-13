import { Heading } from "@robokae/robokae-ui";
import { Breakpoint, Layout } from "global/constants";
import { styled } from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6rem;
  max-width: ${Layout.CONTENT_MAX_WIDTH};

  > * {
    padding: 0 ${Layout.SECTION_PADDING};

    @media ${Breakpoint.MOBILE_LG} {
      padding: 0 ${Layout.SECTION_PADDING_SM};
    }
  }

  @media ${Breakpoint.TABLET} {
    gap: 3rem;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8rem;
  position: relative;

  @media ${Breakpoint.MOBILE_LG} {
    gap: ${Layout.SECTION_PADDING_SM};
  }
`;

export const Subheading = styled(Heading)`
  font-weight: normal;
`;
