import React from "react";
import {
  CardLayout,
  DetailsContainer,
  ImageContainer,
  StyledCard,
} from "./Experience.styles";
import Section from "components/page/Section";
import { useTheme } from "styled-components";
import { Heading } from "@robokae/robokae-ui";

const Experience = ({ data }) => {
  const { heading, subheading, entries } = data;
  const theme = useTheme();

  return (
    <Section>
      <Section.Heading>{heading}</Section.Heading>
      <Section.Subheading>{subheading}</Section.Subheading>
      <Section.Content>
        <CardLayout>
          {entries.map((entry, index) => (
            <StyledCard
              key={index}
              className={(index + 1) % 2 === 0 && "even-card"}
              background={theme.pages.home.experience.backgroundColor[index]}
            >
              <ImageContainer>
                <img
                  src={`images/${entry.image.name}`}
                  alt={entry.image.altText}
                ></img>
              </ImageContainer>
              <DetailsContainer>
                <Heading as="h3">{entry.title}</Heading>
                <p>{entry.description}</p>
              </DetailsContainer>
            </StyledCard>
          ))}
        </CardLayout>
      </Section.Content>
    </Section>
  );
};

export default Experience;
