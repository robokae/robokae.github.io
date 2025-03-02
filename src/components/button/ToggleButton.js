import styled from "styled-components";
import { useState } from "react";

const DEFAULT_BACKGROUND_COLOR = "#29353D";
const DEFAULT_SLIDER_BACKGROUND_COLOR = "#F0F1F2";

const SliderContainer = styled.button`
  width: 2.75rem;
  height: 1.375rem;
  background-color: ${({ theme }) => theme.button.toggle.backgroundColor};
  padding: 1px;
  border: none;
  border-radius: 10rem;
  cursor: pointer;
`;

const Slider = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 10rem;
  background-color: ${({ theme }) => theme.button.toggle.foregroundColor};
  transition: transform 0.2s ease-out;
  transform: ${(props) =>
    props.slideRight ? "translateX(100%)" : "translateX(0)"};
`;

function ToggleButton({
  onClick,
  icon,
  backgroundColor = DEFAULT_BACKGROUND_COLOR,
  sliderColor = DEFAULT_SLIDER_BACKGROUND_COLOR,
}) {
  const [slideRight, setSlideRight] = useState(false);

  const handleClick = (clickCallback) => {
    clickCallback();
    setSlideRight((prev) => !prev);
  };

  return (
    <SliderContainer
      onClick={() => handleClick(onClick)}
      backgroundColor={backgroundColor}
    >
      <Slider backgroundColor={sliderColor} slideRight={slideRight}>
        {icon && icon}
      </Slider>
    </SliderContainer>
  );
}

export default ToggleButton;
