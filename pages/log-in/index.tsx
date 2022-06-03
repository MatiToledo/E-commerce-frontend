import LogIn from "components/log-in";
import MainLayaout from "components/main-layout";
import type { NextPage } from "next";
import Head from "next/head";

//LO QUE QUIERO ES QUE EL MAIN LAYOUT TENGO MIN-HEIGHT: 100VH Y QUE EL
//COMPONENTE LOGIN TENGA UN HEIGHT QUE SE ADAPTE AL TAMAñO ENTRE EL HEADER
//Y EL FOOTER PARA QUE ESTA PANTALLA SOLO OCUPE EL TAMAñO DEL DISPOSITIVO

//AL ROOT DEL MAIN LAYOUT LE PUSE MIN-HEIGHT: 100VH Y AL DEL COMPONENTE LOGIN
//LE PUSE HEIGHT: AUTO PERO ASI NO FUNCA
const LogInPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Log In</title>
      </Head>
      <MainLayaout>
        <LogIn></LogIn>
      </MainLayaout>
    </div>
  );
};

export default LogInPage;
