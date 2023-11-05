import {
  BOTTOM,
  CENTER,
  LEFT,
  RIGHT,
  TOP,
} from "../../constants/StyleConstants";
import { CardContainer } from "./Card.styles";
import PropTypes from "prop-types";

const Card = ({
  outline,
  horizontalAlign,
  verticalAlign,
  borderRadius,
  backgroundColor,
  textColor,
  textSize,
  gradientBackground,
  gradientDirection,
  padding,
  additionalStyles,
  children,
}) => {
  return (
    <CardContainer
      outline={outline}
      horizontalAlign={horizontalAlign}
      verticalAlign={verticalAlign}
      borderRadius={borderRadius}
      backgroundColor={backgroundColor}
      textColor={textColor}
      textSize={textSize}
      gradientBackground={gradientBackground}
      gradientDirection={gradientDirection}
      padding={padding}
      additionalStyles={additionalStyles}
    >
      {children}
    </CardContainer>
  );
};

Card.propTypes = {
  horizontalAlign: PropTypes.oneOf([LEFT, CENTER, RIGHT]),
  verticalAlign: PropTypes.oneOf([TOP, CENTER, BOTTOM]),
};

Card.defaultProps = {
  horizontalAlign: LEFT,
  verticalAlign: TOP,
};

export default Card;
