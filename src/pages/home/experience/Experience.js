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
  const { heading, subHeadings, text, images } = data;
  const theme = useTheme();

  return (
    <Section>
      <Section.Heading>{heading}</Section.Heading>
      <Section.Content>
        <CardLayout>
          {subHeadings.map((subHeading, index) => (
            <StyledCard
              key={index}
              className={(index + 1) % 2 === 0 && "even-card"}
              background={theme.pages.home.experience.backgroundColor[index]}
            >
              <ImageContainer>
                <img
                  src={`images/${images[index].name}`}
                  alt={images[index].altText}
                ></img>
              </ImageContainer>
              <DetailsContainer>
                <Heading as="h3">{subHeading}</Heading>
                <p>{text[index]}</p>
              </DetailsContainer>
            </StyledCard>
          ))}
        </CardLayout>
      </Section.Content>
    </Section>
  );
};

export default Experience;
