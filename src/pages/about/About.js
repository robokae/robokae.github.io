import content from "content/about.json";
import { PageContentLayout } from "components/layout/Layout.styles";
import { getSectionData } from "util/PageDataUtil";
import React from "react";
import {
  CardContent,
  CardsContainer,
  StyledCard,
  StyledText,
  TextGroup,
} from "./About.styles";
import { Icon } from "@robokae/robokae-ui";
import Section from "components/page/Section";

function About() {
  const { overview, interests, cards } = getSectionData(content);

  return (
    <PageContentLayout>
      <Section>
        <Section.Heading align="left">{overview.heading}</Section.Heading>
        <Section.Content>
          <TextGroup>
            {overview.text.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </TextGroup>
        </Section.Content>
      </Section>
      <Section>
        <Section.Heading align="left">{interests.heading}</Section.Heading>
        <Section.Content>
          <CardsContainer>
            {cards.text.map((text, index) => (
              <StyledCard key={index}>
                <CardContent>
                  <Icon name={cards.icons[index]} size="xl" />
                  <StyledText>{text}</StyledText>
                </CardContent>
              </StyledCard>
            ))}
          </CardsContainer>
        </Section.Content>
      </Section>
    </PageContentLayout>
  );
}

export default About;
