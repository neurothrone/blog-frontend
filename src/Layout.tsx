import { Outlet } from "react-router";
import NavBar from "./components/NavBar.tsx";

const Layout = () => {
  return (
    <>
      <NavBar/>
      <main>
        <Outlet/>
      </main>
    </>
  );
};

export default Layout;
