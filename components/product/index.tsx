import BuyPopUp from "components/buy-popup";
import { useListenOrderStatus } from "hooks";
import { startBuyItem } from "lib/api";
import { useRouter } from "next/router";
import { ButtonShop } from "ui/buttons";
import { InputSize } from "ui/inputs";
import { BodyBold, SubTitle, TinyText, TinyTextBold } from "ui/texts";
import { Button, Category, Container, Media, Price, Root } from "./styled";

export default function Product({ product }: any) {
  const { setOrderId, status } = useListenOrderStatus();
  const router = useRouter();

  async function handleBuy() {
    const order = await startBuyItem(product.Code, { quantity: 1 });
    if (!order) {
      window.alert("Hubo un error, intentelo nuevamente");
    }
    setOrderId(order.orderId);
    window.open(`${order.url}`, "_blank");
  }

  return (
    <Root>
      <Media src={product.Images[0].url}></Media>
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
        <TinyText>{product.Description}</TinyText>
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
