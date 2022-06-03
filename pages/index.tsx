import HomeSearch from "components/home-search";
import MainLayaout from "components/main-layout";
import ProductsFeatured from "components/products-featured";
import type { NextPage } from "next";
import Head from "next/head";

//min 51

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <MainLayaout>
        <HomeSearch></HomeSearch>
        <ProductsFeatured></ProductsFeatured>
      </MainLayaout>
    </div>
  );
};

export default Home;
