import { Style } from "constants/style";
import { useEffect, useState } from "react";

const THEME = "theme";

const useTheme = () => {
  const [theme, setTheme] = useState(Style.DARK_THEME);

  const updateThemeValue = (newTheme) => {
    setTheme(newTheme);
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

  return [theme, toggleTheme];
};

export default useTheme;
