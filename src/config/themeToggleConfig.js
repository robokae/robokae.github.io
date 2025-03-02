import { DarkMode, LightMode } from "@mui/icons-material";

const fontSize = "0.8rem";

const lightThemeIcon = (
  <LightMode sx={{ fontSize: fontSize, color: "#485964" }} />
);

const darkThemeIcon = (
  <DarkMode sx={{ fontSize: fontSize, color: "#47555F" }} />
);

export const themeToggleConfig = {
  light: {
    backgroundColor: "#29353D",
    sliderColor: "#F1F2F3",
    icon: lightThemeIcon,
  },
  dark: {
    backgroundColor: "#242D34",
    sliderColor: "#47555F",
    icon: darkThemeIcon,
  },
};
