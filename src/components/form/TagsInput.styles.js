import Icon from "components/icon/Icon";
import styled, { css } from "styled-components";

export const baseInputStyles = css`
  width: 100%;
  outline: none;
  color: ${({ theme }) => theme.primaryFontColor};
  background-color: inherit;
  border: none;

  &::placeholder {
    color: ${({ theme }) => theme.form.input.placeholderColor};
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & > label {
    color: ${({ theme }) => theme.form.input.labelColor};
  }
`;

export const TagFieldContainer = styled.div`
  ${baseInputStyles};
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${({ theme }) => theme.primaryFontColor};
  background-color: ${({ theme }) => theme.form.input.backgroundColor};
  border: 1px solid ${({ theme }) => theme.lineColor};
  border-radius: 2px;
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.25rem;

  &:first-child {
    padding-left: 0.5rem;
  }
`;

export const TagInput = styled.input`
  ${baseInputStyles};
  padding: 0.75rem 0.5rem;
  border: none;
  background-color: transparent;
`;

// export const StyledIcon = styled(Icon)`
//   color: ${({ theme }) => theme.secondaryFontColor};
//   font-size: 1rem;
//   cursor: pointer;
// `;

export const RemovableTag = styled.div`
  height: 100%;
  padding: 0.25rem 0.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme.tag.backgroundColor};
  border-radius: 0.25rem;
  color: ${({ theme }) => theme.secondaryFontColor};
  font-size: 0.8rem;
`;
