import BurguerHeader from "components/burguer-header";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { User } from "ui/icons";
import { LogoWhite } from "ui/logo";
import { Body, MenuText } from "ui/texts";
import { Burguer, Left, Menu, NavLeft, Root } from "./styled";

export default function Header() {
  const [active, setActive] = useState(false);
  const router = useRouter();
  function handleUser() {
    router.push("log-in");
  }

  return (
    <Root>
      <Left>
        <LogoWhite onClick={() => router.push("/")} />
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
      <Menu>
        <User onClick={handleUser} />
        <Burguer>
          <BurguerHeader />
        </Burguer>
      </Menu>
    </Root>
  );
}
