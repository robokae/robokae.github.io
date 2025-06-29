import Icon from "components/icon/Icon";
import Typography from "components/typography/Typography";
import { Style } from "constants/style";
import { useThemeContext } from "context/ThemeContext";
import Button from "./Button";
import Stack from "components/layout/Stack";

function ThemeToggle({ label = false }) {
  const { theme: currentTheme, toggleTheme } = useThemeContext();
  const isDarkTheme = currentTheme === Style.DARK_THEME;

  return (
    <Button variant={label ? "outlined" : "plain"} onClick={toggleTheme}>
      <Stack gap="0.5rem">
        <Icon name={isDarkTheme ? "MoonFill" : "SunFill"} />
        {label && (
          <Typography fontSize="1rem">
            {isDarkTheme ? "Dark" : "Light"}
          </Typography>
        )}
      </Stack>
    </Button>
  );
}

export default ThemeToggle;
