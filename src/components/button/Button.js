import { PrimaryButton, SecondaryButton } from "./Button.styles";

function Button({ type, onChange, children }) {
  switch (type) {
    case "primary":
      return <PrimaryButton onChange={onChange}>{children}</PrimaryButton>;
    case "secondary":
      return <SecondaryButton onChange={onChange}>{children}</SecondaryButton>;
    default:
      return <SecondaryButton onChange={onChange}>{children}</SecondaryButton>;
  }
}

export default Button;
