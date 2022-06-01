import Card from "ui/card";
import { CardsContainer, HeaderType, Root } from "./styled";
import { Title } from "ui/texts";

type ProductsTypeProps = {
  data: {
    products: [];
    nbHits: number;
  };
  type: string;
};

export default function ProductsType({ data, type }: ProductsTypeProps) {
  const products = data.products;

  return (
    <Root>
      <HeaderType>
        <Title>{type.toUpperCase()}</Title>
      </HeaderType>
      <CardsContainer>
        {products.map((p: any) => {
          return (
            <Card
              key={p.Code}
              price={p.unit_price}
              title={p.Name}
              src={p.Images[0].url}
              id={p.Code}
            ></Card>
          );
        })}
      </CardsContainer>
    </Root>
  );
}
