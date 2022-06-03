import HomeSearch from "components/home-search";
import MainLayaout from "components/main-layout";
import ProductsFeatured from "components/products-featured";
import SearchProducts from "components/search-results";
import type { NextPage } from "next";
import Head from "next/head";
import Card from "ui/card";
import { Title } from "ui/texts";

const Search: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Buscar</title>
      </Head>
      <MainLayaout>
        <HomeSearch></HomeSearch>
        <SearchProducts></SearchProducts>
      </MainLayaout>
    </div>
  );
};

export default Search;
