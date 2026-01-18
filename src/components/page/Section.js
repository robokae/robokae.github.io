import { Heading } from "@robokae/robokae-ui";
import { Container, Content } from "./Section.styles";

const Section = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

Section.Heading = ({ align = "center", children, ...props }) => (
  <Heading align={align} as="h2" {...props}>
    {children}
  </Heading>
);

Section.Content = ({ children, ...props }) => (
  <Content {...props}>{children}</Content>
);

export default Section;
