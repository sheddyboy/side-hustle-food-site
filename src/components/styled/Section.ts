import styled from "styled-components";

interface SectionProps {
  backgroundColor?: string;
}

const Section = styled.div<SectionProps>`
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export default Section;
