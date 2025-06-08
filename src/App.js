import { RouterProvider } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global/globalStyles";

import useTheme from "./hooks/useTheme";
import { useWebFonts } from "hooks/useWebFonts";
import { ThemeContext } from "context/ThemeContext";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { appConfig } from "app/config";

function App() {
  const { router } = appConfig;
  library.add(fas, fab);
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
