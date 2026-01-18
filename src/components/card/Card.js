import { Breakpoint, Layout, Style } from "global/constants";
import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: ${Layout.CARD_PADDING};
  border-radius: ${Style.BORDER_RADIUS};
  background-color: ${({ theme }) => theme.secondaryBackgroundColor};
  gap: ${Layout.GAP_MD};

  @media ${Breakpoint.TABLET} {
    padding: ${Layout.PADDING_MD};
  }
`;

export default Card;
