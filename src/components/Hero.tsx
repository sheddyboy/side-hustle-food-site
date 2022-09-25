import React from "react";
import Container from "./styled/Container";
import HeroWrapper, { HeroContent, HeroImage } from "./styled/HeroWrapper";
import Section from "./styled/Section";

const Hero = () => {
  return (
    <Section backgroundColor="#00302E">
      <Container>
        <HeroWrapper>
          <HeroContent>
            <h1>
              Order <span>food</span> anytime, anywhere
            </h1>
            <p>
              Browse from our list of specials to place your order and have food
              delivered to you in no time. Affordable, tasty and fast!
            </p>
            <div>
              <img src="/Play Store.svg" alt="" />
              <img src="/Apple Store.svg" alt="" />
            </div>
          </HeroContent>
          <HeroImage>
            <img src="/Hero Image.svg" alt="" />
          </HeroImage>
        </HeroWrapper>
      </Container>
    </Section>
  );
};

export default Hero;
