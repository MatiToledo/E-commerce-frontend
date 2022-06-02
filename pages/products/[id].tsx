import MainLayaout from "components/main-layout";
import Product from "components/product";
import type { NextPage } from "next";

const ProductPage: NextPage = ({ data }: any) => {
  return (
    <MainLayaout>
      <Product product={data}></Product>
    </MainLayaout>
  );
};

export async function getStaticPaths() {
  const res = await fetch(`https://desafio-m9.vercel.app/api/products`);
  const data = await res.json();
  const hits = data.hits;
  const paths = hits.map((item: any) => {
    return { params: { id: item.Code } };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const id = context.params.id;

  const res = await fetch(`https://desafio-m9.vercel.app/api/products/${id}`);
  const data = await res.json();
  console.log(data);

  return {
    props: { data },
  };
}

export default ProductPage;
