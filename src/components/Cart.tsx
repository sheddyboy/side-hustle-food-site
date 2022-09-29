import React from "react";
import { CartItemProps } from "../types";
import CartItem from "./CartItem";
import CartWrapper, { Checkout, Total } from "./styled/CartWrapper";

interface CartProps {
  cartList?: CartItemProps[];
}
const Cart = ({ cartList }: CartProps) => {
  return (
    <CartWrapper>
      <h3>Your Cart</h3>
      {cartList &&
        cartList.map((i, index) => (
          <CartItem key={index} image={i.image} amount={i.amount} />
        ))}
      <Total>
        Total: <span>N 30,000.00</span>
      </Total>
      <Checkout>Checkout</Checkout>
    </CartWrapper>
  );
};

export default Cart;
