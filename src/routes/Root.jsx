import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <div className="w-10/12 mx-auto my-5">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
