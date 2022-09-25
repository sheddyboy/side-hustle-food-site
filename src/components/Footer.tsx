import React from "react";
import Container from "./styled/Container";
import FooterWrapper, {
  Copyright,
  CopyrightLinks,
  CopyrightText,
  Link,
  Links,
  LinksWrapper,
  Title,
} from "./styled/FooterWrapper";
import Section from "./styled/Section";

const Footer = () => {
  return (
    <Section backgroundColor="#0B0D17">
      <Container>
        <FooterWrapper>
          <Links>
            <LinksWrapper>
              <Title>Company</Title>
              <Link href="/">About Us</Link>
              <Link href="/">Careers</Link>
              <Link href="/">Contact Us</Link>
            </LinksWrapper>
            <LinksWrapper>
              <Title>Support</Title>
              <Link href="/">Help Center</Link>
              <Link href="/">Safety Center</Link>
            </LinksWrapper>
            <LinksWrapper>
              <Title>Legal</Title>
              <Link href="/">Cookies Policy</Link>
              <Link href="/">Privacy Policy</Link>
              <Link href="/">Terms of Service</Link>
              <Link href="/">Dispute resolution</Link>
            </LinksWrapper>
            <LinksWrapper>
              <Title>Install App</Title>
              <Link href="/">
                <img src="/Play Store.svg" alt="" />
              </Link>
              <Link href="/">
                <img src="/Apple Store.svg" alt="" />
              </Link>
            </LinksWrapper>
          </Links>
        </FooterWrapper>
      </Container>
      <Copyright>
        <CopyrightText>© 2021 LILIES, All rights reserved</CopyrightText>
        <CopyrightLinks>
          <img src="/Social Icons.svg" alt="" />
          <img src="/Social Icons (1).svg" alt="" />
          <img src="/Social Icons (2).svg" alt="" />
        </CopyrightLinks>
      </Copyright>
    </Section>
  );
};

export default Footer;
