import styled, { keyframes } from "styled-components";

export const Root = styled.div`
  display: flex;
  height: 50px;
  background-color: black;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80px;
  align-items: center;
`;

const animation = keyframes`
  from {
    transform: translateY(5px)  }

  to {
    transform: translateY(0px);
  }
`;

export const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  top: 50px;
  left: 0px;
  animation: ${animation} 0.3s ease-in;
`;
export const MenuOption = styled.a`
  background-color: #ffffff;
  padding: 12px 30px;
  border-bottom: 1px solid #e0e0e0;
`;
