import { Style } from "constants/style";
import { darkTheme, lightTheme } from "global/theme";
import { useState } from "react";

const useTheme = () => {
  const THEME = "theme";
  const fetchSavedTheme = () => {
    return localStorage.getItem(THEME);
  };

  const [theme, setTheme] = useState(fetchSavedTheme() || Style.DARK_THEME);
  const [styles, setStyles] = useState(
    fetchSavedTheme() === Style.LIGHT_THEME ? lightTheme : darkTheme
  );

  const updateThemeValue = (newTheme) => {
    setTheme(newTheme);
    setStyles(newTheme === Style.LIGHT_THEME ? lightTheme : darkTheme);
    localStorage.setItem(THEME, newTheme);
  };

  const toggleTheme = () => {
    theme === Style.LIGHT_THEME
      ? updateThemeValue(Style.DARK_THEME)
      : updateThemeValue(Style.LIGHT_THEME);
  };

  return { theme, styles, toggleTheme };
};

export default useTheme;
