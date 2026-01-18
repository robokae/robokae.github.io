import error from "content/error.json";
import { PageContentLayout } from "components/layout/Layout.styles";
import Section from "components/page/Section";
import LinkButton from "components/link/linkButton/LinkButton";
import styled from "styled-components";

const { content } = error;

function Error() {
  return (
    <PageContentLayout>
      <Section>
        <Section.Heading>{content.heading}</Section.Heading>
        <Section.Content>
          <p>{content.text}</p>
          <LinkButton variant="outline" rounded to={content.ctaUrl}>
            {content.ctaText}
          </LinkButton>
        </Section.Content>
      </Section>
    </PageContentLayout>
  );
}

export default Error;
