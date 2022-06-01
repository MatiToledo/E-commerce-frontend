import LogIn from "components/log-in";
import MainLayaout from "components/main-layout";
import type { NextPage } from "next";

//LO QUE QUIERO ES QUE EL MAIN LAYOUT TENGO MIN-HEIGHT: 100VH Y QUE EL
//COMPONENTE LOGIN TENGA UN HEIGHT QUE SE ADAPTE AL TAMAñO ENTRE EL HEADER
//Y EL FOOTER PARA QUE ESTA PANTALLA SOLO OCUPE EL TAMAñO DEL DISPOSITIVO

//AL ROOT DEL MAIN LAYOUT LE PUSE MIN-HEIGHT: 100VH Y AL DEL COMPONENTE LOGIN
//LE PUSE HEIGHT: AUTO PERO ASI NO FUNCA
const LogInPage: NextPage = () => {
  return (
    <MainLayaout>
      <LogIn></LogIn>
    </MainLayaout>
  );
};

export default LogInPage;
