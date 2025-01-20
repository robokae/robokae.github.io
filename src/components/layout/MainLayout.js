import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import styled from "styled-components";
import header from "content/layout/header.json";
import Footer from "components/footer/Footer";
import Header from "./header/Header";
import { useEffect, useState } from "react";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

function MainLayout({ theme, toggleTheme, dynamicHeaderPages }) {
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

export default MainLayout;
