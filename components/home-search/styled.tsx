import styled from "styled-components";
import img from "images/back.png";

export const Root = styled.div`
  display: flex;
  width: 100%;
  background-image: url("https://res.cloudinary.com/matitoledo/image/upload/v1654042550/descarga_glgqw0.png");
  height: 300px;
  background-size: auto;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Container = styled.div`
  width: 250px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  width: 250px;
  height: 60px;
  margin-top: 40px;
`;
