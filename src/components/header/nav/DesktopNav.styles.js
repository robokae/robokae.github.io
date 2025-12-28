import { Breakpoint, Layout } from "constants/layout";
import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
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
