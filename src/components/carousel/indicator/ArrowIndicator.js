import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ActionButton, NumbersContainer } from "./ArrowIndicator.styles";

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
        <FontAwesomeIcon icon={faArrowLeft} fixedWidth />
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
        <FontAwesomeIcon icon={faArrowRight} fixedWidth />
      </ActionButton>
    </>
  );
}

export default ArrowIndicator;
