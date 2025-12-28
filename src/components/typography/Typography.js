import React from "react";
import styled, { css } from "styled-components";

const defaultStyles = css`
  width: 100%;
  color: ${(props) => props.color ?? (({ theme }) => theme.primaryFontColor)};
  text-align: ${(props) => props.align ?? "inherit"};
`;

const DEFAULT_TAG = "p";

const DynamicTypography = styled(({ tag, children, style, ...props }) =>
  React.createElement(tag, props, style, children)
)`
  ${defaultStyles}
`;

export default function Typography({ tag, children, style, ...props }) {
  return (
    <DynamicTypography tag={tag ?? DEFAULT_TAG} style={style} {...props}>
      {children}
    </DynamicTypography>
  );
}
