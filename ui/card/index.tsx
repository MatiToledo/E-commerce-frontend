import Image from "next/image";
import { useRouter } from "next/router";
import styled from "styled-components";
import { BodyBold, SubTitle, TinyText } from "ui/texts";

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 180px; */
  padding: 10px;

  :hover {
    box-shadow: 0px 0px 38px 0px rgb(41 44 58 / 15%);
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
  /* min-width: 160px; */
`;

export const Media: any = styled.div`
  width: 160px;
  height: 270px;
  position: relative;
`;

// export const Media: any = styled.div`
//   width: 350px;
//   aspect-ratio: 1;
//   position: relative;
//   max-height: 525px;
//   @media (min-width: 796px) {
//     height: 525px;
//   }
// `;
type CardProps = {
  src: string;
  title: string;
  price: number;
  id: string;
};

export default function Card({ src, title, price, id }: CardProps) {
  const router = useRouter();
  function handleClick() {
    router.push({ pathname: "/products/" + id });
  }

  return (
    <Root onClick={handleClick}>
      <Media>
        <Image
          priority={true}
          layout="fill"
          objectFit="cover"
          src={src}></Image>
      </Media>
      <Info>
        <BodyBold>{title}</BodyBold>
        <TinyText>$ {price}</TinyText>
      </Info>
    </Root>
  );
}
