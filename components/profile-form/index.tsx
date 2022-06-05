import { modifyProfile } from "lib/api";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ButtonPrimary } from "ui/buttons";
import { InputForm } from "ui/inputs";
import { Body, SubTitle } from "ui/texts";
import { Container, LogOut, Root } from "./styled";

export default function ProfileForm() {
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  async function handleForm(data: any) {
    console.log(data);
    const { name, address, phone } = data;
    const modify = await modifyProfile({ name, address, phone });
    if (modify) {
      reset();
      setSuccess(true);
    }
  }

  return (
    <Root>
      <SubTitle>Perfil</SubTitle>
      <form onSubmit={handleSubmit(handleForm)}>
        <Container>
          <label>
            <InputForm
              type={"text"}
              placeholder="Nombre completo"
              color="#8a8a8a"
              {...register("name")}
            ></InputForm>
          </label>
          <label>
            <InputForm
              type={"text"}
              placeholder="Dirección"
              color="#8a8a8a"
              {...register("address")}
            ></InputForm>
          </label>
          <label>
            <InputForm
              type={"text"}
              placeholder="Teléfono"
              color="#8a8a8a"
              {...register("phone")}
            ></InputForm>
          </label>
          <ButtonPrimary text={"Guardar"}></ButtonPrimary>
        </Container>
      </form>
      {success ? <Body>Información guardada con éxito</Body> : null}
      {/* <LogOut>
        <ButtonPrimary text={"Cerrar sesion"}></ButtonPrimary>
      </LogOut> */}
    </Root>
  );
}
