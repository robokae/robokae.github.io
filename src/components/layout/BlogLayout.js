import { Outlet, ScrollRestoration } from "react-router-dom";
import { PageContainer } from "../Layout.styles";
import BlogHeader from "../../header/blog/BlogHeader";

function BlogLayout({ theme, toggleTheme }) {
  return (
    <PageContainer>
      <ScrollRestoration />
      <BlogHeader />
      <Outlet context={theme} />
    </PageContainer>
  );
}

export default BlogLayout;
