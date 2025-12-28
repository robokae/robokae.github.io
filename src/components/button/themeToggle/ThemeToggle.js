import { Style } from "constants/style";
import { useThemeContext } from "context/ThemeContext";
import { useState } from "react";
import ToggleButton from "../ToggleButton";
import { Button, Icon } from "@robokae/robokae-ui";
import { useTheme } from "styled-components";

function ThemeToggle({ variant = "slider" }) {
  const { theme: currentTheme, toggleTheme } = useThemeContext();
  const theme = useTheme();
  const isDarkTheme = currentTheme === Style.DARK_THEME;
  const [slide, setSlide] = useState(false);

  const handleToggle = () => {
    toggleTheme();
    setSlide((prev) => !prev);
  };

  return variant === "plain" ? (
    <Button onClick={toggleTheme}>
      <Icon name={isDarkTheme ? "SunFill" : "MoonFill"} />
    </Button>
  ) : (
    <ToggleButton
      slide={slide}
      onClick={handleToggle}
      icon={
        <Icon
          name={isDarkTheme ? "MoonFill" : "SunFill"}
          size="xs"
          color={theme.toggleButton.fontColor}
        />
      }
    />
  );
}

export default ThemeToggle;
