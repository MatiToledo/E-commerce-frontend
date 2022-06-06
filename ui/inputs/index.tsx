import styled from "styled-components";
import { TinyText } from "ui/texts";

export const Label = styled.label`
  padding: 10px;
  padding-right: 50px;
  border: 1px solid #e8e8e8;
  font-size: 13px;
  font-weight: 300;
`;

export const Select = styled.select`
  padding: 9px;
  padding-right: 60px;
  border-left: none;
  border: 1px solid #e8e8e8;
  background-color: #fafafa;
`;

export const Option = styled.option`
  font-size: 13px;
  font-weight: 300;
`;

export function InputSize({ label, sizes }: any) {
  return (
    <label>
      <Label>{label}</Label>
      <Select>
        <Option value="Elegi una opción">Elegi una opción</Option>
        {sizes.map((size: any) => {
          return (
            <Option value="size" key={size}>
              {size}
            </Option>
          );
        })}
      </Select>
    </label>
  );
}

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

export const InputForm = styled(Input)`
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
