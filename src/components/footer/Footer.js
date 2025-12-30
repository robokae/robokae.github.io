import {
  Caption,
  Container,
  Content,
  LinkContainer,
  StyledLink,
} from "./Footer.styles";
import footer from "content/layout/footer.json";
import { getYear } from "util/DateUtil";

function Footer() {
  const currentYear = getYear();
  const { links } = footer.sections.find(
    (section) => section.title === "navLinks"
  )?.content;
  const caption = footer.sections.find((section) => section.title === "caption")
    ?.content.text[0];

  return (
    <Container>
      <Content>
        <LinkContainer>
          {links &&
            links.map((link, index) => (
              <StyledLink key={index} to={link.url} underline>
                {link.label}
              </StyledLink>
            ))}
        </LinkContainer>
        <Caption>{caption && <p>{`${caption} ${currentYear}`}</p>}</Caption>
      </Content>
    </Container>
  );
}

export default Footer;
