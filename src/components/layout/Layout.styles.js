import { Breakpoint, Layout } from "constants/layout";
import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const BaseLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PageContentLayout = styled(BaseLayout)`
  margin-top: ${Layout.HEADER_HEIGHT};
  position: relative;
  flex: 1;
`;

export const ContentLayout = styled(BaseLayout)`
  max-width: ${Layout.CONTENT_MAX_WIDTH};
  gap: ${Layout.GAP_LG};
`;

export const HeroLayout = styled(BaseLayout)`
  margin-top: -${Layout.HEADER_HEIGHT};
`;

export const SectionLayout = styled(BaseLayout)`
  padding: ${Layout.SECTION_PADDING};
  gap: ${Layout.GAP_LG};
  position: relative;

  @media ${Breakpoint.MOBILE_LG} {
    padding: ${Layout.SECTION_PADDING_SM};
  }
`;
