import Container from "./styled/Container";
import NavWrapper, { Logo, NavLinks } from "./styled/NavWrapper";
import Section from "./styled/Section";

const Nav = () => {
  return (
    <Section backgroundColor="#00302E">
      <Container>
        <NavWrapper>
          <Logo>
            <img src="/Logo.svg" alt="logo" />
            <span>Lilies</span>
          </Logo>
          <NavLinks>
            <a href="/">Home</a>
            <a href="/">Login</a>
            <a href="/">Sign Up</a>
          </NavLinks>
        </NavWrapper>
      </Container>
    </Section>
  );
};

export default Nav;
