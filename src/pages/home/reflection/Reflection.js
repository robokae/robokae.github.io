import { Card } from "@robokae/robokae-ui";
import Section from "components/page/Section";
import { CardImage, StyledCard } from "./Reflection.styles";

const Reflection = ({ data }) => {
  const { heading, text, image } = data;

  return (
    <Section>
      <Section.Content>
        <StyledCard>
          <CardImage src={`images/${image.name}`} alt={image.altText} />
          <Card.Heading as="h2">{heading}</Card.Heading>
          <Card.Content>
            {text.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </Card.Content>
        </StyledCard>
      </Section.Content>
    </Section>
  );
};

export default Reflection;
