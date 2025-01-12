import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import header from "content/layout/header.json";
import Footer from "components/footer/Footer";
import Header from "./header/Header";
import { useEffect, useLayoutEffect, useState } from "react";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

function MainLayout({ theme, onChangeTheme, dynamicHeaderPages }) {
  const [dynamicHeader, setDynamicHeader] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { pathname } = useLocation();

  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useLayoutEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

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
      <ScrollToTop />
      <Header
        links={header.links}
        theme={theme}
        onChangeTheme={onChangeTheme}
        dynamicHeader={dynamicHeader}
      />
      <Outlet />
      <Footer />
    </Container>
  );
}

export default MainLayout;
