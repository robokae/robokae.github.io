import { Breakpoint, Layout } from "constants/layout";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: ${Layout.CONTENT_MAX_WIDTH};
  height: 100%;
  padding: 0 ${Layout.SECTION_PADDING};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${Layout.GAP_MD};

  & > :first-child {
    margin-right: auto;
  }

  @media ${Breakpoint.MOBILE_LG} {
    padding: 0 ${Layout.SECTION_PADDING_SM};
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${Layout.GAP_MD};
`;
