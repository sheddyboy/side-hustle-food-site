import React from "react";
import CheckoutWrapper, { Title } from "./styled/CheckoutWrapper";

const Checkout = () => {
  return (
    <CheckoutWrapper>
      <Title>Checkout</Title>
      <form>
        <input type="text" placeholder="Card Number" />
        <input type="text" placeholder="Exp Date" />
        <input type="text" placeholder="CVV/CVV2" />
        <input type="password" placeholder="Card Pin" />
        <input type="submit" value="Make Payment" />
      </form>
    </CheckoutWrapper>
  );
};

export default Checkout;
