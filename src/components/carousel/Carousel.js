import React, { useEffect, useRef, useState } from "react";
import { Container, Slide, SlideContainer } from "./Carousel.styles";
import { useResize } from "hooks/useResize";
import SlideIndicator from "./SlideIndicator";

const Carousel = ({
  paddingX,
  displayArrows,
  indicatorType,
  children: slides,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRefs = useRef(slides.map(React.createRef));
  const carouselRef = useRef(null);
  const [slideInitialPosition, setSlideInitialPosition] = useState(null);
  const [slideWidth, setSlideWidth] = useState(null);
  const { width } = useResize();
  const scrollConfig = {
    behavior: "smooth",
    inline: "center",
    block: "nearest",
  };
  const [touchStart, setTouchStart] = useState(null);
  const TOUCH_MOVE_THRESHOLD = 8;
  const isScrolling = useRef(false);

  useEffect(() => {
    if (carouselRef.current) {
      const { left, width } =
        carouselRef.current.children[currentSlide].getBoundingClientRect();
      setSlideWidth(width);
      setSlideInitialPosition(left);
    }
  }, [width]);

  const isNotFirstSlide = (slideIndex) => slideIndex !== 0;

  const isNotLastSlide = (slideIndex) => slideIndex !== slides.length - 1;

  const scrollToPreviousSlide = () => {
    if (isNotFirstSlide(currentSlide)) {
      carouselRef.current.children[currentSlide - 1].scrollIntoView(
        scrollConfig
      );
      setCurrentSlide((current) => current - 1);
    }
  };

  const scrollToNextSlide = () => {
    if (isNotLastSlide(currentSlide)) {
      carouselRef.current.children[currentSlide + 1].scrollIntoView(
        scrollConfig
      );
      setCurrentSlide((current) => current + 1);
    }
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const touchTranslateDelta = e.changedTouches[0].clientX - touchStart;
    const isTouchMoveOverThreshold =
      Math.abs(touchTranslateDelta) > TOUCH_MOVE_THRESHOLD;

    if (isTouchMoveOverThreshold) {
      if (touchTranslateDelta < 0 && isNotLastSlide(currentSlide)) {
        setCurrentSlide((prevSlide) => prevSlide + 1);
      } else if (touchTranslateDelta > 0 && isNotFirstSlide(currentSlide)) {
        setCurrentSlide((prevSlide) => prevSlide - 1);
      }
    }
  };

  const getSlideTranslateDelta = () => {
    const { x: offset } =
      carouselRef.current.children[currentSlide].getBoundingClientRect();
    return offset - slideInitialPosition;
  };

  const handleWheel = () => {
    if (isScrolling.current) {
      return;
    }

    isScrolling.current = true;

    if (isNotLastSlide(currentSlide)) {
      if (getSlideTranslateDelta() < (-1 * slideWidth) / 2) {
        setCurrentSlide((prevSlide) => prevSlide + 1);
        setTimeout(10);
      }
    }

    if (isNotFirstSlide(currentSlide)) {
      if (getSlideTranslateDelta() > slideWidth / 2) {
        setCurrentSlide((prevSlide) => prevSlide - 1);
        setTimeout(10);
      }
    }

    setTimeout(() => {
      isScrolling.current = false;
    }, 200);
  };

  return (
    <Container>
      <SlideContainer
        ref={carouselRef}
        onWheel={handleWheel}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        style={paddingX ? { padding: `0 ${paddingX}` } : null}
      >
        {slides.map((item, index) => {
          return (
            <Slide key={index} ref={slideRefs.current[index]}>
              {item}
            </Slide>
          );
        })}
      </SlideContainer>

      <SlideIndicator
        displayArrows={displayArrows}
        indicatorType={indicatorType}
        currentSlide={currentSlide}
        numSlides={slides.length}
        nextSlideCallback={scrollToNextSlide}
        previousSlideCallback={scrollToPreviousSlide}
      />
    </Container>
  );
};

export default Carousel;
