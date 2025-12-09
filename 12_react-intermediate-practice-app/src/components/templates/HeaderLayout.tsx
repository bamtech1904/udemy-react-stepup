import type { FC } from "react";
import { Header } from "../organisms/layout/Header";
import { Outlet } from "react-router";

export const HeaderLayout: FC = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
