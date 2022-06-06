import styled from "styled-components";

export const Root = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: 1;
  width: 400px;
  height: 200px;
  background-color: #000;
  box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding-top: 20px;
  border: none;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100px;
  align-items: center;
  margin: 10px 0;
`;

export const Foot = styled.div`
  height: 55px;
  background-color: #fafafa;
  width: 100%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Media = styled.div`
  display: flex;
  width: 150px;
  justify-content: space-between;
`;
export const CloseCont = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;
