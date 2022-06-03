import Card from "ui/card";
import { Root } from "./styled";
import { Title } from "ui/texts";
import { CardsContainer } from "./styled";
import { useGetProducts } from "hooks";

export default function ProductsFeatured() {
  const AllProducts = useGetProducts();
  let products = AllProducts?.sort((a: any, b: any) => {
    return b["units_sold"] - a["units_sold"];
  }).slice(0, 2);

  return (
    <Root>
      <Title>Productos Destacados</Title>
      <CardsContainer>
        {products?.map((p: any) => {
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
