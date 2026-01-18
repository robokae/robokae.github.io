import content from "content/home.json";
import { PageContentLayout } from "components/layout/Layout.styles";
import Reflection from "./reflection/Reflection";
import Experience from "./experience/Experience";
import Hero from "./hero/Hero";
import Overview from "./overview/Overview";
import { getSectionData } from "util/PageDataUtil";

function Home() {
  const { hero, overview, reflection, experience } = getSectionData(content);

  return (
    <PageContentLayout>
      <Hero data={hero} />
      <Overview data={overview} />
      <Reflection data={reflection} />
      <Experience data={experience} />
    </PageContentLayout>
  );
}

export default Home;
