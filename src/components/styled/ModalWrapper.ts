import styled from "styled-components";

const ModalWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: 1;
  display: flex;
  justify-content: flex-end;
`;

export const Overlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Content = styled.div`
  padding: 50px;
  background-color: #ffffff;
  position: relative;
`;

export default ModalWrapper;
