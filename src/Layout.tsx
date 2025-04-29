import { Outlet } from "react-router";
import NavBar from "./components/NavBar.tsx";
import "./Layout.css";

const Layout = () => {
  return (
    <>
      <NavBar/>
      <main>
        <Outlet/>
      </main>
      <footer>
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} BlogApp - All rights reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Layout;
