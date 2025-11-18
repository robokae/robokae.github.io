import { Flex } from "@robokae/robokae-ui";
import { Breakpoint, Layout } from "constants/layout";
import { styled } from "styled-components";

export const Container = styled.section`
  width: 100%;
  max-width: ${Layout.CONTENT_MAX_WIDTH};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${Layout.GAP_LG};
  position: relative;
  padding: ${Layout.SECTION_PADDING} 0;

  h3 {
    padding: 0 ${Layout.SECTION_PADDING};

    @media ${Breakpoint.MOBILE_LG} {
      padding: 0 ${Layout.SECTION_PADDING_SM};
    }
  }

  @media ${Breakpoint.MOBILE_LG} {
    gap: ${Layout.SECTION_PADDING_SM};
    padding: ${Layout.SECTION_PADDING_SM} 0;
  }
`;

export const Content = styled(Flex)`
  height: max-content;
  flex-direction: column;
  align-items: center;
  gap: ${Layout.GAP_LG};
  position: relative;
  padding: 0 ${Layout.SECTION_PADDING};

  @media ${Breakpoint.MOBILE_LG} {
    gap: ${Layout.SECTION_PADDING_SM};
    padding: 0 ${Layout.SECTION_PADDING_SM};
  }
`;
