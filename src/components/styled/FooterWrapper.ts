import styled from "styled-components";

const FooterWrapper = styled.div`
  padding-top: 64px;
  padding-bottom: 64px;
`;

export const Links = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 30px;
`;

export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h4`
  margin-bottom: 24px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  color: #f4f5f7;
`;
export const Link = styled.a`
  text-decoration: none;
  color: #eeeff4;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 12px;
`;
export const Copyright = styled.div`
  padding-top: 24px;
  padding-bottom: 24px;
  border-top: 1px solid rgba(250, 250, 250, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const CopyrightText = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #d9dbe1;
`;
export const CopyrightLinks = styled.a`
  display: flex;
  gap: 24px;
`;

export default FooterWrapper;
