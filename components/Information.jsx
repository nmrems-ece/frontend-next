import React from "react";
import Link from "next/link";
import { ImLibrary } from "react-icons/im";

const Information = () => {
  return (
    <>
      <div className="flex text-gray-600 bg-inherit hover:bg-[#49516f] hover:text-white focus h-9  justify-center mt-2 overflow-hidden">
        <Link href="/news" className="flex">
          <div className="ml-1 mt-2">
            <ImLibrary />
          </div>
          <span className=" ml-2">
            <h1>Information</h1>
          </span>
        </Link>
      </div>
    </>
  );
};

export default Information;
