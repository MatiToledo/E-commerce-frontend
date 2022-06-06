import { useRouter } from "next/router";
import { Close, Facebook, Instagram, Twitter } from "ui/icons";
import { LogoWhite } from "ui/logo";
import { Body, SubTitle, TinyText } from "ui/texts";
import { CloseCont, Foot, Info, Media, Root } from "./styled";

export default function BuyPopUp() {
  const router = useRouter();
  function handleClose() {
    router.push({ pathname: "/" });
  }

  return (
    <Root>
      <CloseCont>
        <Close onClick={handleClose}></Close>
      </CloseCont>
      <LogoWhite style={{ width: "165px", height: "30px" }}></LogoWhite>
      <Info>
        <SubTitle color="#fff">Gracias por su compra!!</SubTitle>
        <Body color="#8a8a8a">
          Revise su bandeja de correo para mas información
        </Body>
      </Info>
      <Foot>
        <Media>
          <Instagram stroke="black"></Instagram>
          <Twitter stroke="black"></Twitter>
          <Facebook stroke="black"></Facebook>
        </Media>
      </Foot>
    </Root>
  );
}
