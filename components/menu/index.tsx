import { useLogged } from "hooks";
import { useRouter } from "next/router";
import { useState } from "react";
import { Burguer, User } from "ui/icons";
import { MenuText } from "ui/texts";
import { BurguerContainer, Dropdown, MenuOption, Root } from "./styled";

export default function Menu() {
  const [burguerActive, setBurguerActive] = useState(false);
  const [userActive, setUserActive] = useState(false);
  const router = useRouter();
  const { logged, setLogged } = useLogged();
  function handleBurguer() {
    setBurguerActive(!burguerActive);
    setUserActive(false);
  }
  function handleUser() {
    if (logged) {
      setUserActive(!userActive);
      setBurguerActive(false);
    } else {
      router.push({ pathname: "/log-in" });
    }
  }

  return (
    <Root>
      <User onClick={handleUser}></User>
      {userActive ? (
        <Dropdown>
          <MenuOption
            onClick={() => {
              router.push({ pathname: "/profile" });
              setUserActive(!userActive);
            }}
          >
            <MenuText color="#343538">MI PERFIL</MenuText>
          </MenuOption>
          <MenuOption
            onClick={() => {
              localStorage.removeItem("auth_token");
              setLogged(false);
              setUserActive(!userActive);
              router.push({ pathname: "/" });
            }}
          >
            <MenuText color="#343538">CERRAR SESION</MenuText>
          </MenuOption>
        </Dropdown>
      ) : null}
      <BurguerContainer>
        <Burguer onClick={handleBurguer} />
      </BurguerContainer>
      {burguerActive ? (
        <Dropdown>
          <MenuOption
            onClick={() => {
              router.push({ pathname: "/Top" });
              setBurguerActive(!burguerActive);
            }}
          >
            <MenuText color="#343538">TOP</MenuText>
          </MenuOption>
          <MenuOption
            onClick={() => {
              router.push({ pathname: "/Bottom" });
              setBurguerActive(!burguerActive);
            }}
          >
            <MenuText color="#343538">BOTTOM</MenuText>
          </MenuOption>
          <MenuOption
            onClick={() => {
              router.push({ pathname: "/Accesorios" });
              setBurguerActive(!burguerActive);
            }}
          >
            <MenuText color="#343538">ACCESORIES</MenuText>
          </MenuOption>
        </Dropdown>
      ) : null}
    </Root>
  );
}
