import { BrowserRouter, Route, Routes } from "react-router";
import { Top } from "../pages/Top";
import { Users } from "../pages/Users";
import { DefaultLayout } from "../templates/DefaultLayout";
import { HeaderOnly } from "../templates/HeaderOnly";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Top />} />
        </Route>

        <Route path="/users" element={<HeaderOnly />}>
          <Route index element={<Users />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
