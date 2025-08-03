import Card from "components/card/Card";
import {
  ContentLayout,
  PageContentLayout,
  SectionLayout,
} from "components/layout/Layout.styles";
import Typography from "components/typography/Typography";
import { Typography as TypographyConstants } from "constants/typography";
import content from "content/contact.json";
import { useState } from "react";
import {
  CardHeader,
  Cards,
  StyledLink,
  SubHeading,
  TranslateRight,
} from "./Contact.styles";
import Icon from "components/icon/Icon";
import { getSectionData } from "util/PageDataUtil";

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

const OverviewSection = ({ content }) => {
  const { headings, subHeadings } = content;

  return (
    <>
      {headings.map((heading) => (
        <Typography tag={TypographyConstants.SECTION_TITLE_TAG} align="center">
          {heading}
        </Typography>
      ))}
      {subHeadings.map((subHeading) => (
        <SubHeading>{subHeading}</SubHeading>
      ))}
    </>
  );
};

const DetailsSection = ({ content }) => {
  const { subHeadings, text, icons, links } = content;

  return (
    <Cards>
      {subHeadings.map((subHeading, index) => (
        <Card>
          <CardHeader>
            <Icon name={icons[index]} size="lg" />
            <Typography tag={TypographyConstants.CARD_TITLE_TAG}>
              {subHeading}
            </Typography>
          </CardHeader>
          <p>{text[index]}</p>
          {links[index] && (
            <AnimatedLink label={links[index].label} url={links[index].url} />
          )}
        </Card>
      ))}
    </Cards>
  );
};

function Contact() {
  const { overview, details } = getSectionData(content);

  return (
    <PageContentLayout>
      <SectionLayout>
        <ContentLayout>
          <OverviewSection content={overview} />
          <DetailsSection content={details} />
        </ContentLayout>
      </SectionLayout>
    </PageContentLayout>
  );
}

export default Contact;
