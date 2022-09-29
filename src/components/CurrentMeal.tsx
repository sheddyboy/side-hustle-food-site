import React from "react";
import CurrentMealWrapper, {
  ActionButtons,
  Actions,
  Add,
  Content,
  Minus,
  Overview,
  Qty,
} from "./styled/CurrentMealWrapper";

const CurrentMeal = () => {
  return (
    <CurrentMealWrapper>
      <Content>
        <img src="/bon-vivant-qom5MPOER-I-unsplash 6 (1).png" alt="" />
        <h3>Blueberry Toasts and smoothie</h3>
        <p>
          Just have a single bite of this Black Forest pastry and it will all
          make a proper sense to you. The kick of cherry and rich chocolate of
          this super light, airy pastry will definitely make you feel "wow". The
          perfect combination of cherry cream and rich chocolate can provide the
          ultimate fulfillment to your dessert craving.
        </p>
        <Overview>
          <p>NGN 2000.00</p>
          <p>10-20 Mins</p>
          <p>10 Pcs Avail</p>
        </Overview>
      </Content>
      <Actions>
        <ActionButtons>
          <Add>-</Add>
          <Qty>3</Qty>
          <Minus>+</Minus>
        </ActionButtons>
        <button>Add to cart</button>
      </Actions>
    </CurrentMealWrapper>
  );
};

export default CurrentMeal;
