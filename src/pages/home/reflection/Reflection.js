import { Heading } from "@robokae/robokae-ui";
import { StyledContent, StyledSection } from "./Reflection.styles";

const Reflection = ({ data }) => {
  return (
    <StyledSection>
      <StyledContent>
        <img
          src={`images/${data.images[0].name}`}
          alt={data.images[0].altText}
        />
        <div>
          <Heading as="h3">{data.heading}</Heading>
          {data.text.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      </StyledContent>
    </StyledSection>
  );
};

export default Reflection;
