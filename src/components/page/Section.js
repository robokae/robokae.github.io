import { Heading } from "@robokae/robokae-ui";
import { Container, Content } from "./Section.styles";
import styled from "styled-components";
import { Breakpoint } from "global/constants";

const Subheading = styled.p`
  width: 60%;
  text-align: ${({ align }) => align};
  font-size: larger;

  @media ${Breakpoint.LAPTOP_LG} {
    width: 75%;
  }

  @media ${Breakpoint.MOBILE_LG} {
    width: 100%;
    font-size: 1rem;
  }
`;

const Section = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

Section.Heading = ({ align = "center", children, ...props }) => (
  <Heading align={align} as="h2" {...props}>
    {children}
  </Heading>
);

Section.Subheading = ({ align = "center", children }) => (
  <Subheading align={align}>{children}</Subheading>
);

Section.Content = ({ children, ...props }) => (
  <Content {...props}>{children}</Content>
);

export default Section;
