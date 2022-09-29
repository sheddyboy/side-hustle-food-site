import styled from "styled-components";

const DashboardWrapper = styled.div`
  display: grid;
  grid-template-columns: 320px auto;
`;

export const DashboardNav = styled.div`
  background: #fbfbfb;
  border-radius: 0px 20px 20px 0px;
  height: 100vh;
  position: sticky;
  top: 0px;
  padding-left: 26px;
  padding-right: 26px;
`;
export const NavLogo = styled.div`
  margin-top: 100px;
  display: flex;
  align-items: center;
  gap: 20px;

  span {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 33px;
    line-height: 50px;
    /* identical to box height */

    letter-spacing: 0.05em;

    color: #00302e;
  }
`;
export const NavLinks = styled.div``;
export const ActiveLink = styled.div`
  margin-top: 100px;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 15px;
  background: #efefef;
  border-radius: 12px;

  span {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    color: #000000;
  }
`;
export const NavLink = styled.div`
  cursor: pointer;
  padding: 15px;
  margin-top: 15px;
  display: flex;
  align-items: center;
  img {
    margin-right: 16px;
  }
  span {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    color: #707070;
  }
`;

interface CounterProps {
  backgroundColor: string;
}
export const Counter = styled.div<CounterProps>`
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 5px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  color: #000000;
`;

export const DashboardContent = styled.div`
  padding: 140px 70px 0px 70px;
`;
export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 53px;
  h1 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 23px;
    line-height: 33px;
    /* identical to box height, or 143% */

    color: #00302e;

    margin-bottom: 4px;
  }
  p {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 33px;
    /* identical to box height, or 236% */

    text-align: center;

    color: rgba(0, 0, 0, 0.69);
  }
`;
export const Meals = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 68px;
`;

export default DashboardWrapper;
