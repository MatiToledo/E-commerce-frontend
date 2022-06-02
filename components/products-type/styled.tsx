import styled from "styled-components";

export const Root = styled.div`
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeaderType = styled.div`
  display: flex;
  width: 100%;
  background-image: url("https://res.cloudinary.com/matitoledo/image/upload/v1654042550/descarga_glgqw0.png");
  height: 130px;
  background-size: auto;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const HeaderText = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  height: 100px;
`;

export const CardsContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 180px 180px;
  margin: 20px 20px;
  place-items: center;
  /* gap: 20px; */
  @media (min-width: 580px) {
    grid-template-columns: 180px 180px 180px;
  }
  @media (min-width: 780px) {
    grid-template-columns: 180px 180px 180px 180px;
  }
`;
