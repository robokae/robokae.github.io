import styled from "styled-components";

const SliderContainer = styled.button`
  width: 2.75rem;
  height: 1.5rem;
  background-color: ${({ theme }) => theme.button.toggle.backgroundColor};
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
  background-color: ${({ theme }) => theme.button.toggle.foregroundColor};
  color: ${({ theme }) => theme.button.toggle.fontColor};
  transition: transform 0.2s ease-out;
  transform: ${(props) => (props.slide ? "translateX(100%)" : "translateX(0)")};
`;

function ToggleButton({ onClick, slide, icon }) {
  return (
    <SliderContainer onClick={onClick}>
      <Slider slide={slide}>{icon && icon}</Slider>
    </SliderContainer>
  );
}

export default ToggleButton;
