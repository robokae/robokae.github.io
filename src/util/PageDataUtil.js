import Typography from "components/typography/Typography";
import { Typography as TypographyConstants } from "constants/typography";

export const getSectionData = (data) => {
  return data?.sections?.reduce((sections, section) => {
    sections[section.title] = section.content;
    return sections;
  }, {});
};

export const getHeading = (text, align = "left") => (
  <Typography textAlign={align} tag={TypographyConstants.SECTION_TITLE_TAG}>
    {text}
  </Typography>
);
