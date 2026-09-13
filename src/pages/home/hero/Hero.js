import { useLayoutEffect, useRef, useState } from "react";
import {
  Container,
  Content,
  HeadingContainer,
  Image,
  SubHeading,
} from "./Hero.styles";
import { Heading } from "@robokae/robokae-ui";

function Hero({ data }) {
  const { heading, subheading, image } = data;
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

  const headings = multiLineHeading
    ? heading.split("\n")
    : [heading.replace("\\n", " ")];

  const subHeadings = multiLineHeading
    ? subheading.split("\n")
    : [subheading.replace("\\n", " ")];

  return (
    <Container ref={sectionRef}>
      <Content>
        <HeadingContainer>
          <Heading as="h1">
            {headings.map((line, index) => (
              <h1 key={index}>{line}</h1>
            ))}
          </Heading>
          <div>
            {subHeadings.map((line, index) => (
              <SubHeading key={index}>{line}</SubHeading>
            ))}
          </div>
        </HeadingContainer>
        <Image src={`images/${image.name}`} alt={image.altText} />
      </Content>
    </Container>
  );
}

export default Hero;
