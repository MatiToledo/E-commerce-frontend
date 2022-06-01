import { ButtonShop } from "ui/buttons";
import { InputSize } from "ui/inputs";
import { Body, BodyBold, SubTitle, TinyText, TinyTextBold } from "ui/texts";
import { Button, Category, Container, Media, Price, Root } from "./styled";

export default function Product({ product }: any) {
  const p = {
    Color: ["Negro"],
    Type: "Bottom",
    Category: ["Cargos & Track Pants"],
    Description:
      "Pantalón hecho 100% de algodón (frisa/jogging) color negro con un estilo Regular Fit. Presenta una cintura con elástico con cordón ajustable y punteras, bolsillos laterales y logo de Boston Hype vertical en bolsillo izquierdo.",
    Name: "Sweatpant Negro",
    Code: "221-14-01NE",
    unit_price: 5985,
    Images: [
      {
        id: "att7dBP2Id50xCOVn",
        width: 591,
        height: 881,
        url: "https://dl.airtable.com/.attachments/396cf51f8795fe457e07910d9e633649/93411561/SWEATPANT-NEGRO-2-591x881.jpg?ts=1651186353&userId=usrIv3tAFrc6t2x1M&cs=99ad2c4a395531fc",
        filename: "SWEATPANT-NEGRO-2-591x881.jpg",
        size: 19034,
        type: "image/jpeg",
        thumbnails: {
          small: {
            url: "https://dl.airtable.com/.attachmentThumbnails/acb8de8b67f9eb0863a030576d42c071/ed641489?ts=1651186353&userId=usrIv3tAFrc6t2x1M&cs=4a8f0e5d22136b5c",
            width: 24,
            height: 36,
          },
          large: {
            url: "https://dl.airtable.com/.attachmentThumbnails/5d04f8782f299e63f904f1c1eb6903f8/747897f1?ts=1651186353&userId=usrIv3tAFrc6t2x1M&cs=9039928c789e3aaf",
            width: 512,
            height: 763,
          },
          full: {
            url: "https://dl.airtable.com/.attachmentThumbnails/cc0a0ed2fbd88776eda24ee7d0089e65/4d898c2e?ts=1651186353&userId=usrIv3tAFrc6t2x1M&cs=841b76f2618c8695",
            width: 3000,
            height: 3000,
          },
        },
      },
    ],
    Sizes: ["S-28/29", "M-30/31", "L-32/33", "XL-34/35"],
    objectID: "221-14-01NE",
  };

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
