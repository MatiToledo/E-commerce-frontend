import { ButtonPrimary } from "ui/buttons";
import { Input, InputLogin, TextField } from "ui/inputs";
import { SubTitle, TinyText } from "ui/texts";
import { Error, FormEmail, FormCode, Root } from "./styled";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function LogIn() {
  const [email, setEmail] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  function handleEmail(data: any) {
    setEmail(data.email);
  }
  function handleCode(data: any) {
    console.log(data);
  }

  return (
    <Root>
      <SubTitle>Ingresar</SubTitle>
      {!email ? (
        <FormEmail onSubmit={handleSubmit(handleEmail)}>
          <label>
            <InputLogin
              type={"email"}
              placeholder="Email"
              color="#8a8a8a"
              {...register("email", { required: true })}
            ></InputLogin>
            {errors.email && <Error>Este campo es obligatorio</Error>}
          </label>

          <ButtonPrimary text="Continuar"></ButtonPrimary>
        </FormEmail>
      ) : (
        <FormCode onSubmit={handleSubmit(handleCode)}>
          <label>
            <InputLogin
              type={"text"}
              placeholder="Codigo"
              color="#8a8a8a"
              {...(register("code"), { required: true })}
            ></InputLogin>
            {errors.code && <Error>Este campo es obligatorio</Error>}
          </label>
          <TinyText>Te enviamos un codigo a tu mail</TinyText>
          <ButtonPrimary text="Ingresar"></ButtonPrimary>
        </FormCode>
      )}
    </Root>
  );
}
