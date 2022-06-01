import styled from "styled-components";
import { TinyText } from "ui/texts";

export const Root = styled.div`
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const FormEmail = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px;
  min-height: 55px;
  justify-content: space-between;
  width: 250px;
`;
export const FormCode = styled(FormEmail)`
  min-height: 80px;
  text-align: center;
`;

export const Error = styled(TinyText)`
  margin-bottom: 10px;
`;
