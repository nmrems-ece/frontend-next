import React from "react";
import Image from "next/image";
import { FaYenSign } from "react-icons/fa";

const Card = ({ title, price, image, rate, arrow }) => {
  return (
    <>
      <div className="w-64 h-28 bg-white p-4 m-2.5 rounded-lg border">
        <div className="flex flex-wrap rounded-lg">
          <div className="max-w-full flex rounded-lg">
            <Image src={image} className="rounded-full w-8 p " />
            <h2>{title}</h2>
          </div>
          <div className="flex">
            <FaYenSign />
            <span>
              <h1>{price}</h1>
            </span>
          </div>
          <div className="flex pt-8">
            <h2 className="text-red-500">-{rate}%</h2>
            <Image src={arrow} className="rounded-full w-5 h-5 mt-1" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
