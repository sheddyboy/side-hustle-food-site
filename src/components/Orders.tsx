import React from "react";
import OrdersItem from "./OrdersItem";
import OrdersWrapper from "./styled/OrdersWrapper";

const Orders = () => {
  return (
    <OrdersWrapper>
      <h3>Your Orders</h3>
      <OrdersItem />
    </OrdersWrapper>
  );
};

export default Orders;
