import {
  Container,
  InputContainer,
  TextAreaInput,
  TextInput,
} from "./TextField.styles";

function TextField({
  label,
  name,
  placeholder,
  required,
  multiline = false,
  onChange,
  ...props
}) {
  return (
    <Container>
      {label && <label for={name}>{label}</label>}
      <InputContainer>
        {multiline ? (
          <TextAreaInput
            id={name}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
          />
        ) : (
          <TextInput
            id={name}
            name={name}
            placeholder={placeholder}
            type="text"
            onChange={onChange}
          />
        )}
      </InputContainer>
    </Container>
  );
}

export default TextField;
