import { useRouter } from "next/router";
import { useState } from "react";
import { Burguer } from "ui/icons";
import { MenuText } from "ui/texts";
import { Dropdown, MenuOption, Root } from "./styled";

export default function BurguerHeader() {
  const [active, setActive] = useState(false);
  const router = useRouter();
  function handleMenu() {
    setActive(!active);
  }
  return (
    <Root>
      <Burguer onClick={handleMenu} />
      {active ? (
        <Dropdown>
          <MenuOption
            onClick={() => {
              router.push({ pathname: "/Top" });
              setActive(!active);
            }}
          >
            <MenuText color="#343538">TOP</MenuText>
          </MenuOption>
          <MenuOption
            onClick={() => {
              router.push({ pathname: "/Bottom" });
              setActive(!active);
            }}
          >
            <MenuText color="#343538">BOTTOM</MenuText>
          </MenuOption>
          <MenuOption
            onClick={() => {
              router.push({ pathname: "/Accesorios" });
              setActive(!active);
            }}
          >
            <MenuText color="#343538">ACCESORIES</MenuText>
          </MenuOption>
        </Dropdown>
      ) : null}
    </Root>
  );
}
