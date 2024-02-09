import { FaAngleDown } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import Navbar from "../Navbar/Navbar";
import heroBg from "../../../public/images/heroBg.jpg"

const Hero = () => {
  return (
    <div className="">
      <div className="relative w-full">
        <img src={heroBg} className="w-full h-screen" />

        <div className="w-full absolute top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
          <div className="w-full pb-16 px-10">
            <Navbar></Navbar>
          </div>
          <div className="px-10">
            <h1 className="text-2xl md:text-3xl lg:text-6xl text-white mb-2 md:mb-5">
              Start your unforgettable <br /> journey with us.
            </h1>
            <p className="pb-10 text-gray-300">
              The best travel for your jouney begins now
            </p>
          </div>

          <div className="flex">
            <div className="bg-white p-10 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="">
                <p className="mb-1 font-semibold text-gray-600">Destination</p>
                <input
                  name="email"
                  className="bg-white outline-none px-2 py-2 border-b border-gray-600 w-full"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="">
                <p className="mb-1 font-semibold text-gray-600">Person</p>
                <div className="flex items-center">
                  <input
                    name="email"
                    className="bg-white outline-none px-2 py-2 border-b border-gray-600 w-full"
                    type="text"
                    placeholder="Enter your email"
                  />
                  <FaAngleDown className="text-gray-500"></FaAngleDown>
                </div>
              </div>
              <div className="">
                <p className="mb-1 font-semibold text-gray-600">Check in</p>
                <div className="flex items-center">
                  <input
                    name="email"
                    className="bg-white outline-none px-2 py-2 border-b border-gray-600 w-full"
                    type="text"
                    placeholder="Enter your email"
                  />
                  <FaAngleDown className="text-gray-500"></FaAngleDown>
                </div>
              </div>
              <div className="">
                <p className="mb-1 font-semibold text-gray-600">Check out</p>
                <div className="flex items-center">
                  <input
                    name="email"
                    className="bg-white outline-none px-2 py-2 border-b border-gray-600 w-full"
                    type="text"
                    placeholder="Enter your email"
                  />
                  <FaAngleDown className="text-gray-500"></FaAngleDown>
                </div>
              </div>
            </div>

            <div className="bg-[#ff7757] p-5 flex items-center gap-4 rounded-r-xl">
              <h1 className="text-2xl text-white">
                Book <br /> Now
              </h1>
              <FaArrowRightLong className="text-2xl text-white"></FaArrowRightLong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
