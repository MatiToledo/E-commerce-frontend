import { Input } from "ui/inputs";
import { ButtonPrimary } from "ui/buttons";
import { Container, Form, Root } from "./styled";
import { LogoBlack } from "ui/logo";
import { useForm } from "react-hook-form";
import { Error } from "ui/texts";
import { useRouter } from "next/router";

export default function HomeSearch() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  function handleSearch(data: any) {
    router.push({ pathname: "/search/" + data.q });
  }

  return (
    <Root>
      <Container>
        <LogoBlack></LogoBlack>
        <Form onSubmit={handleSubmit(handleSearch)}>
          <Input
            type="text"
            placeholder="Busca tu producto"
            {...register("q", { required: true })}
          ></Input>
          {errors.text && <Error>Este campo es obligatorio</Error>}
          <ButtonPrimary text="Buscar"></ButtonPrimary>
        </Form>
      </Container>
    </Root>
  );
}
