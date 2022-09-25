import styled from "styled-components";

const HeroWrapper = styled.div`
  padding-top: 161px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeroContent = styled.div`
  width: 650px;
  h1 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 64px;
    line-height: 77px;
    /* or 120% */

    color: #ffffff;
  }

  span {
    color: #fbddbb;
  }

  p {
    margin-bottom: 21px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 33px;
    /* or 183% */

    color: rgba(255, 255, 255, 0.74);
  }

  img:nth-child(1) {
    margin-right: 12px;
  }
`;
export const HeroImage = styled.div``;

export default HeroWrapper;
