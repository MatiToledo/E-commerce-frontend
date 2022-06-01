import MainLayaout from "components/main-layout";
import ProductsType from "components/products-type";
import type { NextPage } from "next";

const ProductTypePage: NextPage = ({ products, type }: any) => {
  return (
    <MainLayaout>
      <ProductsType data={products} type={type}></ProductsType>
    </MainLayaout>
  );
};

export async function getStaticPaths() {
  const types = ["Top", "Bottom", "Accesories"];
  return {
    paths: types.map((type) => {
      return { params: { type } };
    }),
    fallback: true, // false or 'blocking'
  };
}

export async function getStaticProps(context: any) {
  const type = context.params.type;

  const res = await fetch(
    `https://desafio-m9.vercel.app/api/products/type/${type}`
  );
  const products = await res.json();
  return {
    props: { products, type },
  };
}

export default ProductTypePage;
