import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

export const Container = styled(NavLink)`
  color: inherit;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: inherit;

  ${(props) =>
    props.underline &&
    css`
      &:hover {
        text-decoration: underline;
      }
    `}
`;
