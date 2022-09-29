import styled from "styled-components";

const CartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 33px;
    /* identical to box height, or 194% */

    color: #00302e;

    margin-bottom: 24px;
  }
`;

export const Total = styled.p`
  display: inline-block;
  margin-left: auto;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 33px;
  /* identical to box height, or 194% */

  color: rgba(0, 0, 0, 0.69);

  span {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 21px;
    line-height: 33px;
    /* identical to box height, or 157% */

    color: #00302e;
  }
`;

export const Checkout = styled.button`
  border: none;
  background: #00302e;
  padding: 17px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 27px;
  /* or 208% */

  color: #f3c294;
  margin-top: 40px;
`;

export default CartWrapper;
