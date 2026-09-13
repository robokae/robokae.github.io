import {
  CardContent,
  CardGrid,
  IconContainer,
  StyledCard,
  TextContainer,
} from "./Overview.styles";
import { Card, Icon } from "@robokae/robokae-ui";
import Section from "components/page/Section";
import { useTheme } from "styled-components";

const Overview = ({ data }) => {
  const { heading, entries } = data;
  const theme = useTheme();

  return (
    <Section>
      <Section.Heading>{heading}</Section.Heading>
      <Section.Content>
        <CardGrid>
          {entries.map((entry, index) => {
            return (
              <StyledCard key={index}>
                <CardContent>
                  <IconContainer index={index}>
                    <Icon
                      name={entry.icon}
                      index={index}
                      size="lg"
                      color={theme.pages.home.overview[index].foregroundColor}
                    />
                  </IconContainer>
                  <TextContainer>
                    <h4>{entry.title}</h4>
                    <p>{entry.description}</p>
                  </TextContainer>
                </CardContent>
              </StyledCard>
            );
          })}
        </CardGrid>
      </Section.Content>
    </Section>
  );
};

export default Overview;
