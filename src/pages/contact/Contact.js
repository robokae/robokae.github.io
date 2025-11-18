import { PageContentLayout } from "components/layout/Layout.styles";
import Typography from "components/typography/Typography";
import { Typography as TypographyConstants } from "constants/typography";
import content from "content/contact.json";
import { useState } from "react";
import {
  CardHeading,
  Cards,
  StyledLink,
  SubHeading,
  TranslateRight,
} from "./Contact.styles";
import Icon from "components/icon/Icon";
import { getSectionData } from "util/PageDataUtil";
import { Card } from "@robokae/robokae-ui";
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
      <Section>
        <Section.Heading>{overview.heading}</Section.Heading>
        <Section.Content>
          {overview.text.map((subHeading) => (
            <SubHeading>{subHeading}</SubHeading>
          ))}
          <Cards>
            {details.subHeadings.map((subHeading, index) => (
              <Card>
                <Card.Heading>
                  <CardHeading>
                    <Icon name={details.icons[index]} size="lg" />
                    <Typography tag={TypographyConstants.CARD_TITLE_TAG}>
                      {subHeading}
                    </Typography>
                  </CardHeading>
                </Card.Heading>
                <Card.Content>
                  <p>{details.text[index]}</p>
                  {details.links[index] && (
                    <AnimatedLink
                      label={details.links[index].label}
                      url={details.links[index].url}
                    />
                  )}
                </Card.Content>
              </Card>
            ))}
          </Cards>
        </Section.Content>
      </Section>
    </PageContentLayout>
  );
}

export default Contact;
