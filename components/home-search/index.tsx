import { Input } from "ui/inputs";
import { ButtonPrimary } from "ui/buttons";
import { Container, InputContainer, Root } from "./styled";
import { LogoBlack } from "ui/logo";

export default function HomeSearch() {
  return (
    <Root>
      <Container>
        <LogoBlack></LogoBlack>
        <InputContainer>
          <Input placeholder="Busca tu producto"></Input>
          <ButtonPrimary text="Buscar"></ButtonPrimary>
        </InputContainer>
      </Container>
    </Root>
  );
}
