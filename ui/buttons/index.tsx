import styled from "styled-components";
import { Body, MenuText, TinyText } from "ui/texts";

export const BaseButoon = styled.button`
  background-color: #212121;
  width: 100%;
  height: 25px;
  border-radius: 6px;
  border: none;
`;

type ButtonsProps = {
  type?: string;
  text: string;
};

export function ButtonPrimary({ text }: ButtonsProps) {
  return (
    <BaseButoon>
      <MenuText color="#fafafa">{text}</MenuText>
    </BaseButoon>
  );
}

export const ShopButton = styled.button`
  background-color: #343538;
  padding: 20px 35px;
  border: none;
  width: 200px;
`;

export function ButtonShop({ onClick }: any) {
  return (
    <ShopButton onClick={onClick}>
      <MenuText color="#fff">COMPRAR</MenuText>
    </ShopButton>
  );
}

export const PageButton = styled.button`
  background-color: #fafafa;
  border: solid 0.5px #8a8a8a;
  border-radius: 3px;
  width: 30px;
  height: 30px;
  margin: 0 2.5px;
`;

export function ButtonPage({ text }: any) {
  return (
    <PageButton>
      <MenuText>{text}</MenuText>
    </PageButton>
  );
}
