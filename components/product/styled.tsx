import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fafafa;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

export const Media: any = styled.div`
  background-image: url(${(props: any) => props.src};);
  min-width: 350px;
  min-height: 525px;
  background-size: contain;
  background-repeat: no-repeat;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  justify-content: flex-start;
  width: 350px;
  gap: 4px;
`;

export const Price = styled.div`
  margin: 20px 0;
`;

export const Button = styled.div`
  margin: 20px 0;
`;

export const Category = styled.div`
  margin: 20px 0;
`;
