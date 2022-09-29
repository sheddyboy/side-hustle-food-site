import styled from "styled-components";

const OrdersItemWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 30px;
  margin-bottom: 50px;
`;

export const Title = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 33px;
  /* or 254% */
  color: rgba(0, 0, 0, 0.69);
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ItemTitle = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 33px;
  /* identical to box height, or 194% */

  color: #00302e;
`;
export const RemoveItem = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 33px;
  /* or 275% */

  color: #c92c33;
`;

export const Qty = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 33px;
  /* identical to box height, or 194% */

  color: #00302e;
`;

export const Price = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 33px;
  /* identical to box height, or 194% */

  color: #00302e;
`;

export const Status = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 33px;
  /* identical to box height, or 220% */

  color: #3a8f4d;
`;

export default OrdersItemWrapper;
