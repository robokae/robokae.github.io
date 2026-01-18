import { Breakpoint, Layout } from "global/constants";
import { styled } from "styled-components";

export const Container = styled.section`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${Layout.GAP_LG};
  position: relative;
  padding: ${Layout.SECTION_PADDING} 0 4rem 0;

  > * {
    max-width: ${Layout.CONTENT_MAX_WIDTH};
    padding: 0 ${Layout.SECTION_PADDING};

    @media ${Breakpoint.MOBILE_LG} {
      padding: 0 ${Layout.SECTION_PADDING_SM};
    }
  }

  @media ${Breakpoint.MOBILE_LG} {
    padding: ${Layout.SECTION_PADDING_SM} 0;
    gap: ${Layout.SECTION_PADDING_SM};
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${Layout.GAP_LG};
  position: relative;

  @media ${Breakpoint.MOBILE_LG} {
    gap: ${Layout.SECTION_PADDING_SM};
  }
`;
