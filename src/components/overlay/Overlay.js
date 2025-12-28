import classNames from "classnames";
import { useEffect } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const OverlayContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.overlayColor};
  z-index: 5;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  pointer-events: none;

  &.display {
    opacity: 1;
    pointer-events: auto;
  }

  &.no-transition {
    transition: none;
  }
`;

function Overlay({ isVisible, transition, onClick }) {
  const NO_SCROLL = "no-scroll";

  useEffect(() => {
    isVisible
      ? document.body.classList.add(NO_SCROLL)
      : document.body.classList.remove(NO_SCROLL);

    return () => document.body.classList.remove(NO_SCROLL);
  }, [isVisible]);

  return ReactDOM.createPortal(
    <OverlayContainer
      className={classNames({
        display: isVisible,
        "no-transition": !transition,
      })}
      $isVisible={isVisible}
      onClick={onClick}
    />,
    document.body
  );
}

export default Overlay;
