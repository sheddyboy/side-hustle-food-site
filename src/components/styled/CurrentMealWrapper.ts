import styled from "styled-components";

const CurrentMealWrapper = styled.div`
  width: 520px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-bottom: 28px;
  }

  h3 {
    margin-bottom: 17px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 33px;
    /* identical to box height, or 194% */

    color: #00302e;
  }

  p {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 27px;
    /* or 245% */

    text-align: center;

    color: rgba(0, 0, 0, 0.69);
  }
`;

export const Overview = styled.div`
  margin-top: 40px;
  margin-bottom: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;

  p {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 33px;
    /* identical to box height, or 194% */

    color: #00302e;
  }
`;
export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  button {
    padding: 16px 35px 16px 35px;
    border: none;
    background: #00302e;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 27px;
    /* or 208% */

    color: #fbfbfb;
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  align-items: center;
`;
export const Add = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 13px;
  width: 48px;
  height: 60px;
  background: #f3c294;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 31px;
  line-height: 27px;
  /* identical to box height, or 87% */

  text-align: center;

  color: #00302e;
`;
export const Qty = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 27px;
  line-height: 27px;
  /* or 100% */

  text-align: center;

  color: #00302e;
`;
export const Minus = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 13px;
  width: 48px;
  height: 60px;
  background: #f3c294;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 31px;
  line-height: 27px;
  /* identical to box height, or 87% */

  text-align: center;

  color: #00302e;
`;

export default CurrentMealWrapper;
