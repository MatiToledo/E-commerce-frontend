import Card from "ui/card";
import { CardsContainer, HeaderText, HeaderType, Root } from "./styled";
import { TinyText, Title } from "ui/texts";

type ProductsTypeProps = {
  data: {
    products: any;
    nbHits: number;
  };
  type: string;
};

export default function ProductsType({ data, type }: ProductsTypeProps) {
  const products = data.products;

  const top = (
    <TinyText color="#fafafa">
      Remeras Regular Fit, Oversized Fit, Relaxed Fit Hoodies, Camisacos, Knit
      Vests & Track Coats.
    </TinyText>
  );
  const bottom = (
    <TinyText color="#fafafa">Wide Track Joggers, Sweatpants & Cargos</TinyText>
  );
  const accesorios = (
    <TinyText color="#fafafa">
      Caps, Beanies, Anillos, Necklaces, Aros, Socks, Bags
    </TinyText>
  );

  return (
    <Root>
      <HeaderType>
        <HeaderText>
          <Title text-decoration={"underline #fafafa"} color="#fafafa">
            {type.toUpperCase()}
          </Title>
          {type == "Top" ? top : type == "Bottom" ? bottom : accesorios}
        </HeaderText>
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
