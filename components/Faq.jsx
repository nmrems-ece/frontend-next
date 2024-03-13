
import React from "react";
import Link from "next/link";
import { BsQuestionOctagon } from "react-icons/bs";;

const Faq = () => {
  return (
    <>
      <div className="flex text-gray-600 bg-inherit hover:bg-[#49516f] hover:text-white focus h-9  justify-center mt-2 overflow-hidden">
        <Link href="/news" className="flex">
            <BsQuestionOctagon className="mt-1"/>
          <span className=" ml-2">
            <h1>FAQ</h1>
          </span>
        </Link>
      </div>
    </>
  );
};

export default Faq;
