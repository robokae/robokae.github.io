import { ContentLayout, SectionLayout } from "components/layout/Layout.styles";
import Typography from "components/typography/Typography";
import { Color } from "constants/color";
import { Layout } from "constants/layout";
import {
  Grid,
  IconContainer,
  ResponsiveCard,
  ResponsiveIcon,
  ResponsiveSectionLayout,
} from "./Overview.styles";

const Overview = ({ data }) => {
  const { text, icons } = data;
  const ICON_COLOR = Color.NAVY_BLUE;
  const ICON_BACKGROUND_COLORS = [
    Color.LIGHT_GREEN,
    Color.LIGHT_BLUE,
    Color.LIGHT_PURPLE,
    Color.TURQUOISE,
  ];

  return (
    <ResponsiveSectionLayout>
      <ContentLayout>
        <Grid gap={Layout.MEDIUM_GAP} size={text.length}>
          {text.map((cardText, index) => {
            return (
              <ResponsiveCard key={index}>
                <IconContainer backgroundColor={ICON_BACKGROUND_COLORS[index]}>
                  <ResponsiveIcon
                    icon={icons[index]}
                    backgroundColor={ICON_BACKGROUND_COLORS[index]}
                    color={ICON_COLOR}
                    fixedWidth
                  />
                </IconContainer>
                <>
                  <Typography>{cardText}</Typography>
                </>
              </ResponsiveCard>
            );
          })}
        </Grid>
      </ContentLayout>
    </ResponsiveSectionLayout>
  );
};

export default Overview;
