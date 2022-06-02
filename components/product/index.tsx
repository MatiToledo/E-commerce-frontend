import { ButtonShop } from "ui/buttons";
import { InputSize } from "ui/inputs";
import { BodyBold, SubTitle, TinyText, TinyTextBold } from "ui/texts";
import { Button, Category, Container, Media, Price, Root } from "./styled";

export default function Product({ product }: any) {
  return (
    <Root>
      <Media src={product.Images[0].url}></Media>
      <Container>
        <SubTitle>{product.Name}</SubTitle>
        <TinyText>{product.Code}</TinyText>
        <Price>
          <BodyBold>$ {product.unit_price}</BodyBold>
        </Price>
        <InputSize label="Tamaño" sizes={product.Sizes}></InputSize>
        <Button>
          <ButtonShop></ButtonShop>
        </Button>
        <TinyText>{product.Description}</TinyText>
        <Category>
          <TinyText>
            Categoria: <TinyTextBold>{product.Category}</TinyTextBold>
          </TinyText>
        </Category>
      </Container>
    </Root>
  );
}
