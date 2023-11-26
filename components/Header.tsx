"use client";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import Button from "./buttons/Button";
import Restaurant from "./Location/RestaurantLocation";

const Info: React.FC = () => (
  <div className="flex flex-col pt-5">
    <div className="flex flex-col pt-5" style={{ position: "relative", top: "25px" }}>
      <div className="flex flex-row justify-end text-right items-end  max-w-[1745px] px-4 ">
        <div>
          <Image src="/icons/Phone.png" alt="logo" width={90} height={90} className="w-full h-full object-contain" />
        </div>
        <div className="flex flex-col">
          <p className="w-full pl-2 text-2xl font-bold text-[#B5E742]"> 05 234 567 89</p>
        </div>
      </div>
      <p className="w-full pl-2 text-1xl text-[#ffff] max-w-[1745px] text-right px-5">greenrata@contact.com</p>
    </div>
  </div>
);

interface NavigationProps {
  nav: boolean;
  handleNav: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ nav, handleNav }) => (
  <div className="flex justify-between items-center h-30 max-w-[1700px] mx-auto px-4 text-white">
   
      <div className="relative">
        <Image src="/LOGO HEADER.png" alt="logo" width={130} height={130} className="w-full h-full object-contain" />
      </div>
      <ul className="hidden md:flex">
        <li className="p-4 text-1xl hover:text-[#407A52] cursor-pointer "> <a href="#home"> Home</a></li>
        <li className="p-4 text-1xl hover:text-[#407A52] cursor-pointer"> <a href="#about"> About Us </a></li>
        <li className="p-4 text-1xl hover:text-[#407A52] cursor-pointer"> <a href="#specialities">Specialities</a></li>
        <li className="p-4 text-1xl hover:text-[#407A52] cursor-pointer"> <a href="#contact">Reservation</a></li>
        <li className="p-4 text-1xl hover:text-[#407A52] cursor-pointer"><a href="#actuality">Actuality</a></li>
        <li className="p-4 text-1xl hover:text-[#407A52] cursor-pointer"><a href="#contact">Contact</a></li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#B5E742] m-4">reen Rata</h1>
        <li className="p-4 border-b border-gray-600">Home</li>
        <li className="p-4 border-b border-gray-600">About Us</li>
        <li className="p-4 border-b border-gray-600">Specialities</li>
        <li className="p-4 border-b border-gray-600">Reservation</li>
        <li className="p-4 border-b border-gray-600">Actuality</li>
        <li className="p-4">Contact</li>
      </ul>
    </div>
  
);


const MainContent: React.FC = () => (
  <div className="flex flex-row">
    <div className="flex flex-row">
      <div className="p-20 w-2/5 ">
        <Image src="/branch with leaves.png" alt="logo" width={300} height={300} className=" object-contain" />
      </div>
      <div className="p-20 w-3/5">
        <h1 className="w-full pl-10 font-bold text-[#ffff] text-left text-uppercase text-7xl">
          {" "}
          Discover the Special Flavors of
        </h1>
        <h1 className="w-full pl-10  font-bold text-[#ffff] text-left text-uppercase text-8xl font mt-5">Indonisien Cuisine</h1>
        <div className="flex items-center space-x-2 px-10 mt-10">
          <Image src="/branch with leaves WHITE.png" alt="logo" width={70} height={70} className=" object-contain" />
          <Button title={"Contact Us"} src="/arrow green.png" color={"#ffff"} />
        </div>
      </div>
    </div>
  </div>
);

const HeaderComponent: React.FC = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full h-[900px]" id="home">
      <div
        className="w-full h-[800px] bg-contain bg-center"
        style={{
          backgroundImage: "url(/banner.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Info />
        <Navigation nav={nav} handleNav={handleNav} />
        <MainContent />
        <Restaurant />
      </div>
    </div>
  );
};

export default HeaderComponent;
