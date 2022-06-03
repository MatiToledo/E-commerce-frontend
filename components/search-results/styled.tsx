import styled from "styled-components";

export const Root = styled.div`
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  min-height: 300px;
`;
export const CardsContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 180px 180px;
  margin: 20px 20px;
  margin-top: 0px;
  place-items: center;
  /* gap: 20px; */
  @media (min-width: 580px) {
    grid-template-columns: 180px 180px 180px;
  }
  @media (min-width: 780px) {
    grid-template-columns: 180px 180px 180px 180px;
  }
`;

export const Total = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 5px;
  justify-content: flex-start;
  text-align: left;
  width: 100%;
  padding-left: 25px;
`;

export const NavContainer = styled.div`
  display: flex;
  margin: 20px;
  justify-content: space-around;
  align-items: center;
  min-width: 90px;
`;

export const ButtonsContainer = styled.div`
  display: grid-row;
  row-gap: 10px;
  grid-auto-flow: row;
`;
