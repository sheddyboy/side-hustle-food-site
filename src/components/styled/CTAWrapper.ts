import styled from "styled-components";

const CTAWrapper = styled.div`
  padding-top: 270px;
  padding-bottom: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CTAContent = styled.div`
  h2 {
    margin-bottom: 32px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 33px;
    /* identical to box height, or 92% */

    color: #fbddbb;
  }

  p {
    width: 530px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 33px;
    /* or 183% */

    color: rgba(255, 255, 255, 0.95);
  }
`;
export const CTAEmail = styled.div`
  display: flex;
  gap: 8px;

  input::placeholder {
    font-family: "Rubik";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;

    color: #b2b2b2;
  }

  input[type="text"] {
    font-family: "Rubik";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    width: 299px;
    padding: 15px;

    background: #f7f7f7;
    border: 1px solid #b3b3b3;
    border-radius: 5px;
  }

  input[type="submit"] {
    padding: 15px 40px 15px 40px;
    background: #fbddbb;
    border-radius: 5px;
    font-family: "Rubik";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    border: none;
    cursor: pointer;
    /* text-align: center; */

    color: #00302e;
  }
`;

export default CTAWrapper;
