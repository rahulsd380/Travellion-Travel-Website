import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = () => {

  return (
    <div className="py-3">
      <div className="flex justify-between items-center gap-2">
        <div className="flex items-center gap-3">
          <img
            className="w-7"
            src="/public/logo.png"
            alt=""
          />
          <h1 className="text-xl md:text-2xl font-bold text-white">
            Travellion
          </h1>
        </div>

        <div className="hidden md:flex md:items-center md:gap-8">
          <Link
            to={"/"}
            className="hover:text-orange-400 transition duration-300 text-gray-100 font-semibold "
          >
            Home
          </Link>
          <Link
            to={"/aboutUs"}
            className="hover:text-orange-400 transition duration-300 text-gray-100 font-semibold "
          >
            Explore
          </Link>

          <Link
            to={"/blogs"}
            className="hover:text-orange-400 transition duration-300 text-gray-100 font-semibold "
          >
            Travel
          </Link>
          <Link
            to="faq"
            className="hover:text-orange-400 transition duration-300 text-gray-100 font-semibold "
          >
            Blog
          </Link>
          <Link
            to="faq"
            className="hover:text-orange-400 transition duration-300 text-gray-100 font-semibold "
          >
            Pricing
          </Link>
        </div>

        <div className="flex items-center">
            <div className="hidden md:flex items-center gap-5">
              <Link to={"/login"}>
                <button className="text-gray-100 font-semibold  rounded-md transition duration-300 hover:text-orange-400">
                  Login
                </button>
              </Link>

              <Link to={"/signup"}>
                <button className="text-white bg-orange-400 font-semibold border-blue-400 rounded-md py-2 px-4">
                  Sign Up
                </button>
              </Link>
            </div>
        </div>
        <Sidebar></Sidebar>
      </div>
    </div>
  );
};

export default Navbar;
