import React from "react";
import Link from "next/link";
import { CiGift } from "react-icons/ci";

const Prices = () => {
  return (
    <>
      <div className="flex text-gray-600 bg-inherit hover:bg-[#49516f] hover:text-white focus h-9  justify-center mt-2 overflow-hidden">
        <Link href="/notification" className="flex  justify-between">
          <div className="m-1">
            <CiGift />
          </div>
          <span className="ml-1">
            <h1>Prices</h1>
          </span>
        </Link>
      </div>
    </>
  );
};

export default Prices;
