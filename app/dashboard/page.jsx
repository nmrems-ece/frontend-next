"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Menu from "@/components/Menu";
import { IoIosArrowDown } from "react-icons/io";
import AppBar from "@/components/AppBar";
import Card from "@/components/Card";
import Notification from "../notification/notification";
import Dashboard from "./Dashboard";
import Mapping from "@/components/Mapping";
import Prices from "@/components/Prices";
import Settings from "@/components/Settings";
import LogOut from "@/components/LogOut";
import Logo from "../../public/webimage.jpg";
import Image from "next/image";
import Map from "../../public/map.jpg";
import { FaBars, FaTimes } from "react-icons/fa";
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
import "./dashboard.css";
import { IoMenuSharp } from "react-icons/io5";
import SideBar from "@/components/SideBar";
import Container from "@/components/Container";
import discovery1 from "../../public/Assests/discovery1.jpeg";

const page = ({ title, price, image, rate, arrow }) => {
  const router = useRouter();

  const [isClick, setisClick] = useState(false);
  const togggleNavbar = () => {
    setisClick(!isClick);
  };

  const HandleMap = () => {
    router.push("/map");
  };

  return (
    <div className="flex h-screen w-screen ">
      <div className="flex h-full flex-wrap justify-center bg-[#1F263E] ">
        <nav className="h-fit flex flex-wrap mt-0 bg-[#1F263E]">
          <div className="md:px-4 lg:px-8 h-100 bg-[#1F263E]">
            <div className="flex items-center justify-between bg-[#1F263E] h-100 flex-col">
              <div className="flex items-center flex-col bg-[#1F263E]">
                <div className="flex flex-col bg-[#1F263E]">
                  <a href="/" className="text-white min-w-16 flex grow">
                    <Image src={Logo} className=" max-w-24 " />
                  </a>
                  <div className="h-100 w-full bg-[#1F263E]"></div>
                </div>
              </div>
              <div className="hidden md:block bg-[#1F263E]">
                <div className="ml-4 flex items-center h-screen space-x-4 flex-col bg-[#1F263E]">
                <div className="p-2 flex justify-center ">
                  <h1 className="font-2xl font-bold text-white">
                    Quick Acesss
                  </h1>
                </div>
                <div className="hover:bg-[1f26E]">
                  <Dashboard className="hover:bg-[1F267E]" />
                </div>
                <Mapping />
                <div className="p-2 flex justify-center ">
                  <h1 className="font-2xl font-bold text-white">Service</h1>
                </div>
                <div>
                  <Information />
                  <Prices />
                </div>
                <div className="p-2 flex justify-center ">
                  <h1 className="font-2xl font-bold text-white">Account</h1>
                </div>
                <div>
                  <Notification />
                </div>
                <div>
                  <Settings />
                </div>
                <div>
                  <Faq />
                </div>
                <div className="bottom-0">
                  <LogOut />
                </div>
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
            <div className="md:hidden h-100">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 h-100 mx-4">
              <div className="p-2 flex justify-center ">
                  <h1 className="font-2xl font-bold text-white">
                    Quick Acesss
                  </h1>
                </div>
                <div className="hover:bg-[1f26E]">
                  <Dashboard className="hover:bg-[1F267E]" />
                </div>
                <Mapping />
                <div className="p-2 flex justify-center ">
                  <h1 className="font-2xl font-bold text-white">Service</h1>
                </div>
                <div>
                  <Information />
                  <Prices />
                </div>
                <div className="p-2 flex justify-center ">
                  <h1 className="font-2xl font-bold text-white">Account</h1>
                </div>
                <div>
                  <Notification />
                </div>
                <div>
                  <Settings />
                </div>
                <div>
                  <Faq />
                </div>
                <div className="bottom-0">
                  <LogOut />
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>
      <div className=" flex h-screen">
      <div className="flex">
      <div className="bg-slate-500 justify-between h-screen ">
        <div className=" flex flex-wrap bg-white justify-between ">
          <AppBar className="flex min-w-100" />
        </div>

        <div className="fill flex flex-wrap bg-gray-200 p-2 justify-center items-center overflow-hidden">
          <Card
            title="Gold"
            image={gold}
            price="45,7546"
            rate="0.864"
            arrow={red}
          />
          <Card
            title="Silver"
            image={silver}
            price="78,345"
            rate="0.986"
            arrow={green}
          />
          <Card
            title="Colbat"
            image={carbon}
            price="45,7546"
            rate="0.864"
            arrow={green}
          />
          <Card
            title="Gold"
            image={salt}
            price="45,7546"
            rate="0.864"
            arrow={red}
          />
          <div className="bg-gray-200 flex flex-col-2  flex-wrap m-2 overflow-hidden  ">
            <div className="m-2 overflow-hidden flex flex-wrap sm:min-3/6 hover:cursor-pointer transition hover:scale-220 hover:translate-y-5  hover:scale-100 hover:transform overflow-hidden">
              <Image src={Map} onClick={HandleMap} className="" />
            </div>
          </div>
          <div className=" overflow-hidden bg-white justify-self-center justify-self-center items-center flex justify-center items-center border-solid border-2 ml-6 border-slate-500">
            <ChakraCard className="flex justify-self-center items-center border-solid border-2 border-slate-500" />
            </div>
            </div>
        </div>
      </div>
      </div>
    </div>
  );
};
export default page;
