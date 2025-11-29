import { Outlet } from "react-router";
import { Header } from "../atoms/layout/Header";

export const HeaderOnly = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
