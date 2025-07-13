import { useEffect, useState } from "react";
import {
  ActionButton,
  DotsContainer,
  NumbersContainer,
  StyledDot,
} from "./SlideIndicator.styles";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import Icon from "components/icon/Icon";
import Stack from "components/Stack";

function SlideIndicator({
  displayArrows = false,
  indicatorType = "none",
  currentSlide,
  numSlides,
  nextSlideCallback,
  previousSlideCallback,
}) {
  const [dots, setDots] = useState([]);

  useEffect(() => {
    const dotsMap = [];
    for (let i = 0; i < numSlides; i++) {
      dotsMap.push(i === currentSlide);
    }
    setDots(dotsMap);
  }, [currentSlide, numSlides]);

  const SlideNumbers = () => (
    <NumbersContainer>{`${currentSlide + 1} / ${numSlides}`}</NumbersContainer>
  );

  const Arrows = (props) => (
    <>
      <ActionButton active={currentSlide !== 0} onClick={previousSlideCallback}>
        <ChevronLeft />
      </ActionButton>
      {props.children}
      <ActionButton
        active={currentSlide !== numSlides - 1}
        onClick={nextSlideCallback}
      >
        <ChevronRight />
      </ActionButton>
    </>
  );

  const Dots = () => (
    <DotsContainer>
      {dots.map((isActive) => (
        <StyledDot isActive={isActive}>
          <Icon size="xl" name="Dot" />
        </StyledDot>
      ))}
    </DotsContainer>
  );

  const Indicator = () => {
    const getIndicator = () => {
      switch (indicatorType) {
        case "dots":
          return <Dots />;
        case "numbers":
          return <SlideNumbers />;
        default:
          return;
      }
    };

    return (
      <Stack gap="2rem">
        {displayArrows ? <Arrows>{getIndicator()}</Arrows> : getIndicator()}
      </Stack>
    );
  };

  return <Indicator />;
}

export default SlideIndicator;
