import { Heading } from "@robokae/robokae-ui";
import { StyledContent, StyledSection } from "./Reflection.styles";

const Reflection = ({ data }) => {
  const { heading, text, image } = data;

  return (
    <StyledSection>
      <StyledContent>
        <img src={`images/${image.name}`} alt={image.altText} />
        <div>
          <Heading as="h2">{heading}</Heading>
          <>
            {text.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </>
        </div>
      </StyledContent>
    </StyledSection>
  );
};

export default Reflection;
