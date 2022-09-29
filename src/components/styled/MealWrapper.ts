import styled from "styled-components";

const MealWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 240px;
  height: 307px;

  background: rgba(255, 255, 255, 0.83);
  border: 0.3px solid rgba(0, 48, 46, 0.14);
  border-radius: 5px;

  img {
    margin-top: 47px;
    margin-bottom: 13px;
  }

  h2 {
    margin-bottom: 4px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 33px;
    /* identical to box height, or 194% */

    color: #00302e;
  }
  p {
    margin-bottom: 22px;
    width: 172px;
    text-align: center;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 21px;
    /* or 191% */
    color: rgba(0, 0, 0, 0.69);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
`;

export const Amount = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 33px;
  /* identical to box height, or 254% */

  color: #00302e;
`;
export const AddToCart = styled.span`
  cursor: pointer;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 33px;
  color: #06e775;
  /* identical to box height, or 254% */
`;

export default MealWrapper;
