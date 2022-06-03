import HomeSearch from "components/home-search";
import MainLayaout from "components/main-layout";
import SearchProducts from "components/search-results";
import type { NextPage } from "next";
import Head from "next/head";

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
