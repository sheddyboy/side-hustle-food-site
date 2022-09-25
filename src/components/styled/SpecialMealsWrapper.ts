import styled from "styled-components";

const SpecialMealsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 180px;

  h2 {
    margin-bottom: 35px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 33px;
    /* identical to box height, or 92% */

    color: rgba(255, 255, 255, 0.87);
  }
  p {
    width: 609px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 33px;
    /* or 183% */

    text-align: center;

    color: rgba(255, 255, 255, 0.83);
  }
`;

export const Meals = styled.div`
  margin-top: 96px;
  display: flex;
  gap: 170px;
`;
export const Meal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    margin-bottom: 35px;
  }
  h3 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 27px;
    line-height: 33px;
    /* identical to box height, or 122% */

    text-align: center;

    color: #fbddbb;
  }
  p {
    width: 288px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 33px;
    /* or 183% */

    text-align: center;

    color: rgba(255, 255, 255, 0.83);
  }
`;

export default SpecialMealsWrapper;
