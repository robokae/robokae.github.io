import { PageContentLayout } from "components/layout/Layout.styles";
import { Typography } from "global/constants";
import content from "content/contact.json";
import { useState } from "react";
import {
  CardContent,
  CardHeading,
  Cards,
  StyledCard,
  StyledLink,
  StyledSection,
  TranslateRight,
} from "./Contact.styles";
import Icon from "components/icon/Icon";
import { getSectionData } from "util/PageDataUtil";
import { Card, Heading } from "@robokae/robokae-ui";
import Section from "components/page/Section";

const AnimatedLink = ({ label, url }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <StyledLink
      to={url}
      onMouseEnter={() => setIsHovered((prev) => !prev)}
      onMouseLeave={() => setIsHovered((prev) => !prev)}
      underline={false}
    >
      {label}
      <TranslateRight isHovered={isHovered}>
        <Icon name="ArrowRight" />
      </TranslateRight>
    </StyledLink>
  );
};

function Contact() {
  const { overview, details } = getSectionData(content);

  return (
    <PageContentLayout>
      <StyledSection>
        <Section.Heading>{overview.heading}</Section.Heading>
        {overview.text.map((subHeading) => (
          <Section.Subheading>{subHeading}</Section.Subheading>
        ))}
        <Section.Content>
          <Cards>
            {details.subHeadings.map((subHeading, index) => (
              <StyledCard>
                <Card.Heading>
                  <CardHeading>
                    <Icon name={details.icons[index]} size="xl" />
                    <Heading as={Typography.CARD_TITLE_TAG}>
                      {subHeading}
                    </Heading>
                  </CardHeading>
                </Card.Heading>
                <Card.Content>
                  <CardContent>
                    <p>{details.text[index]}</p>
                    {details.links[index] && (
                      <AnimatedLink
                        label={details.links[index].label}
                        url={details.links[index].url}
                      />
                    )}
                  </CardContent>
                </Card.Content>
              </StyledCard>
            ))}
          </Cards>
        </Section.Content>
      </StyledSection>
    </PageContentLayout>
  );
}

export default Contact;
