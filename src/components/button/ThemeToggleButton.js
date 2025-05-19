import ToggleButton from "./ToggleButton";
import { Style } from "constants/style";
import { DarkMode, LightMode } from "@mui/icons-material";
import { useTheme } from "styled-components";
import { useThemeContext } from "context/ThemeContext";

function ThemeToggleButton() {
  const styles = useTheme();
  const { theme: currentTheme, toggleTheme } = useThemeContext();
  const {
    button: {
      themeToggle: { iconColor, backgroundColor, foregroundColor: sliderColor },
    },
  } = styles;

  const getIcon = () => {
    const iconStyles = {
      fontSize: "0.8rem",
      color: iconColor,
    };

    return currentTheme === Style.DARK_THEME ? (
      <DarkMode sx={iconStyles} />
    ) : (
      <LightMode sx={iconStyles} />
    );
  };

  return (
    <ToggleButton
      onClick={toggleTheme}
      icon={getIcon()}
      backgroundColor={backgroundColor}
      sliderColor={sliderColor}
    />
  );
}

export default ThemeToggleButton;
