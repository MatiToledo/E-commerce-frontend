import Card from "ui/card";
import { Root } from "./styled";
import { Title } from "ui/texts";
import { CardsContainer } from "./styled";

export default function ProductsFeatured({ products }: any) {
  return (
    <Root>
      <Title>Productos Destacados</Title>
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
