import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import header from "content/layout/header.json";
import Header from "../header/home/Header";
import Footer from "../footer/home/Footer";
import { useEffect, useState } from "react";
import { PageContainer } from "../Layout.styles";

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
