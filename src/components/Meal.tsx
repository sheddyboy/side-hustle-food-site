import React from "react";
import MealWrapper, { AddToCart, Amount, Wrapper } from "./styled/MealWrapper";

interface MealsProp {
  amount: number;
  image: string;
  handleAddToCart: (image: string, amount: number) => void;
}

const Meal = ({ amount, image, handleAddToCart }: MealsProp) => {
  return (
    <MealWrapper>
      <img src={image} alt="" />
      <h2>Stir Fry Pasta</h2>
      <p>The in-house pasta and chicken by chef Moose</p>
      <Wrapper>
        <Amount>
          <span>N</span>
          {amount}
        </Amount>
        <AddToCart
          onClick={() => {
            handleAddToCart(image, amount);
          }}
        >
          Add to cart
        </AddToCart>
      </Wrapper>
    </MealWrapper>
  );
};

export default Meal;
