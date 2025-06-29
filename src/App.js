import { RouterProvider } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global/globalStyles";

import useTheme from "./hooks/useTheme";
import { useWebFonts } from "hooks/useWebFonts";
import { ThemeContext } from "context/ThemeContext";
import { appConfig } from "app/config";

function App() {
  const { router } = appConfig;
  const { theme, styles, toggleTheme } = useTheme();
  useWebFonts();

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={styles}>
        <RouterProvider router={router} />
        <GlobalStyles />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
