import AdminLayout from "components/layout/AdminLayout";
import { HomeLayout } from "components/layout/HomeLayout";
import About from "pages/about/About";
import Admin from "pages/admin/Admin";
import CreatePost from "pages/admin/CreatePost";
import EditPost from "pages/admin/EditPost";
import Blog from "pages/blog/Blog";
import Post from "pages/blog/Post";
import Contact from "pages/contact/Contact";
import Error from "pages/Error";
import Home from "pages/home/Home";
import Login from "pages/Login";
import Portfolio from "pages/portfolio/Portfolio";
import Resume from "pages/resume/Resume";
import {
  createHashRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const router = createHashRouter(
  createRoutesFromElements(
    <>
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Admin />} />
        <Route path="createPost" element={<CreatePost />} />
        <Route path="editPost" element={<EditPost />} />
      </Route>
      <Route path="/" element={<HomeLayout />}>
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

export const appConfig = {
  router,
};
