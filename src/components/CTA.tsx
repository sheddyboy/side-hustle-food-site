import React from "react";
import Container from "./styled/Container";
import CTAWrapper, { CTAContent, CTAEmail } from "./styled/CTAWrapper";
import Section from "./styled/Section";

const CTA = () => {
  return (
    <Section backgroundColor="#00302E">
      <Container>
        <CTAWrapper>
          <CTAContent>
            <h2>Get notified when we update!</h2>
            <p>
              Get notified when we add new items to our specials menu, update
              our price list of have promos!
            </p>
          </CTAContent>
          <CTAEmail>
            <input type="text" placeholder="gregphillips@gmail.com" />
            <input type="submit" value="Get notified" />
          </CTAEmail>
        </CTAWrapper>
      </Container>
    </Section>
  );
};

export default CTA;
