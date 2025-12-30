import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(NavLink)`
  color: ${({ theme }) => theme.primaryFontColor};
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: inherit;
`;
