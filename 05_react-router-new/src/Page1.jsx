import { Link, Outlet, useNavigate } from "react-router";

export const Page1 = () => {
  const arr = [...Array(100).keys()];
  console.log(arr);

  const navigate = useNavigate();

  const onclickDetailA = () => {
    navigate("/page1/detailA");
  };

  return (
    <div>
      <h1>Page1ページです</h1>
      <Link to={{ pathname: "/page1/detailA", state: arr }}>DetailA</Link>
      <br />
      <Link to="/page1/detailB">DetailB</Link>
      <br />
      <button onClick={onclickDetailA}>DetailA</button>
      <Outlet />
    </div>
  );
};
