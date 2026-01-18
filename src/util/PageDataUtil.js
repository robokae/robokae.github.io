import { Heading } from "@robokae/robokae-ui";
import { Typography } from "global/constants";

export const getSectionData = (data) => {
  return data?.sections?.reduce((sections, section) => {
    sections[section.title] = section.content;
    return sections;
  }, {});
};

export const getHeading = (text, align = "left") => (
  <Heading as={Typography.SECTION_TITLE_TAG} align={align}>
    {text}
  </Heading>
);
