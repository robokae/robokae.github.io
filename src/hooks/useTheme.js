import { Style } from "constants/style";
import { darkTheme, lightTheme } from "global/theme";
import { useEffect, useState } from "react";

const THEME = "theme";

const useTheme = () => {
  const [theme, setTheme] = useState(Style.DARK_THEME);
  const [styles, setStyles] = useState(darkTheme);

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

  useEffect(() => {
    const persistedTheme = localStorage.getItem(THEME);
    persistedTheme && setTheme(persistedTheme);
  }, []);

  return { theme, styles, toggleTheme };
};

export default useTheme;
