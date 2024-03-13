import React from "react";
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";

const Dashboard = () => {
  return (
    <>
      <div className="flex text-gray-600 w-fill bg-inherit hover:bg-[#49516f] hover:text-white focus h-9  justify-center mt-2 overflow-hidden">
        <Link href="/dashboard" className="flex">
          <div className="m-1">
            <AiOutlineHome />
          </div>
          <span>
            <h1>Dashboard</h1>
          </span>
        </Link>
      </div>
    </>
  );
};

export default Dashboard;
