import styled from "styled-components";
import { ContentLayout, SectionLayout } from "components/layout/Layout.styles";
import Typography from "components/typography/Typography";
import { Breakpoint } from "constants/layout";
import { Typography as TypographyConstants } from "constants/typography";

const Section = styled(SectionLayout)`
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: center;
`;

const Content = styled(ContentLayout)`
  position: relative;
  height: 100%;
  display: flex;

  @media ${Breakpoint.LAPTOP} {
    display: flex;
    flex-direction: column;
  }
`;

const Description = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
`;

const ResponsiveText = styled.p`
  width: 85%;
  font-size: larger;
  font-weight: normal;
  text-align: center;

  @media ${Breakpoint.MOBILE_LG} {
    width: 95%;
  }
`;

const Reflection = ({ data }) => {
  return (
    <Section>
      <Content>
        <div>
          {data.headings.map((line, index) => (
            <Typography
              tag={TypographyConstants.SECTION_TITLE_TAG}
              key={index}
              align="center"
            >
              {line}
            </Typography>
          ))}
        </div>
        <Description>
          {data.text.map((line, index) => (
            <ResponsiveText key={index}>{line}</ResponsiveText>
          ))}
        </Description>
      </Content>
    </Section>
  );
};

export default Reflection;
