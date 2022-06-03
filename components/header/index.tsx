import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Burguer, User } from "ui/icons";
import { LogoWhite } from "ui/logo";
import { MenuText } from "ui/texts";
import { Menu, Root, Dropdown, MenuOption } from "./styled";

export default function Header() {
  const [active, setActive] = useState(false);
  const router = useRouter();
  function handleMenu() {
    setActive(!active);
  }
  function handleUser() {
    router.push("log-in");
  }

  return (
    <Root>
      <div style={{}}>
        <LogoWhite onClick={() => router.push("/")} />
      </div>
      <Menu>
        <User onClick={handleUser} />
        <Burguer onClick={handleMenu} />
      </Menu>
      {active ? (
        <Dropdown>
          <Link href={"Top"}>
            <MenuOption>
              <MenuText color="#343538">TOP</MenuText>
            </MenuOption>
          </Link>
          <Link href={"/Bottom"}>
            <MenuOption>
              <MenuText color="#343538">BOTTOM</MenuText>
            </MenuOption>
          </Link>
          <Link href={"/Accserios"}>
            <MenuOption>
              <MenuText color="#343538">ACCESORIES</MenuText>
            </MenuOption>
          </Link>
        </Dropdown>
      ) : null}
    </Root>
  );
}
