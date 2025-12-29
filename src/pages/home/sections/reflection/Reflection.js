import styled from "styled-components";
import { Breakpoint } from "constants/layout";
import { Text } from "@robokae/robokae-ui";
import Section from "components/page/Section";

const StyledSection = styled(Section)`
  background: ${({ theme }) => theme.pages.home.reflection.background};
  padding: 10rem 0;
  gap: 3.5rem;

  @media ${Breakpoint.TABLET} {
    padding: 6rem 0;
    gap: 3rem;
  }
`;

const Image = styled.img`
  width: 30%;
  max-width: 500px;

  @media ${Breakpoint.LAPTOP} {
    width: 50%;
  }

  @media ${Breakpoint.MOBILE_LG} {
    width: 60%;
  }
`;

const Description = styled.div`
  width: 80%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  font-size: larger;

  @media ${Breakpoint.MOBILE_LG} {
    width: 90%;
    font-size: inherit;
  }
`;

const Reflection = ({ data }) => {
  return (
    <StyledSection>
      <Image
        src={`images/${data.images[0].name}`}
        alt={data.images[0].altText}
      />
      <>
        <Section.Heading>{data.heading}</Section.Heading>
        <Section.Content>
          <Description>
            {data.text.map((line, index) => (
              <Text key={index}>{line}</Text>
            ))}
          </Description>
        </Section.Content>
      </>
    </StyledSection>
  );
};

export default Reflection;
