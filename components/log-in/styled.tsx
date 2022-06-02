import styled from "styled-components";
import { TinyText } from "ui/texts";

export const Root = styled.div`
  height: 565px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px;
  min-height: 55px;
  justify-content: space-between;
  width: 250px;
`;

export const Error = styled(TinyText)`
  margin-bottom: 10px;
`;
