import styled from "styled-components";

const RegisterWrapper = styled.div`
  display: grid;
  grid-template-columns: 764px auto;
  height: 100vh;
  overflow: hidden;
`;

export const Image = styled.div``;
export const Form = styled.form`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  padding-left: 100px;
  padding-right: 100px;
  align-items: stretch;

  h1 {
    margin-bottom: 61px;
    text-align: center;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 27px;
    line-height: 33px;
    /* identical to box height, or 122% */

    color: #00302e;
  }

  input[type="text"],
  input[type="email"],
  input[type="password"] {
    padding: 19px 25px 19px 25px;
    background: rgba(255, 255, 255, 0.83);
    border: 1px solid rgba(251, 221, 187, 0.51);
    border-radius: 5px;
    margin-bottom: 48px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
  }

  input::placeholder {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 33px;
    /* identical to box height, or 236% */
    color: rgba(0, 48, 46, 0.53);
  }

  input[type="submit"] {
    border: none;
    padding: 19.5px;
    background: #00302e;
    border-radius: 5px;
    font-family: "Rubik";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;

    color: #fbddbb;
    margin-bottom: 34px;
    cursor: pointer;
  }

  p {
    text-align: center;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 33px;
    /* identical to box height, or 236% */
    color: rgba(0, 48, 46, 0.91);
  }

  span a {
    font-weight: 700;
    color: rgba(0, 48, 46, 0.91);
    text-decoration: none;
  }
`;
export const Links = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 33px;
  /* identical to box height, or 236% */
  color: rgba(0, 48, 46, 0.91);
`;
export const Link = styled.a`
  text-decoration: none;
`;

export default RegisterWrapper;
