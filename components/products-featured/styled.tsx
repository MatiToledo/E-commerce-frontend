import styled from "styled-components";

export const Root = styled.div`
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 180px 180px;
  width: 400;
  margin: 20px auto;
  place-items: center;
`;
