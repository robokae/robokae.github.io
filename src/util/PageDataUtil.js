export const getSectionData = (data) => {
  return data?.sections?.reduce((sections, section) => {
    sections[section.title] = section.content;
    return sections;
  }, {});
};
