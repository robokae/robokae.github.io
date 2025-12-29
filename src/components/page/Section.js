import { Heading } from "@robokae/robokae-ui";
import { Container, Content } from "./Section.styles";

const Section = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

Section.Heading = ({ align = "center", children }) => (
  <Heading as="h3" align={align}>
    {children}
  </Heading>
);

Section.Content = ({ children }) => <Content>{children}</Content>;

export default Section;
