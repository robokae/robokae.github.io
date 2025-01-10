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
import { Color } from "constants/color";

const Experience = ({ data }) => {
  const { headings, subHeadings, text, images } = data;

  const imageBackgroundColors = [
    Color.LIGHT_PURPLE_2,
    Color.LIGHT_TURQUOISE_2,
    Color.LIGHT_BLUE_2,
  ];

  const cards = () =>
    subHeadings.map((subHeading, index) => (
      <StyledCard key={index}>
        <ImageContainer backgroundColor={imageBackgroundColors[index]}>
          <img
            src={`images/${images[index].name}`}
            alt={images[index].altText}
          ></img>
        </ImageContainer>
        <DetailsContainer>
          <Typography tag={TypographyConstants.H3}>{subHeading}</Typography>
          <p>{text[index]}</p>
        </DetailsContainer>
      </StyledCard>
    ));

  return (
    <Section>
      <Content>
        {headings.map((line, index) => (
          <Typography
            textAlign="center"
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
