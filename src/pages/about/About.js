import content from "content/about.json";
import {
  ContentLayout,
  PageContentLayout,
  SectionLayout,
} from "components/layout/Layout.styles";
import { getHeading, getSectionData } from "util/PageDataUtil";
import React from "react";
import Icon from "components/icon/Icon";
import {
  CardContent,
  CardsContainer,
  StyledCard,
  StyledText,
  TextGroup,
} from "./About.styles";

function About() {
  const { overview, interests, cards } = getSectionData(content);

  return (
    <PageContentLayout>
      <SectionLayout>
        <ContentLayout>
          {overview.headings.map((heading, index) => (
            <React.Fragment key={index}>{getHeading(heading)}</React.Fragment>
          ))}
          <TextGroup>
            {overview.text.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </TextGroup>
        </ContentLayout>
      </SectionLayout>
      <SectionLayout>
        <ContentLayout>
          {interests.headings.map((heading, index) => (
            <React.Fragment key={index}>{getHeading(heading)}</React.Fragment>
          ))}
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
        </ContentLayout>
      </SectionLayout>
    </PageContentLayout>
  );
}

export default About;
