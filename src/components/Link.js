import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Link = styled(NavLink)`
  color: ${({ theme }) => theme.primaryFontColor};
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: inherit;
`;

export const UnderlinedLink = styled(Link)`
  color: inherit;

  &:hover {
    text-decoration: underline;
  }
`;

export const LinkButton = styled(Link)`
  background-color: ${({ theme }) => theme.accentColor};
  padding: 0.75rem 2rem;
  color: ${({ theme }) => theme.primaryBackgroundColor};
  border: transparent;
  border-radius: 5rem;
  cursor: pointer;

  &:hover {
    background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(0, 0, 0, 0.1) 100%
    );
  }
`;

export const BorderedIconLinkButton = styled(Link)`
  width: 100%;
  background-color: ${({ theme }) => theme.secondaryBackgroundColor};
  padding: 0.5rem 2rem;
  color: ${({ theme }) => theme.primaryFontColor};
  border: 1px solid ${({ theme }) => theme.lineColor};
  border-radius: 0.25rem;
  cursor: pointer;

  svg {
    font-size: 1.25rem;
  }
`;
