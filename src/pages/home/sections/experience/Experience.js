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
  Section,
  StyledCard,
} from "./Experience.styles";
import useTheme from "hooks/useTheme";

const Experience = ({ data }) => {
  const { headings, subHeadings, text, images } = data;
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
      <Content>
        {headings.map((line, index) => (
          <Typography
            align="center"
            key={index}
            tag={TypographyConstants.SECTION_TITLE_TAG}
          >
            {line}
          </Typography>
        ))}
        <CardLayout size={subHeadings.length}>{cards()}</CardLayout>
        <CarouselContainer>
          <Carousel arrows>{cards()}</Carousel>
        </CarouselContainer>
      </Content>
    </Section>
  );
};

export default Experience;
