import { Style } from "constants/style";
import { useThemeContext } from "context/ThemeContext";
import Stack from "components/Stack";
import { useState } from "react";
import ToggleButton from "../ToggleButton";
import { Button, Icon } from "@robokae/robokae-ui";

function ThemeToggle({ variant = "slider" }) {
  const { theme: currentTheme, toggleTheme } = useThemeContext();
  const isDarkTheme = currentTheme === Style.DARK_THEME;
  const [slide, setSlide] = useState(false);

  const ThemeIcon = (size = "sm") => (
    <Icon name={isDarkTheme ? "SunFill" : "MoonFill"} size={size} />
  );

  const handleToggle = () => {
    toggleTheme();
    setSlide((prev) => !prev);
  };

  return variant === "plain" ? (
    <Button onClick={toggleTheme}>
      <Stack gap="0.5rem">
        <ThemeIcon />
      </Stack>
    </Button>
  ) : (
    <ToggleButton
      slide={slide}
      onClick={handleToggle}
      icon={<ThemeIcon size="xs" />}
    />
  );
}

export default ThemeToggle;
