import styled from "styled-components";

interface WrapperProps {
  display?: string;
  justify?: string;
  align?: string;
}

const Wrapper = styled.div<WrapperProps>`
  display: ${({ display }) => display};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
`;

export default Wrapper;
