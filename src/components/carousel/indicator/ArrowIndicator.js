import { ActionButton, NumbersContainer } from "./ArrowIndicator.styles";
import { ArrowLeft, ArrowRight } from "react-bootstrap-icons";

function ArrowIndicator({
  numbers,
  currentSlide,
  numSlides,
  leftArrowClickHandler,
  rightArrowClickHandler,
}) {
  return (
    <>
      <ActionButton active={currentSlide !== 0} onClick={leftArrowClickHandler}>
        <ArrowLeft />
      </ActionButton>
      {numbers && (
        <NumbersContainer>
          {`${currentSlide + 1} / ${numSlides}`}
        </NumbersContainer>
      )}
      <ActionButton
        active={currentSlide !== numSlides - 1}
        onClick={rightArrowClickHandler}
      >
        <ArrowRight />
      </ActionButton>
    </>
  );
}

export default ArrowIndicator;
