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
