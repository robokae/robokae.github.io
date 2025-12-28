import { Button, Icon } from "@robokae/robokae-ui";
import Link from "components/link/Link";
import { Container } from "./DesktopNav.styles";
import React from "react";
import ThemeToggle from "components/button/themeToggle/ThemeToggle";

function DesktopNav({ data }) {
  return (
    <Container>
      {data.map((link, index) => (
        <Button key={index}>
          <Link to={link.url} underline={false}>
            {link.icon ? <Icon name={link.icon} /> : link.label}
          </Link>
        </Button>
      ))}
      <ThemeToggle variant="plain" />
    </Container>
  );
}

export default DesktopNav;
