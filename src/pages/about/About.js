import content from "content/about.json";
import { PageContentLayout } from "components/layout/Layout.styles";
import { getSectionData } from "util/PageDataUtil";
import React from "react";
import { StyledSection, TextGroup } from "./About.styles";
import Section from "components/page/Section";

function About() {
  const { overview } = getSectionData(content);

  return (
    <PageContentLayout>
      <StyledSection>
        <Section.Heading align="left">{overview.heading}</Section.Heading>
        <Section.Content>
          <TextGroup>
            {overview.text.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </TextGroup>
        </Section.Content>
      </StyledSection>
    </PageContentLayout>
  );
}

export default About;
