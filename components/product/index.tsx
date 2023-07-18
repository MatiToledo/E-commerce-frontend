import BuyPopUp from "components/buy-popup";
import { useListenOrderStatus } from "hooks";
import { getSavedToken, startBuyItem } from "lib/api";
import { useRouter } from "next/router";
import { useState } from "react";
import { ButtonShop } from "ui/buttons";
import { InputSize } from "ui/inputs";
import { BodyBold, SubTitle, TinyText, TinyTextBold } from "ui/texts";
import {
  Button,
  Category,
  Container,
  Description,
  Media,
  Price,
  Root,
} from "./styled";
import Image from "next/image";

export default function Product({ product }: any) {
  const { setOrderId, status } = useListenOrderStatus();
  const [message, setMessage] = useState("");
  let token = getSavedToken();

  async function handleBuy() {
    if (!token) {
      let unloggedMessage = "Debes iniciar sesión para poder comprar";
      return setMessage(unloggedMessage);
    }

    const order = await startBuyItem(product.Code, { quantity: 1 });
    if (!order) {
      window.alert("Hubo un error, intentelo nuevamente");
    }
    setOrderId(order.orderId);
    window.open(`${order.url}`, "_blank");
  }

  return (
    <Root>
      <Media>
        <Image
          priority={true}
          layout="fill"
          objectFit="cover"
          src={product.image_url}></Image>
      </Media>
      <Container>
        <SubTitle>{product.Name}</SubTitle>
        <TinyText>{product.Code}</TinyText>
        <Price>
          <BodyBold>$ {product.unit_price}</BodyBold>
        </Price>
        {product.Sizes ? (
          <InputSize label="Tamaño" sizes={product.Sizes}></InputSize>
        ) : null}
        <Button>
          <ButtonShop onClick={handleBuy}></ButtonShop>
        </Button>
        {message ? <TinyText color="red">{message}</TinyText> : null}
        <Description>
          <TinyText>{product.Description}</TinyText>
        </Description>
        <Category>
          <TinyText>
            Categoria: <TinyTextBold>{product.Category}</TinyTextBold>
          </TinyText>
        </Category>
      </Container>
      {status == "closed" ? <BuyPopUp></BuyPopUp> : null}
    </Root>
  );
}
