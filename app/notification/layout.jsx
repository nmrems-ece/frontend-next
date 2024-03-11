import React from "react";
import Notification from "../notification/notification";
import Mapping from "@/components/Mapping";
import Prices from "@/components/Prices";
import Settings from "@/components/Settings";
import LogOut from "@/components/LogOut";
import Logo from "../../public/webimage.jpg";
import Dashboard from "../dashboard/Dashboard";
import Information from "@/components/Information";
import Faq from "@/components/Faq";
import Image from "next/image";

const layout = () => {
  return (
    <div className="flex">
      <div className="bg-gray-200 w-1/6 flex">
        <div className="bg-[#1F263E] w-screen">
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
                <div className="bottom-0">
                  <LogOut />
                </div>
              </li>
            </ul>
          </nav>
        </div>
        <div className="4/6">
          <div className="h-32 border">
            <h1>Notification</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default layout;
