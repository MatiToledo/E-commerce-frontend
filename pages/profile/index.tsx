import HomeSearch from "components/home-search";
import MainLayaout from "components/main-layout";
import ProductsFeatured from "components/products-featured";
import ProfileForm from "components/profile-form";
import type { NextPage } from "next";
import Head from "next/head";

//min 51

const Profile: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Perfil</title>
      </Head>
      <MainLayaout>
        <ProfileForm></ProfileForm>
      </MainLayaout>
    </div>
  );
};

export default Profile;
