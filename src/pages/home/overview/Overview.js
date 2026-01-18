import {
  CardContent,
  CardGrid,
  IconContainer,
  TextContainer,
} from "./Overview.styles";
import { Card, Icon, Text } from "@robokae/robokae-ui";
import Section from "components/page/Section";
import { useTheme } from "styled-components";

const Overview = ({ data }) => {
  const { text, heading, subHeadings, icons } = data;
  const theme = useTheme();

  return (
    <Section>
      <Section.Heading>{heading}</Section.Heading>
      <Section.Content>
        <CardGrid>
          {text.map((cardText, index) => {
            return (
              <Card key={index}>
                <CardContent>
                  <IconContainer index={index}>
                    <Icon
                      name={icons[index]}
                      index={index}
                      size="lg"
                      color={theme.pages.home.overview[index].foregroundColor}
                    />
                  </IconContainer>
                  <TextContainer>
                    <h5>{subHeadings[index]}</h5>
                    <Text>{cardText}</Text>
                  </TextContainer>
                </CardContent>
              </Card>
            );
          })}
        </CardGrid>
      </Section.Content>
    </Section>
  );
};

export default Overview;
