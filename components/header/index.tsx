import Menu from "components/menu";
import { useLogged } from "hooks";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { LogoWhite } from "ui/logo";
import { Body } from "ui/texts";
import { Left, NavLeft, Root } from "./styled";

export default function Header() {
  const [active, setActive] = useState(false);
  const { logged } = useLogged();
  const router = useRouter();

  return (
    <Root>
      <Left>
        <LogoWhite onClick={() => router.push({ pathname: "/" })} />
        <NavLeft>
          <Link href={"/Top"}>
            <Body color="#fafafa">Top</Body>
          </Link>
          <Link href={"/Bottom"}>
            <Body color="#fafafa">Bottom</Body>
          </Link>
          <Link href={"/Accesorios"}>
            <Body color="#fafafa">Accesories</Body>
          </Link>
        </NavLeft>
      </Left>
      <Menu />
    </Root>
  );
}
