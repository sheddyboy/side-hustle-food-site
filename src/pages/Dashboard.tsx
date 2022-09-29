import React, { useState } from "react";
import Meal from "../components/Meal";
import Modal from "../components/Modal";
import DashboardWrapper, {
  ActiveLink,
  Counter,
  DashboardContent,
  DashboardNav,
  Heading,
  Meals,
  NavLink,
  NavLinks,
  NavLogo,
} from "../components/styled/DashboardWrapper";
import Section from "../components/styled/Section";
import { CartItemProps, ModalProps } from "../types";

const Dashboard = () => {
  const [cart, setCart] = useState<CartItemProps[]>([]);
  const [modal, setModal] = useState<ModalProps>({
    modal: "cart",
    toggle: false,
  });
  const handleModal = (modalParam: ModalProps) => {
    setModal((modal) => {
      return { modal: modalParam.modal, toggle: !modal.toggle };
    });
  };

  const handleModalToggle = () => {
    setModal((modal) => {
      return { ...modal, toggle: !modal.toggle };
    });
  };

  const handleAddToCart = (image: string, amount: number) => {
    setCart((cart) => {
      cart.push({ image, amount });
      return cart;
    });
  };
  return (
    <Section>
      {modal.toggle && (
        <Modal
          cartList={cart}
          handleModalToggle={handleModalToggle}
          modal={modal.modal}
        />
      )}
      <DashboardWrapper>
        <DashboardNav>
          <NavLogo>
            <img src="/Logo.svg" alt="" />
            <span>Lilies</span>
          </NavLogo>
          <NavLinks>
            <ActiveLink>
              <img src="/home (2).png" alt="" />
              <span>Dashboard</span>
            </ActiveLink>
            <NavLink>
              <img src="/profile.png" alt="" />
              <span>Your Profile</span>
            </NavLink>
            <NavLink
              onClick={() => {
                handleModal({ modal: "order" });
              }}
            >
              <img src="/orders.png" alt="" />
              <span>Orders</span>
              <Counter backgroundColor="#06E775">6</Counter>
            </NavLink>
            <NavLink
              onClick={() => {
                handleModal({ modal: "cart" });
              }}
            >
              <img src="/cart.png" alt="" />
              <span>Your Cart</span>
              <Counter backgroundColor="#F3C294">6</Counter>
            </NavLink>
          </NavLinks>
        </DashboardNav>
        <DashboardContent>
          <Heading>
            <h1>Good morning, Oghenevwede!</h1>
            <p>What delicious meal are you craving today?</p>
          </Heading>
          <Meals>
            <Meal
              handleAddToCart={handleAddToCart}
              amount={1000}
              image="/bon-vivant-qom5MPOER-I-unsplash 5.png"
            />
            <Meal
              handleAddToCart={handleAddToCart}
              amount={1000}
              image="/bon-vivant-qom5MPOER-I-unsplash 6.png"
            />
            <Meal
              handleAddToCart={handleAddToCart}
              amount={1000}
              image="/bon-vivant-qom5MPOER-I-unsplash 7.png"
            />
            <Meal
              handleAddToCart={handleAddToCart}
              amount={1000}
              image="/bon-vivant-qom5MPOER-I-unsplash 8.png"
            />
            <Meal
              handleAddToCart={handleAddToCart}
              amount={1000}
              image="/bon-vivant-qom5MPOER-I-unsplash 9.png"
            />
            <Meal
              handleAddToCart={handleAddToCart}
              amount={1000}
              image="/bon-vivant-qom5MPOER-I-unsplash 10.png"
            />
          </Meals>
        </DashboardContent>
      </DashboardWrapper>
    </Section>
  );
};

export default Dashboard;
