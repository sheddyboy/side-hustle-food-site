import React from "react";
import OrdersItemWrapper, {
  Item,
  ItemTitle,
  Price,
  Qty,
  RemoveItem,
  Status,
  Title,
  Wrapper,
} from "./styled/OrdersItemWrapper";

const OrdersItem = () => {
  return (
    <OrdersItemWrapper>
      <Title>Item</Title>
      <Title>Qty</Title>
      <Title>Price</Title>
      <Title>Status</Title>
      <Item>
        <img src="/bon-vivant-qom5MPOER-I-unsplash 11.png" alt="" />
        <Wrapper>
          <ItemTitle>Stir Fry Pasta</ItemTitle>
          <RemoveItem>Remove</RemoveItem>
        </Wrapper>
      </Item>
      <Qty>3</Qty>
      <Price>N 1,000.00</Price>
      <Status>Delivered</Status>
    </OrdersItemWrapper>
  );
};

export default OrdersItem;
