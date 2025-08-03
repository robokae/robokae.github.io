import error from "content/error.json";
import { LinkButton } from "components/Link";
import {
  PageContentLayout,
  SectionLayout,
} from "components/layout/Layout.styles";
import React from "react";
import { getHeading } from "util/PageDataUtil";

const { content } = error;

function Error() {
  return (
    <PageContentLayout>
      <SectionLayout>
        {getHeading(content.heading, "center")}
        <p>{content.text}</p>
        <LinkButton to={content.ctaUrl}>{content.ctaText}</LinkButton>
      </SectionLayout>
    </PageContentLayout>
  );
}

export default Error;
