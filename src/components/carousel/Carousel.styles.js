import Icon from "components/icon/Icon";
import { Breakpoint } from "constants/layout";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const SlideContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  scrollbar-width: none;
  scroll-snap-type: x mandatory;
  scroll-snap-stop: normal;
  gap: 1.5rem;

  @media ${Breakpoint.MOBILE_LG} {
    gap: 1rem;
  }
`;

export const Slide = styled.div`
  width: 100%;
  flex-shrink: 0;
  scroll-snap-align: center;
  scroll-snap-stop: always;
  touch-action: pan-x;
`;

export const SlideIndicatorContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

export const SlideIndicator = styled(Icon)`
  font-size: 0.5rem;
  cursor: pointer;
  color: ${(props) =>
    props.active
      ? ({ theme }) => theme.accentColor
      : ({ theme }) => theme.lineColor};
`;
