import React from "react";
import { ModalProps } from "../types";
import Cart from "./Cart";
import Checkout from "./Checkout";
import CurrentMeal from "./CurrentMeal";
import Orders from "./Orders";
import ModalWrapper, { Content, Overlay } from "./styled/ModalWrapper";

const Modal = ({ modal, handleModalToggle, cartList }: ModalProps) => {
  return (
    <ModalWrapper>
      <Overlay onClick={handleModalToggle} />
      {modal === "cart" && (
        <Content>
          <Cart cartList={cartList} />
        </Content>
      )}
      {modal === "order" && (
        <Content>
          <Orders />
        </Content>
      )}
      {modal === "checkout" && (
        <Content>
          <Checkout />
        </Content>
      )}
      {modal === "meal" && (
        <Content>
          <CurrentMeal />
        </Content>
      )}
    </ModalWrapper>
  );
};

export default Modal;
