import styled from "styled-components";

const NavWrapper = styled.div`
  padding-top: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  img {
    margin-right: 22px;
  }

  span {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 54px;

    color: #ffffff;
  }
`;
export const NavLinks = styled.div`
  a {
    text-decoration: none;
    font-family: "Poppins";
    font-style: normal;
    font-size: 21px;
    line-height: 33px;
    margin-left: 45px;
    font-weight: 500;
  }

  a:nth-child(1) {
    color: #fbddbb;
  }
  a:nth-child(2) {
    color: rgba(255, 255, 255, 0.87);
  }
  a:nth-child(3) {
    padding: 10px 38px 10px 38px;
    background: #e2b887;
    border-radius: 7px;
    font-weight: 600;
    font-size: 17px;
    line-height: 33px;
    color: #00302e;
  }
`;
export default NavWrapper;
