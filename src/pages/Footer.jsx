import logo1 from "../assets/Logo/logo 1.png";
import logo2 from "../assets/Logo/logo 2.png";
import logo3 from "../assets/Logo/logo 3.png";
import logo4 from "../assets/Logo/logo 4.png";
import logo5 from "../assets/Logo/logo 5.png";
import logo6 from "../assets/Logo/logo 6.png";
import logo7 from "../assets/Logo/logo 7.png";
import logo8 from "../assets/Logo/logo 8.png";

import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div
      className="w-full min-h-screen flex flex-col justify-between items-center px-10 md:px-20 md:pt-20 pb-10"
      id="contact"
    >
      <div className="w-full grid grid-cols-4 md:grid-cols-8 gap-5 md:gap-10 mb-20 md:mb-40 mt-10 md:mt-20">
        <img src={logo1} className="size-[60px]" />
        <img src={logo2} className="size-[60px]" />
        <img src={logo3} className="size-[60px]" />
        <img src={logo4} className="size-[60px]" />
        <img src={logo5} className="size-[60px]" />
        <img src={logo6} className="size-[60px]" />
        <img src={logo7} className="size-[60px]" />
        <img src={logo8} className="size-[60px]" />
      </div>

      <div className="flex flex-col items-center justify-center border-b border-[#741906]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-14">
          <div className="flex flex-col items-center md:items-start">
            <p className="font-serif font-bold text-[30px] text-[#741906] mb-4">
              Your<span className="font-light">Car</span>
            </p>

            <p className="w-full mb-4 opacity-70 text-[14px]">
              We are known for luxurious and premium chaffeur services
              worldwide. We are simply the best you can find.
            </p>
            <p className="w-full opacity-70 text-[14px]">
              we are dedicated to providing our customers with a first-class car
              buying, selling, and renting experience.
            </p>
          </div>

          <div className="flex flex-col items-center mt-7">
            <p className="text-[#741906] text-[25px]">News Letter</p>

            <p className="w-full opacity-70 text-center text-[14px]">
              Subscribe to our news letter for updates, news and exclusive
              offers
            </p>

            <div className="w-full flex justify-between my-7">
              <input
                type="text"
                className="outline-none border border-[#00000050] hover:border-[#741906] transition-color duration-300 py-2 px-4 w-[200px]"
                placeholder="Email"
              />

              <button className="bg-[#741906] text-white px-4 py-2 outline-none hover:opacity-70 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center mt-7">
            <p className="text-[25px] text-[#741906]">Contact</p>

            <div className="flex flex-col justify-start">
              <div className="flex items-center mb-5">
                <FaLocationDot className="size-7 mr-3 text-[#12273d]" />
                <p className="opacity-70">
                  2038 2nd Avenue, Las Vegas, United States
                </p>
              </div>

              <div className="flex items-center mb-5">
                <FaPhoneAlt className="size-6 mr-3 text-[#12273d]" />
                <div>
                  <p className="opacity-70">01444773421423</p>
                  <p className="opacity-70">01477678449405</p>
                </div>
              </div>

              <div className="flex items-center mb-5">
                <IoMdMail className="size-7 mr-3 text-[#12273d]" />
                <p className="opacity-70">info@YourCar.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-10 mb-4">
          <a href="#">
            <FaFacebook className="size-9 text-[#12273d] hover:opacity-70 transition-all duration-300" />
          </a>
          <a href="#">
            <FaTwitter className="size-9 text-[#12273d] hover:opacity-70 transition-all duration-300" />
          </a>
          <a href="#">
            <FaInstagram className="size-9 text-[#12273d] hover:opacity-70 transition-all duration-300" />
          </a>
        </div>
      </div>

      <p className="text-[14px] opacity-70 mt-3">
        © Copyright {currentYear} · <strong>YourCar</strong> All rights reserved
      </p>
    </div>
  );
};
