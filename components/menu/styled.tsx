import styled, { keyframes } from "styled-components";

export const Root = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 55px;
  @media (min-width: 796px) {
    width: 20px;
  }
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

export const BurguerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 796px) {
    display: none;
  }
`;
