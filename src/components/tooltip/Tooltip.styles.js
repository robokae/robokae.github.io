import styled, { css } from "styled-components";

export const Container = styled.div`
  width: max-content;
  position: absolute;
  padding: 0.1rem 0.5rem;
  border-radius: 0.25rem;
  text-align: center;
  background-color: ${({ theme }) => theme.tooltip.backgroundColor};
  color: ${({ theme }) => theme.tooltip.foregroundColor};
  font-size: smaller;
  z-index: 10;

  ${(props) =>
    props.position === "top" &&
    css`
      bottom: 100%;
      left: 50%;
      transform: translateX(-50%);
      margin-bottom: 0.8rem;
    `}

  ${(props) =>
    props.position === "bottom" &&
    css`
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      margin-top: 0.8rem;
    `}

  ${(props) =>
    props.position === "left" &&
    css`
      top: 50%;
      right: 100%;
      transform: translateY(-50%);
      margin-right: 0.8rem;
    `}

  ${(props) =>
    props.position === "right" &&
    css`
      top: 50%;
      left: 100%;
      transform: translateY(-50%);
      margin-left: 0.8rem;
    `}

  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;

    ${(props) =>
      props.position === "top" &&
      css`
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        border-width: 0.25rem 0.25rem 0 0.25rem;
        border-color: ${({ theme }) => theme.tooltip.backgroundColor}
          transparent transparent transparent;
      `}

    ${(props) =>
      props.position === "bottom" &&
      css`
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%);
        border-width: 0 0.25rem 0.25rem 0.25rem;
        border-color: transparent transparent
          ${({ theme }) => theme.tooltip.backgroundColor} transparent;
      `}

    ${(props) =>
      props.position === "left" &&
      css`
        top: 50%;
        left: 100%;
        transform: translateY(-50%);
        border-width: 0.25rem 0 0.25rem 0.25rem;
        border-color: transparent transparent transparent
          ${({ theme }) => theme.tooltip.backgroundColor};
      `}

    ${(props) =>
      props.position === "right" &&
      css`
        top: 50%;
        right: 100%;
        transform: translateY(-50%);
        border-width: 0.25rem 0.25rem 0.25rem 0;
        border-color: transparent
          ${({ theme }) => theme.tooltip.backgroundColor} transparent
          transparent;
      `}
  }
`;
