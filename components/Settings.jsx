import React from "react";
import Link from "next/link";
import { IoSettingsOutline } from "react-icons/io5";

const Settings = () => {
  return (
    <>
      <div className="flex text-gray-600 bg-inherit hover:bg-[#49516f] hover:text-white focus h-9  justify-center mt-2 overflow-hidden">
        <Link href="/notification" className="flex">
          <div className="m-1">
            <IoSettingsOutline />
          </div>
          <span>
            <h1>Settings</h1>
          </span>
        </Link>
      </div>
    </>
  );
};

export default Settings;
