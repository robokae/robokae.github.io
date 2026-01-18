import { useLayoutEffect, useRef, useState } from "react";
import {
  Container,
  Content,
  Heading,
  HeadingContainer,
  Image,
  ImageContainer,
  SubHeading,
} from "./Hero.styles";

function Hero({ data, theme }) {
  const [multiLineHeading, setMultiLineHeading] = useState(false);
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const observeTarget = sectionRef.current;

    if (!observeTarget) {
      return;
    }

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const width = entry.borderBoxSize[0].inlineSize;
        setMultiLineHeading(width <= 600 ? true : false);
      }
    });

    resizeObserver.observe(observeTarget);

    return () => resizeObserver.unobserve(observeTarget);
  }, []);

  const headings = multiLineHeading ? data.headings : [data.headings.join(" ")];

  const subHeadings = multiLineHeading
    ? data.subHeadings
    : [data.subHeadings.join(" ")];

  return (
    <Container ref={sectionRef} theme={theme}>
      <Content>
        <HeadingContainer>
          <Heading>
            {headings.map((line, index) => (
              <h1 key={index}>{line}</h1>
            ))}
          </Heading>
          <SubHeading theme={theme}>
            {subHeadings.map((line, index) => (
              <h4 key={index}>{line}</h4>
            ))}
          </SubHeading>
        </HeadingContainer>
        <ImageContainer>
          <Image
            src={`images/${data.images[0].name}`}
            alt={data.images[0].altText}
          />
        </ImageContainer>
      </Content>
    </Container>
  );
}

export default Hero;
