import styled from "styled-components";

const SliderContainer = styled.button`
  width: 3.1rem;
  height: 1.65rem;
  background-color: ${({ theme }) => theme.toggleButton.backgroundColor};
  padding: 2.25px;
  border: none;
  border-radius: 16rem;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`;

const Slider = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 16rem;
  background-color: ${({ theme }) => theme.toggleButton.foregroundColor};
  transition: transform 0.2s ease-out;
  transform: ${(props) => `translateX(${props.slide ? "100%" : "0"})`};

  & > * {
    color: ${({ theme }) => theme.toggleButton.fontColor};
  }
`;

function ToggleButton({ onClick, slide, icon }) {
  return (
    <SliderContainer onClick={onClick}>
      <Slider slide={slide}>{icon && icon}</Slider>
    </SliderContainer>
  );
}

export default ToggleButton;
