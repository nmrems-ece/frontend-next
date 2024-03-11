"use client"
import React from "react";
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
import "./dashboard.css";
import { IoMenuSharp } from "react-icons/io5";
import SideBar from "@/components/SideBar";
import Container from "@/components/Container";
import discovery1 from "../../public/Assests/discovery1.jpeg";

const page = ({ title, price, image, rate, arrow }) => {
    const router = useRouter();
    const HandleMap = () => {
      router.push("/map");
    };
  
  return (
    <div className="flex bg-white h-screen w-screen">
      <div className="h-full w-full bg-gray-200 flex scroll">
        <div className="bg-gray-200 w-1/6 flex">
          <div className="bg-[#1F263E] w-screen ">
            <nav>
              <ul>
                <li>
                  <div>
                    <Image src={Logo} />
                  </div>
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
                  <div className="bottom-0 ">
                    <LogOut />
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="bg-white w-5/6">
          <AppBar />
          <div className="fill flex flex-wrap bg-white">
            <Card title="Gold" image={ gold}  price="45,7546" rate="0.864" arrow={red}/>
            <Card title="Silver" image={silver} price="78,345" rate="0.986" arrow={green}/>
            <Card title="Oil/Gas" image={ carbon}  price="45,7546" rate="0.864" arrow={green}/>
            <Card title="Gold" image={ salt}  price="45,7546" rate="0.864" arrow={red}/>
          </div>
          <div className="bg-white flex flex-wrap  justify-between m-2">
            <div className="w-3/6 h-screen m-2 overflow-hidden flex flex-wrap">
              <Image src={Map} onClick={HandleMap } />
            </div>
            <div className="1/6"></div>
            <div className="w-2/6 border-white overflow-hidden">
              <ChakraCard />
            </div>
          </div>
          <div>
            <div className="bg-inherit overflow-hiddden m-2">
              <MediaCard
                news=" Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica"
                image={discovery1}
                title="Bauxite Ore Discovered in Niger State"
              />
            </div>
            <div className="bg-inherit overflow-hiddden m-2">
              <MediaCard
                news=" Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica"
                image={discovery1}
                title="Bauxite Ore Discovered in Niger State"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default page;
