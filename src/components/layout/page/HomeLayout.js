import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import header from "content/layout/header.json";
import DynamicHeader from "../header/dynamic/DynamicHeader";
import Footer from "../footer/home/Footer";
import { useEffect, useState } from "react";
import { PageContainer } from "../Layout.styles";

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
    <PageContainer>
      <ScrollRestoration />
      <DynamicHeader
        links={header.links}
        theme={theme}
        toggleTheme={toggleTheme}
        dynamicHeader={dynamicHeader}
      />
      <Outlet context={theme} />
      <Footer />
    </PageContainer>
  );
}
