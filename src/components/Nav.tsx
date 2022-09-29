import Container from "./styled/Container";
import NavWrapper, { Logo, NavLinks } from "./styled/NavWrapper";
import Section from "./styled/Section";
import { Link } from "react-router-dom";

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
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Sign Up</Link>
          </NavLinks>
        </NavWrapper>
      </Container>
    </Section>
  );
};

export default Nav;
