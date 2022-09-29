import React from "react";
import { CartItemProps } from "../types";
import CartItemWrapper, {
  Item,
  ItemTitle,
  Qty,
  RemoveItem,
  SubTotal,
  Title,
  UnitPrice,
  Wrapper,
} from "./styled/CartItemWrapper";

const CartItem = ({ image, amount }: CartItemProps) => {
  return (
    <CartItemWrapper>
      <Title>Item</Title>
      <Title>Qty</Title>
      <Title>Unit Price</Title>
      <Title>Sub-total</Title>
      <Item>
        <img src={image} alt="" />
        <Wrapper>
          <ItemTitle>Stir Fry Pasta</ItemTitle>
          <RemoveItem>Remove</RemoveItem>
        </Wrapper>
      </Item>
      <Qty>3</Qty>
      <UnitPrice>N {amount}</UnitPrice>
      <SubTotal>N 3,000.00</SubTotal>
    </CartItemWrapper>
  );
};

export default CartItem;
