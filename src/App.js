import { useEffect } from "react";
import {
  Route,
  createRoutesFromElements,
  RouterProvider,
  createHashRouter,
} from "react-router-dom";
import WebFont from "webfontloader";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global/globalStyles";
import { lightTheme, darkTheme } from "./global/theme";

import Home from "./pages/home/Home";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import MainLayout from "./components/layout/MainLayout";
import useTheme from "./hooks/useTheme";
import Error from "./pages/Error";
import { Typography } from "constants/typography";
import Contact from "pages/contact/Contact";
import About from "pages/about/About";
import { Style } from "constants/style";

library.add(fab, fas);

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: Typography.FONT_FAMILIES,
      },
    });
  }, []);

  const [theme, toggleTheme] = useTheme();

  const dynamicHeaderPages = ["/"];

  const router = createHashRouter(
    createRoutesFromElements(
      <>
        <Route
          path="/"
          element={
            <MainLayout
              theme={theme}
              toggleTheme={toggleTheme}
              dynamicHeaderPages={dynamicHeaderPages}
            />
          }
        >
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<Error />} />
        </Route>
      </>
    )
  );

  return (
    <ThemeProvider theme={theme === Style.LIGHT_THEME ? lightTheme : darkTheme}>
      <RouterProvider router={router} />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
