import Icon from "components/icon/Icon";
import { Style } from "constants/style";
import { useThemeContext } from "context/ThemeContext";
import Button from "../Button";
import Stack from "components/Stack";
import Tooltip from "components/tooltip/Tooltip";
import { useState } from "react";
import ToggleButton from "../ToggleButton";

function ThemeToggle({ variant = "slider" }) {
  const { theme: currentTheme, toggleTheme } = useThemeContext();
  const isDarkTheme = currentTheme === Style.DARK_THEME;
  const [isHovered, setIsHovered] = useState();
  const [slide, setSlide] = useState(false);

  const getIcon = (size = "sm") => (
    <Icon name={isDarkTheme ? "SunFill" : "MoonFill"} size={size} />
  );

  const handleToggle = () => {
    toggleTheme();
    setSlide((prev) => !prev);
  };

  const PlainButton = () => (
    <Stack
      direction="column"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Button onClick={toggleTheme}>
        <Stack gap="0.5rem">{getIcon()}</Stack>
      </Button>
      {isHovered && (
        <Tooltip>{`${isDarkTheme ? "Light" : "Dark"} theme`}</Tooltip>
      )}
    </Stack>
  );

  return variant === "plain" ? (
    <PlainButton />
  ) : (
    <ToggleButton slide={slide} onClick={handleToggle} icon={getIcon("xs")} />
  );
}

export default ThemeToggle;
