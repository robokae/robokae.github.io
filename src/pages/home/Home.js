import content from "content/home.json";
import { PageContentLayout } from "components/layout/Layout.styles";
import Reflection from "./sections/reflection/Reflection";
import Experience from "./sections/experience/Experience";
import Hero from "./sections/hero/Hero";
import Overview from "./sections/overview/Overview";
import { useOutletContext } from "react-router-dom";

const getSectionData = (sections, sectionName) => {
  return sections.find((section) => section.title === sectionName)?.content;
};

function Home() {
  const sections = content.sections;
  const heroSectionData = getSectionData(sections, "hero");
  const overviewSectionData = getSectionData(sections, "overview");
  const reflectionSectionData = getSectionData(sections, "reflection");
  const experienceSectionData = getSectionData(sections, "experience");
  const theme = useOutletContext();

  return (
    <PageContentLayout>
      <Hero data={heroSectionData} theme={theme} />
      <Overview data={overviewSectionData} />
      <Reflection data={reflectionSectionData} />
      <Experience data={experienceSectionData} />
    </PageContentLayout>
  );
}

export default Home;
