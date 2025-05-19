import { Style } from "constants/style";
import styled from "styled-components";

const OverlayContainer = styled.div`
  width: 100vw;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.overlayColor};
  transition: all ${Style.TRANSITION_DURATION} ease-out;
  z-index: -1;
`;

function Overlay(props) {
  return <OverlayContainer {...props} />;
}

export default Overlay;
