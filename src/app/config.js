import { HomeLayout } from "components/layout/HomeLayout";
import About from "pages/about/About";
import Contact from "pages/contact/Contact";
import Error from "pages/Error";
import Home from "pages/home/Home";
import {
  createHashRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const router = createHashRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<Error />} />
      </Route>
    </>
  )
);

export const appConfig = {
  router,
};
