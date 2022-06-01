import { Facebook, Instagram, Twitter } from "ui/icons";
import { LogoWhite } from "ui/logo";
import { Body, TinyText } from "ui/texts";
import { DescriptionContainer, Media, Root } from "./styled";

export default function Footer() {
  return (
    <Root>
      <LogoWhite></LogoWhite>
      <DescriptionContainer>
        <Body color="#8a8a8a">
          Founded in Buenos Aires in 2018, Boston Hype is a contemporary/street
          fashion brand influenced by the modern youth culture.
        </Body>
      </DescriptionContainer>
      <Media>
        <Instagram />
        <Facebook />
        <Twitter />
      </Media>
      <TinyText color="#8a8a8a">
        © 2021 HYPE TODOS LOS DERECHOS RESERVADOS
      </TinyText>
    </Root>
  );
}
