import { ButtonPrimary } from "ui/buttons";
import { InputLogin } from "ui/inputs";
import { Error, SubTitle } from "ui/texts";
import { Root, Form } from "./styled";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { sendCode } from "lib/api";

export default function LogIn() {
  const [email, setEmail] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  function handleEmail(data: any) {
    setEmail(data.email);
    sendCode(data.email);
    reset();
  }
  function handleCode(data: any) {
    console.log(data);
  }

  return (
    <Root>
      <SubTitle>Ingresar</SubTitle>
      <Form onSubmit={handleSubmit(handleEmail)}>
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
      </Form>
      {/* {!email ? (
        <Form onSubmit={handleSubmit(handleEmail)}>
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
        </Form>
      ) : (
        <Form onSubmit={handleSubmit(handleCode)}>
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
        </Form>
      )} */}
    </Root>
  );
}
