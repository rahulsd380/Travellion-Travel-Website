import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";


const Footer = () => {
  return (
    <div className="relative pt-40 md:pt-28">
        <div className="bg-white shadow-2xl border border-gray-500 py-4 md:py-10 px-5 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-5 w-5/6 md:w-9/12 mx-auto absolute left-10 md:left-44 bottom-[800px] md:bottom-[300px]">
            <h1 className="text-6xl text-gray-400">Our Newsletter</h1>
            <div className="flex items-center gap-2">
            <div className="">
                  <p className="mb-1 font-semibold text-gray-600">Your Email</p>
                  <div className="flex items-center gap-5">
                  <input
                    name="email"
                    className="bg-[#ffe8d4] outline-none px-2 py-2 rounded-md w-full"
                    type="email"
                    placeholder="Enter your email"
                  />

<button className="text-white bg-[#ff7757] font-semibold border-blue-400 rounded-md py-2 px-4">
                Subscribe
                </button>
                  </div>
                </div>
                
            </div>
        </div>
      <footer className="grid grid-cols-1 md:grid-cols-5 gap-5 bg-gray-800 py-20 px-5">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <img className="w-7" src="/public/logo.png" alt="" />
            <h1 className="text-xl md:text-2xl font-bold text-gray-200">
              Travellion
            </h1>
          </div>
          <p className="text-white text-sm">
            Copyright © Travellian 2020 All rights reserved
          </p>
        </div>

        <div className="flex flex-col gap-2">
            <h1 className="text-xl text-white mb-3 font-semibold">Menu</h1>
            <Link className="text-gray-300 hover:underline">Home</Link>
            <Link className="text-gray-300 hover:underline">Explore</Link>
            <Link className="text-gray-300 hover:underline">Travel</Link>
            <Link className="text-gray-300 hover:underline">Blog</Link>
            <Link className="text-gray-300 hover:underline">Pricing</Link>
        </div>

        <div className="flex flex-col gap-2">
            <h1 className="text-xl text-white mb-3 font-semibold">Information</h1>
            <Link className="text-gray-300 hover:underline">Destinations</Link>
            <Link className="text-gray-300 hover:underline">Supports</Link>
            <Link className="text-gray-300 hover:underline">Terms & Conditions</Link>
            <Link className="text-gray-300 hover:underline">Privacy</Link>
        </div>

        <div className="flex flex-col gap-2">
            <h1 className="text-xl text-white mb-3 font-semibold">Contact Info</h1>
            <Link className="text-gray-300 hover:underline">+123 456 789</Link>
            <Link className="text-gray-300 hover:underline">info@travellian.com</Link>
            <Link className="text-gray-300 hover:underline">1245, New Yourk, USA</Link>
        </div>

        <div className="flex flex-col gap-2">
            <h1 className="text-xl text-white mb-3 font-semibold">Follow us on</h1>
            <div className="flex items-center gap-3">
            <Link className="text-gray-300 hover:underline text-2xl hover:text-white transition duration-300"><FaFacebook></FaFacebook></Link> 
            <Link className="text-gray-300 hover:underline text-2xl hover:text-white transition duration-300"><FaPinterest></FaPinterest></Link> 
            <Link className="text-gray-300 hover:underline text-2xl hover:text-white transition duration-300"><FaInstagram></FaInstagram></Link> 
            <Link className="text-gray-300 hover:underline text-2xl hover:text-white transition duration-300"><IoLogoTwitter></IoLogoTwitter></Link> 
            </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
