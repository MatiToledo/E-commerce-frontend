import { useGetPagination } from "hooks";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Card from "ui/card";
import { Next, Prev } from "ui/icons";
import { SubTitle, TinyText } from "ui/texts";
import { CardsContainer, NavContainer, Root, Total } from "./styled";

export default function SearchProducts() {
  const router = useRouter();
  const q = router.query.q as string;

  const { data, pages, offset, setQ, setOffset } = useGetPagination();
  const products = data?.results || false;

  useEffect(() => {
    setOffset(0);
    setQ(q);
  }, [q]);

  function handlePrev() {
    if (offset >= 4) {
      setOffset(offset - 4);
    }
  }
  function handleNext() {
    if (offset < data.pagination.total - 4) {
      setOffset(offset + 4);
    }
  }

  return (
    <div>
      {data ? (
        <Root>
          <SubTitle>Resultados de busqueda</SubTitle>
          <Total>
            <TinyText>
              {products.length} resultados de {data.pagination.total}{" "}
            </TinyText>
          </Total>
          <CardsContainer>
            {products?.map((p: any) => {
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
          <NavContainer>
            <Prev onClick={handlePrev}></Prev>
            <Next onClick={handleNext}></Next>
          </NavContainer>
        </Root>
      ) : null}
    </div>
  );
}
