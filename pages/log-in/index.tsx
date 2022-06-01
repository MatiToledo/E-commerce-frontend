import LogIn from "components/log-in";
import MainLayaout from "components/main-layout";
import type { NextPage } from "next";

const LogInPage: NextPage = () => {
  return (
    <MainLayaout>
      <LogIn></LogIn>
    </MainLayaout>
  );
};

export default LogInPage;
