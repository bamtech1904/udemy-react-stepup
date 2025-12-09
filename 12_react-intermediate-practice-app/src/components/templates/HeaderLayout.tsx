import type { FC } from "react";
import { Header } from "@/components/organisms/layout/Header";
import { Outlet } from "react-router";

export const HeaderLayout: FC = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
