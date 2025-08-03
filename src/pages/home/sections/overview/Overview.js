import { ContentLayout, SectionLayout } from "components/layout/Layout.styles";
import { Layout } from "constants/layout";
import {
  CardContent,
  Grid,
  IconContainer,
  TextContainer,
} from "./Overview.styles";
import Icon from "components/icon/Icon";
import { getHeading } from "util/PageDataUtil";
import Card from "components/card/Card";

const Overview = ({ data }) => {
  const { text, headings, subHeadings, icons } = data;

  return (
    <SectionLayout>
      <ContentLayout>
        {headings.map((heading) => getHeading(heading, "center"))}
        <Grid gap={Layout.MEDIUM_GAP} size={text.length}>
          {text.map((cardText, index) => {
            return (
              <Card key={index}>
                <CardContent>
                  <IconContainer index={index}>
                    <Icon name={icons[index]} index={index} size="xl" />
                  </IconContainer>
                  <TextContainer>
                    <h5>{subHeadings[index]}</h5>
                    <p>{cardText}</p>
                  </TextContainer>
                </CardContent>
              </Card>
            );
          })}
        </Grid>
      </ContentLayout>
    </SectionLayout>
  );
};

export default Overview;
