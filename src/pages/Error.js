import error from "content/error.json";
import {
  PageContentLayout,
  SectionLayout,
} from "components/layout/Layout.styles";
import React from "react";
import { getHeading } from "util/PageDataUtil";
import ButtonLink from "components/link/buttonLink/ButtonLink";

const { content } = error;

function Error() {
  return (
    <PageContentLayout>
      <SectionLayout>
        {getHeading(content.heading, "center")}
        <p>{content.text}</p>
        <ButtonLink variant="primary" to={content.ctaUrl}>
          {content.ctaText}
        </ButtonLink>
      </SectionLayout>
    </PageContentLayout>
  );
}

export default Error;
