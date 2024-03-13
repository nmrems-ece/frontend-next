"use client";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Menu from "@/components/Menu";
import { IoIosArrowDown } from "react-icons/io";
import AppBar from "@/components/AppBar";
import Card from "@/components/Card";
import Notification from "../notification/notification";
import Mapping from "@/components/Mapping";
import Prices from "@/components/Prices";
import Settings from "@/components/Settings";
import LogOut from "@/components/LogOut";
import Logo from "../../public/webimage.jpg";
import Image from "next/image";
import Map from "../../public/map.jpg";
import Mineral from "../../public/minerals_list.jpg";
import Mineral2 from "../../public/mineral_list_2.jpg";
import Information from "@/components/Information";
import Faq from "@/components/Faq";
import ChakraCard from "@/components/ChakraCard";
import gold from "../../public/Assests/Gold.png";
import red from "../../public/Assests/red.png";
import green from "../../public/Assests/green_arrow.png";
import lead from "../../public/Assests/mineral23.png";
import molyd from "../../public/Assests/molyb.png";
import salt from "../../public/Assests/salt.png";
import silver from "../../public/Assests/silver.png";
import diamond from "../../public/Assests/mineral.png";
import carbon from "../../public/Assests/mineral4.png";
import iron_ore from "../../public/Assests/silver2.png";
import marble from "../../public/Assests/mineral3.png";
import oil from "../../public/Assests/mineral8.png";
import clay from "../../public/Assests/mineral10.png";
import cast from "../../public/Assests/mineral19.png";
import MediaCard from "@/components/NewsCard";
import MainNewsCard from "@/MainNewsCard";
import { IoMenuSharp } from "react-icons/io5";
import SideBar from "@/components/SideBar";
import Container from "@/components/Container";
import discovery1 from "../../public/Assests/discovery1.jpeg";

const page = () => {
  const [isClick, setisClick] = useState(false);
  const togggleNavbar = () => {
    setisClick(!isClick);
  };
  return (
    <div className="flex bg-green-500 h-screen w-screen ">
      <div className="flex w-1/6">
        <div className="bg-[#1F263E] h-screen  sm:block">
          <div className=" flex flex-col-2 ">
            <nav className="sm:1/6  ">
              <div className="mx-auto  md:px-6 lg:px-8 ">
                <div className="flex items-center justify-between bg-blue-500 h-16 flex-col">
                  <div className="flex items-center flex-col">
                    <div className="flex flex-col">
                      <a
                        href="/"
                        className="text-white min-w-16 h-fit bg-green-500 flex grow"
                      >
                        <Image src={Logo} className=" max-w-24 " />
                      </a>
                    </div>
                  </div>
                  <div className="hidden md:block bg-green-500">
                    <div className="ml-4 flex items-center h-screen space-x-4 flex-col bg-blue-500">
                      <a
                        href="/"
                        className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                      >
                        Home
                      </a>
                      <a
                        href="/"
                        className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                      >
                        Services
                      </a>
                      <a
                        href="/"
                        className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                      >
                        Information
                      </a>{" "}
                      <a
                        href="/"
                        className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                      >
                        News
                      </a>{" "}
                      <a
                        href="/"
                        className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                      >
                        Contact
                      </a>
                      <a
                        href="/"
                        className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                      >
                        Quick Access
                      </a>{" "}
                      <a
                        href="/"
                        className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                      >
                        Contact
                      </a>
                      <a
                        href="/"
                        className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                      >
                        Contact
                      </a>
                    </div>
                  </div>
                  <div className="md:hidden flex items-center">
                    <button
                      className="inline-flex items-center justify-center p-2 rounded-md 
                text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset 
              focus:ring-white"
                      onClick={togggleNavbar}
                    >
                      {isClick ? <FaTimes /> : <FaBars />}
                    </button>
                  </div>
                </div>
              </div>
              {isClick && (
                <div className="md:hidden">
                  <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
                    <a
                      href="/"
                      className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
                    >
                      Home
                    </a>
                    <a
                      href="/"
                      className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
                    >
                      Services
                    </a>
                    <a
                      href="/"
                      className="text-white block  hover:bg-white hover:text-black rounded-lg p-2"
                    >
                      Information
                    </a>{" "}
                    <a
                      href="/"
                      className="text-white block  hover:bg-white hover:text-black rounded-lg p-2"
                    >
                      News
                    </a>{" "}
                    <a
                      href="/"
                      className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
                    >
                      Quick Access
                    </a>{" "}
                    <a
                      href="/"
                      className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
                    >
                      Contact
                    </a>
                    <a
                      href="/"
                      className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                    >
                      Contact
                    </a>
                    <a
                      href="/"
                      className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                    >
                      Contact
                    </a>
                    <Information />
                  </div>
                </div>
              )}
            </nav>
          </div>
          <div className="h-screen w-5/6 bg-red-500"></div>
        </div>
       
      </div>
    </div>
  );
};

export default page;
