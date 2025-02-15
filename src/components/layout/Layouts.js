import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import styled from "styled-components";
import header from "content/layout/header.json";
import Header from "./header/dynamic/Header";
import { useEffect, useState } from "react";
import Footer from "./footer/home/Footer";
import BlogHeader from "./header/blog/BlogHeader";
import AdminHeader from "./header/admin/AdminHeader";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export function HomeLayout({ theme, toggleTheme, dynamicHeaderPages }) {
  const [dynamicHeader, setDynamicHeader] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    dynamicHeaderPages.includes(pathname)
      ? setDynamicHeader(true)
      : setDynamicHeader(false);
    setIsLoading(false);
  }, [pathname]);

  if (isLoading) {
    return null;
  }

  return (
    <Container>
      <ScrollRestoration />
      <Header
        links={header.links}
        theme={theme}
        toggleTheme={toggleTheme}
        dynamicHeader={dynamicHeader}
      />
      <Outlet context={theme} />
      <Footer />
    </Container>
  );
}

export function BlogLayout({ theme, toggleTheme }) {
  return (
    <Container>
      <ScrollRestoration />
      <BlogHeader />
      <Outlet context={theme} />
    </Container>
  );
}

export function AdminLayout({ theme, toggleTheme }) {
  return (
    <Container>
      <ScrollRestoration />
      <AdminHeader theme={theme} toggleTheme={toggleTheme} />
      <Outlet context={theme} />
    </Container>
  );
}
