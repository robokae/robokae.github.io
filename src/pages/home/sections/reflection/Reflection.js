import styled from "styled-components";
import { Breakpoint } from "constants/layout";
import { Text } from "@robokae/robokae-ui";
import Section from "components/page/Section";

const Description = styled.div`
  width: 90%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  font-size: larger;

  @media ${Breakpoint.MOBILE_LG} {
    width: 100%;
    font-size: inherit;
  }
`;

const Reflection = ({ data }) => {
  return (
    <Section>
      <Section.Heading>{data.heading}</Section.Heading>
      <Section.Content>
        <Description>
          {data.text.map((line, index) => (
            <Text key={index}>{line}</Text>
          ))}
        </Description>
      </Section.Content>
    </Section>
  );
};

export default Reflection;
