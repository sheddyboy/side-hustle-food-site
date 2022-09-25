import React from "react";
import Container from "./styled/Container";
import Section from "./styled/Section";
import SpecialMealsWrapper, { Meal, Meals } from "./styled/SpecialMealsWrapper";

const SpecialMeals = () => {
  return (
    <Section backgroundColor="#00302E">
      <Container>
        <SpecialMealsWrapper>
          <h2>Special Meals of the day!</h2>
          <p>
            Check our sepecials of the day and get discounts on all our meals
            and swift delivery to what ever location within Ilorin.
          </p>
          <Meals>
            <Meal>
              <img src="/bon-vivant-qom5MPOER-I-unsplash 2.svg" alt="" />
              <h3>Stir fry Pasta</h3>
              <p>Stir fry pasta yada yada yada because of Sesan</p>
            </Meal>
            <Meal>
              <img src="/bon-vivant-qom5MPOER-I-unsplash 3.svg" alt="" />
              <h3>Meat Balls</h3>
              <p>Stir fry pasta yada yada yada because of Sesan</p>
            </Meal>
            <Meal>
              <img src="/bon-vivant-qom5MPOER-I-unsplash 4.svg" alt="" />
              <h3>Burger Meal</h3>
              <p>Stir fry pasta yada yada yada because of Sesan</p>
            </Meal>
          </Meals>
        </SpecialMealsWrapper>
      </Container>
    </Section>
  );
};

export default SpecialMeals;
