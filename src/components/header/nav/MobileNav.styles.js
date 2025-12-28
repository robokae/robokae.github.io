import { Layout } from "constants/layout";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  overflow-y: hidden;
  display: hidden;
  height: 0;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: ${({ theme }) => theme.headerColor};
  transition: height 0.25s ease-out 0.1s, background-color 0.2s ease 0s;

  &.open {
    display: flex;
    flex-direction: column;
    height: ${(props) => props.height}px;
  }

  &.no-transition {
    transition: none;
  }
`;

export const Options = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1rem ${Layout.SECTION_PADDING_SM};
  padding-top: 0;
  font-size: 1.1rem;
  z-index: 5;

  .menu-link:hover {
    color: ${({ theme }) => theme.accentColor};
  }
`;
