import styled, { keyframes } from "styled-components";

export const Root = styled.div`
  display: flex;
  height: 50px;
  background-color: black;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

export const Left = styled.div`
  display: flex;
`;

export const NavLeft = styled.div`
  display: none;
  @media (min-width: 702px) {
    margin-left: 30px;
    display: flex;
    width: 200px;
    justify-content: space-between;
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80px;
  align-items: center;

  @media (min-width: 796px) {
    width: 30px;
  }
`;
