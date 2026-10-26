import { DotSeparator } from "components/typography/DotSeparator";
import {
  Caption,
  Container,
  Content,
  DetailsContainer,
  LinkContainer,
  Logo,
  StyledLink,
} from "./Footer.styles";
import footer from "content/layout/footer.json";
import { useThemeContext } from "context/ThemeContext";
import { getYear } from "util/DateUtil";

function Footer() {
  const currentYear = getYear();
  const { links } = footer.sections.find(
    (section) => section.title === "navLinks",
  )?.content;
  const caption = footer.sections.find((section) => section.title === "caption")
    ?.content.text[0];
  const { theme } = useThemeContext();
  const logoSrc = `/logo-${theme}.svg`;

  return (
    <Container>
      <Content>
        <Logo src={logoSrc} alt="Website logo" />
        <DetailsContainer>
          <LinkContainer>
            {links &&
              links.map((link, index) => (
                <StyledLink key={index} to={link.url} underline>
                  {link.label}
                </StyledLink>
              ))}
          </LinkContainer>
          <Caption>
            <span>{caption}</span>
            <DotSeparator />
            <span>{currentYear}</span>
          </Caption>
        </DetailsContainer>
      </Content>
    </Container>
  );
}

export default Footer;
