import React from "react";
import Link from "next/link";
import { RiLoopLeftFill } from "react-icons/ri";

const Mapping = () => {
  return (
    <>
      <div className="flex text-gray-600 bg-inherit hover:bg-[#49516f] hover:text-white focus h-9  justify-center mt-2 overflow-hidden">
        <Link href="/mapping" className="flex">
          <div className="ml-1 mt-2">
            <RiLoopLeftFill />
          </div>
          <span className=" ml-2">
            <h1>Mapping</h1>
          </span>
        </Link>
      </div>
    </>
  );
};

export default Mapping;
