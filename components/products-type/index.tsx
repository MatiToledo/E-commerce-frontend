import Card from "ui/card";
import { CardsContainer, HeaderText, HeaderType, Root } from "./styled";
import { TinyText, Title } from "ui/texts";
import { Accesories, Bottom, Top } from "./types";

type ProductsTypeProps = {
  data: {
    products: any;
    nbHits: number;
  };
  type: string;
};

export default function ProductsType({ data, type }: ProductsTypeProps) {
  const products = data.products;
  console.log("products::: ", products);

  return (
    <Root>
      <HeaderType>
        <HeaderText>
          <Title text-decoration={"underline #fafafa"} color="#fafafa">
            {type.toUpperCase()}
          </Title>
          {type == "Top" ? (
            <Top />
          ) : type == "Bottom" ? (
            <Bottom />
          ) : (
            <Accesories />
          )}
        </HeaderText>
      </HeaderType>
      <CardsContainer>
        {products.map((p: any) => {
          return (
            <Card
              key={p.Code}
              price={p.unit_price}
              title={p.Name}
              src={p.image_url}
              id={p.Code}></Card>
          );
        })}
      </CardsContainer>
    </Root>
  );
}
