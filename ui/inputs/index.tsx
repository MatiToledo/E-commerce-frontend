import styled from "styled-components";
import { TinyText } from "ui/texts";

export const Label = styled(TinyText)``;

export const Input = styled.input.attrs((props) => ({
  placeholder: props.placeholder,
}))`
  font-size: 16px;
  width: 100%;
  border: none;
  background: transparent;
  border-bottom: 1px solid black;

  &::placeholder {
    color: ${(props) => props.color || "black"};
  }

  &:focus {
    outline: none;
    border: none;
    background: transparent;
    border-bottom: 1px solid black;
  }
`;

export const InputLogin = styled(Input)`
  font-size: 12px;
`;

type TextFieldProps = {
  label?: string;
  placeholder?: string;
  color?: string;
};

export function TextField({ label, placeholder, color }: TextFieldProps) {
  return (
    <label>
      <Input color={color} placeholder={placeholder}></Input>
    </label>
  );
}
