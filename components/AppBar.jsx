"use client";
import React from "react";
import { Avatar } from "@mui/material";
import { CiSearch } from "react-icons/ci";
import { PiTelegramLogoThin } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";

const AppBar = () => {
  const router = useRouter();
  const ToProfile = () => {
    router.push("/profile");
  };
  return (
    <div className="flex justify-between grow overflow-hidden mr-4">
      <div className="bg-white p-3 flex  grow ">
        <div className="flex  grow justify-between  rounded-full bg-inherit ">
          <div className="flex overflow-none bg-gray-200 border rounded-full w-64 ">
            <span className="">
              <CiSearch className="m-2" />
            </span>
            <input
              className="outline-none bg-inherit rounded-full w-full "
              type="search"
              name="search"
              id="search"
            />
          </div>
          <div className="flex justify-between mr-6 ml-4 sm:justify-between">
            <Avatar sizes="10" className="" onClick={ToProfile} />
            <IoSettingsOutline className="ml-1 mt-2.5"/>
            <PiTelegramLogoThin className="ml-1 mt-2.5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppBar;
