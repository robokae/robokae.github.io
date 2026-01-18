import { Breakpoint, Layout } from "global/constants";
import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  gap: ${Layout.GAP_LG};

  @media ${Breakpoint.MOBILE_LG} {
    gap: 2rem;
  }
`;

export const HeroLayout = styled(BaseLayout)`
  margin-top: -${Layout.HEADER_HEIGHT};
`;

export const SectionLayout = styled(BaseLayout)`
  padding: 4rem ${Layout.SECTION_PADDING};
  gap: ${Layout.GAP_LG};
  position: relative;

  @media ${Breakpoint.MOBILE_LG} {
    padding: ${Layout.SECTION_PADDING_SM};
  }
`;
