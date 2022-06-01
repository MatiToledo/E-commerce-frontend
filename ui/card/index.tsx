import { useRouter } from "next/router";
import styled from "styled-components";
import { BodyBold, SubTitle, TinyText } from "ui/texts";

export const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
`;

export const Media: any = styled.div`
  background-image: url(${(props: any) => props.src};);
  min-width: 180px;
  height: 270px;
  background-size: contain;
  background-repeat: no-repeat;
`;

type CardProps = {
  src: string;
  title: string;
  price: number;
  id: string;
};

export default function Card({ src, title, price, id }: CardProps) {
  const router = useRouter();
  function handleClick() {
    router.push("product/" + id);
  }

  return (
    <Root onClick={handleClick}>
      <Media src={src}></Media>
      <Info>
        <BodyBold>{title}</BodyBold>
        <TinyText>$ {price}</TinyText>
      </Info>
    </Root>
  );
}
