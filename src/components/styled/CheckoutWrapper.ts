import styled from "styled-components";

const CheckoutWrapper = styled.div`
  width: 550px;
  form {
    display: flex;
    flex-direction: column;
  }

  input[type="text"],
  input[type="date"],
  input[type="password"] {
    padding: 20px 32px 20px 32px;
    background: rgba(255, 255, 255, 0.83);
    border: 1px solid rgba(251, 221, 187, 0.51);
    border-radius: 5px;
    margin-bottom: 47px;
  }

  input[type="submit"] {
    background: #00302e;
    border: none;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 27px;
    /* identical to box height, or 208% */

    color: #f3c294;

    padding: 17px;
  }
`;

export const Title = styled.h3`
  margin-bottom: 33px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 33px;
  /* identical to box height, or 194% */

  color: #00302e;
`;

export default CheckoutWrapper;
