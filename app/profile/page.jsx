"use client";
import SideBar from "@/components/SideBar";
import React, { useState } from "react";
import { RiLoopLeftFill } from "react-icons/ri";
import Image from "next/image";
import Logo from "../../public/webimage.jpg";
import Information from "@/components/Information";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

const Profile = () => {
  const [isClick, setisClick] = useState(false);
  const togggleNavbar = () => {
    setisClick(!isClick);
  };
  return (
    <div className=" h-screen flex flex-col ">
      <nav className="bg-red-500 sm:1/6  ">
        <div className="mx-auto  md:px-6 lg:px-8 ">
          <div className="flex items-center justify-between bg-blue-500 h-16 flex-col">
            <div className="flex items-center flex-col">
              <div className="flex flex-col">
                <a href="/" className="text-white min-w-16 h-fit bg-green-500 flex grow">
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
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
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
              <Information/>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Profile;
