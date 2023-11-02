import { Outlet } from "react-router-dom";
import { Navbar } from "../Components/Navbar/Navbar";
import Footer from "../Page/Shared/Footer/Footer";

const Layout = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Layout;
