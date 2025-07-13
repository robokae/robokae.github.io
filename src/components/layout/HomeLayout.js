import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import header from "content/layout/header.json";
import Footer from "../footer/Footer";
import { useEffect, useState } from "react";
import { PageContainer } from "./Layout.styles";
import Header from "components/header/Header";

export function HomeLayout() {
  const [transitionBg, setTransitionBg] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    setTransitionBg(["/"].includes(pathname));
    setIsLoading(false);
  }, [pathname]);

  if (isLoading) {
    return null;
  }

  return (
    <PageContainer>
      <ScrollRestoration />
      <Header data={header.links} transitionBgOnScroll={transitionBg} />
      <Outlet />
      <Footer />
    </PageContainer>
  );
}
