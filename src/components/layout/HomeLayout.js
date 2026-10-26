import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import data from "content/layout/header.json";
import Footer from "../footer/Footer";
import { useEffect, useState } from "react";
import { PageContainer } from "./Layout.styles";
import Header from "components/header/Header";
import { useThemeContext } from "context/ThemeContext";

export function HomeLayout() {
  const [transitionBg, setTransitionBg] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { pathname } = useLocation();
  const { theme } = useThemeContext();
  const logoSrc = data.logo?.[theme];

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
      <Header>
        {transitionBg && <Header.TransparentBackground />}
        <Header.Content>
          <Header.Logo src={logoSrc} alt={data.logo.alt} url={data.logo.url} />
          <Header.Nav links={data.links} />
        </Header.Content>
      </Header>
      <Outlet />
      <Footer />
    </PageContainer>
  );
}
