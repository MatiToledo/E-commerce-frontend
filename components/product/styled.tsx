import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fafafa;
  justify-content: center;
  align-items: center;
  padding: 30px;

  @media (min-width: 796px) {
    min-height: 600px;
    flex-direction: row;
  }
`;

export const Media: any = styled.div`
  width: 350px;
  aspect-ratio: 1;
  position: relative;
  max-height: 525px;
  @media (min-width: 796px) {
    height: 525px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  justify-content: flex-start;
  width: 350px;
  gap: 4px;

  @media (min-width: 796px) {
    margin-left: 30px;
    height: 525px;
    margin-top: 0px;
  }
`;

export const Price = styled.div`
  margin: 20px 0;
`;

export const Button = styled.div`
  margin-top: 20px;
`;

export const Description = styled.div`
  margin-top: 20px;
`;

export const Category = styled.div`
  margin: 20px 0;
`;
