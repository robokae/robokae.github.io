import { Layout } from "constants/layout";
import {
  CardContent,
  Grid,
  IconContainer,
  TextContainer,
} from "./Overview.styles";
import { Card, Heading, Icon, Text } from "@robokae/robokae-ui";
import Section from "components/page/Section";

const Overview = ({ data }) => {
  const { text, heading, subHeadings, icons } = data;

  return (
    <Section>
      <Section.Heading>{heading}</Section.Heading>
      <Section.Content>
        <Grid gap={Layout.MEDIUM_GAP} size={text.length}>
          {text.map((cardText, index) => {
            return (
              <Card key={index}>
                <CardContent>
                  <IconContainer index={index}>
                    <Icon name={icons[index]} index={index} size="xl" />
                  </IconContainer>
                  <TextContainer>
                    <Heading as="h5">{subHeadings[index]}</Heading>
                    <Text>{cardText}</Text>
                  </TextContainer>
                </CardContent>
              </Card>
            );
          })}
        </Grid>
      </Section.Content>
    </Section>
  );
};

export default Overview;
