import Icon from "components/icon/Icon";
import { Layout } from "constants/layout";
import styled from "styled-components";

export const Container = styled.div`
  width: ${Layout.CONTENT_MAX_WIDTH};
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  box-sizing: border-box;
  align-items: center;
  gap: 1.5rem;

  & > :first-child {
    margin-right: auto;
  }
`;

export const StyledIcon = styled(Icon)`
  cursor: pointer;
`;

export const LinkContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;
`;
