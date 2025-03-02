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
import Blog from "./pages/blog/Blog";
import Post from "./pages/blog/Post";
import Portfolio from "./pages/portfolio/Portfolio";
import Resume from "./pages/resume/Resume";
import Login from "./pages/Login";

import Admin from "./pages/admin/Admin";
import CreatePost from "./pages/admin/CreatePost";
import EditPost from "./pages/admin/EditPost";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { HomeLayout } from "./components/layout/page/HomeLayout";
import useTheme from "./hooks/useTheme";
import Error from "./pages/Error";
import { Typography } from "constants/typography";
import Contact from "pages/contact/Contact";
import About from "pages/about/About";
import { Style } from "constants/style";
import AdminLayout from "components/layout/page/AdminLayout";

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
          path="/admin"
          element={<AdminLayout theme={theme} toggleTheme={toggleTheme} />}
        >
          <Route index element={<Admin />} />
          <Route path="createPost" element={<CreatePost />} />
          <Route path="editPost" element={<EditPost />} />
        </Route>
        <Route
          path="/"
          element={
            <HomeLayout
              theme={theme}
              toggleTheme={toggleTheme}
              dynamicHeaderPages={dynamicHeaderPages}
            />
          }
        >
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/post/:postTitle" element={<Post />} />
          <Route path="/login" element={<Login />} />
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
