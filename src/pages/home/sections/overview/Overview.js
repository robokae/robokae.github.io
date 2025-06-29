import { ContentLayout } from "components/layout/Layout.styles";
import Typography from "components/typography/Typography";
import { Layout } from "constants/layout";
import {
  Grid,
  IconContainer,
  ResponsiveCard,
  ResponsiveSectionLayout,
} from "./Overview.styles";
import useTheme from "hooks/useTheme";
import Icon from "components/icon/Icon";

const Overview = ({ data }) => {
  const { text, icons } = data;
  const {
    styles: {
      pages: {
        home: { overview },
      },
    },
  } = useTheme();
  const colors = Object.values(overview);

  return (
    <ResponsiveSectionLayout>
      <ContentLayout>
        <Grid gap={Layout.MEDIUM_GAP} size={text.length}>
          {text.map((cardText, index) => {
            return (
              <ResponsiveCard key={index}>
                <IconContainer backgroundColor={colors[index].backgroundColor}>
                  <Icon
                    name={icons[index]}
                    color={colors[index].foregroundColor}
                    size="lg"
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
