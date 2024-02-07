import { IoMenuOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { MdOutlineHelpCenter } from "react-icons/md";
import { LuFileQuestion } from "react-icons/lu";

const Sidebar = () => {

  return (
    <div className="block md:hidden">
      <div className="drawer">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer-4" className="drawer-button">
            <IoMenuOutline className="text-blue-400 text-3xl cursor-pointer"></IoMenuOutline>
          </label>
        </div>
        <div className="drawer-side z-40">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          <ul className="menu p-4 w-80 min-h-full bg-gray-800 text-gray-100">
            {/* Sidebar content here */}
            <div className="flex items-center gap-3">
          <img
            className="w-7"
            src="/public/logo.png"
            alt=""
          />
          <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            Travellion
          </h1>
        </div>

            <li className="space-y-3 mt-8">
              <Link
                to={"/"}
                className="text-gray-500 font-semibold hover:text-blue-400 transition duration-300 flex items-center gap-3 text-base"
              >
                <GoHome></GoHome> Home
              </Link>
              <Link
                to={"/"}
                className="text-gray-500 font-semibold hover:text-blue-400 transition duration-300 flex items-center gap-3 text-base"
              >
                <MdOutlineHelpCenter></MdOutlineHelpCenter> About Us
              </Link>
              <Link
                to={"/"}
                className="text-gray-500 font-semibold hover:text-blue-400 transition duration-300 flex items-center gap-3 text-base"
              >
                <LuFileQuestion></LuFileQuestion> FAQ
              </Link>
              
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;