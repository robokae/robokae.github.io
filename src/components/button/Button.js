import {
  OutlinedButton,
  PlainButton,
  PrimaryButton,
  SecondaryButton,
} from "./Button.styles";

function Button({ variant, onClick, children }) {
  switch (variant) {
    case "primary":
      return <PrimaryButton onClick={onClick}>{children}</PrimaryButton>;
    case "secondary":
      return <SecondaryButton onClick={onClick}>{children}</SecondaryButton>;
    case "plain":
      return <PlainButton onClick={onClick}>{children}</PlainButton>;
    case "outlined":
      return <OutlinedButton onClick={onClick}>{children}</OutlinedButton>;
    default:
      return <PlainButton onClick={onClick}>{children}</PlainButton>;
  }
}

export default Button;
