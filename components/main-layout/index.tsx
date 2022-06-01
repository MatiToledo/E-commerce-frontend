import Footer from "components/footer";
import Header from "components/header";
import { Root } from "./styled";

export default function MainLayaout({ children }: any) {
  return (
    <Root>
      <Header></Header>
      {children}
      <Footer></Footer>
    </Root>
  );
}
