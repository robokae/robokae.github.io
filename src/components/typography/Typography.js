import React from "react";
import styled, { css } from "styled-components";
import { oneOf } from "prop-types";

const defaultStyles = css`
  width: 100%;
  color: ${(props) => props.color ?? (({ theme }) => theme.primaryFontColor)};
  text-align: ${(props) => props.align ?? "inherit"};
`;

const DEFAULT_TAG = "p";
const TAG_VARIANTS = ["h1", "h2", "h3", "h4", "h5", "h6", "p", "span"];

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

Typography.propTypes = {
  tag: oneOf(TAG_VARIANTS),
};
