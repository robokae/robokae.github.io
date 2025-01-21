import styled from "styled-components";
import Icon from "components/icon/Icon";
import { useState } from "react";

const DEFAULT_BACKGROUND_COLOR = "#29353D";
const DEFAULT_SLIDER_BACKGROUND_COLOR = "#F0F1F2";

const SliderContainer = styled.button`
  width: 2.75rem;
  height: 1.375rem;
  background-color: ${(props) => props.backgroundColor};
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
  background-color: ${(props) => props.backgroundColor};
  transition: transform 0.2s ease-out;
  transform: ${(props) =>
    props.slideRight ? "translateX(100%)" : "translateX(0)"};
`;

const StyledIcon = styled(Icon)`
  font-size: 0.8rem;
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
