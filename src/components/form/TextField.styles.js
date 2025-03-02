import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & > label {
    color: ${({ theme }) => theme.form.input.labelColor};
  }
`;

export const InputContainer = styled.div`
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.lineColor};
  border-radius: 2px;
  background-color: ${({ theme }) => theme.form.input.backgroundColor};
`;

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

export const TextInput = styled.input`
  ${baseInputStyles};
`;

export const TextAreaInput = styled.textarea`
  ${baseInputStyles};
  min-height: 10rem;
  resize: none;
`;
