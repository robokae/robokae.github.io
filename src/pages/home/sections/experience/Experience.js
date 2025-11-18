import Typography from "components/typography/Typography";
import React from "react";
import Carousel from "components/carousel/Carousel";
import { Typography as TypographyConstants } from "constants/typography";
import {
  CardLayout,
  CarouselContainer,
  Content,
  DetailsContainer,
  ImageContainer,
  StyledCard,
  StyledSection,
} from "./Experience.styles";
import useTheme from "hooks/useTheme";
import { Layout } from "constants/layout";
import { getHeading } from "util/PageDataUtil";
import { Heading } from "@robokae/robokae-ui";
import Section from "components/page/section/Section";

const Experience = ({ data }) => {
  const { heading, subHeadings, text, images } = data;
  const { lightPurpleGradient, lightGreyGradient, lightBlueGradient } =
    useTheme().styles.pages.home.experience;

  const imageBackgroundColors = [
    lightPurpleGradient,
    lightGreyGradient,
    lightBlueGradient,
  ];

  const cards = () =>
    subHeadings.map((subHeading, index) => (
      <StyledCard key={index} background={imageBackgroundColors[index]}>
        <ImageContainer background={imageBackgroundColors[index]}>
          <img
            src={`images/${images[index].name}`}
            alt={images[index].altText}
          ></img>
        </ImageContainer>
        <DetailsContainer>
          <Typography tag={TypographyConstants.H4}>{subHeading}</Typography>
          <p>{text[index]}</p>
        </DetailsContainer>
      </StyledCard>
    ));

  return (
    <Section>
      <Section.Heading>{heading}</Section.Heading>
      <Content>
        <CardLayout size={subHeadings.length}>{cards()}</CardLayout>
      </Content>
      <CarouselContainer>
        <Carousel
          displayArrows
          indicatorType="numbers"
          paddingX={Layout.SECTION_PADDING_SM}
        >
          {cards()}
        </Carousel>
      </CarouselContainer>
    </Section>
  );
};

export default Experience;
