import { BrowserRouter, Link, Route, Routes } from "react-router";

import "./App.css";
import { Home } from "./Home";
import { Page1 } from "./Page1";
import { Page1DetailA } from "./Page1DetailA";
import { Page1DetailB } from "./Page1DetailB";
import { Page2 } from "./Page2";
import { Page404 } from "./Page404";
import { UrlParameter } from "./UrlParameter";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/page1">
          <Route index element={<Page1 />}></Route>
          <Route path="detailA" element={<Page1DetailA />}></Route>
          <Route path="detailB" element={<Page1DetailB />}></Route>
        </Route>

        <Route path="/page2">
          <Route index element={<Page2 />}></Route>
          <Route path=":id" element={<UrlParameter />}></Route>
        </Route>

        <Route path="*" element={<Page404 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
