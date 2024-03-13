import React from "react";
import { Typography } from "@mui/material";
import Image from "next/image";
import gold from "../public/Assests/Gold.png";
import { FaYenSign } from "react-icons/fa";
import red from "../public/Assests/red.png";
import green from "../public/Assests/green_arrow.png";
import { MdOutlineSignalCellular4Bar } from "react-icons/md";

const ChakraCard = () => {
  return (
    <div className="border-slate-200 overflow-none max-w-wrap flex justify-center">
      <div class="divide-y divide-slate-200 flex flex-col justify-start p-2">
        <div className="flex justify-start divide-slate-200 p-3"></div>
        <div className="">
          <div className="flex">
            <MdOutlineSignalCellular4Bar />
            <h1 className="font-bold font-lg ml-2">Natural Resources</h1>
          </div>
          <h1 className="font-bold ml-4">Price</h1>
        </div>
        <div className="flex justify-center wrap p-2">
          <div className="flex justify-start">
            <Image src={gold} className="ml-0" />
            <h1 className="font-bold ml-2">Gold</h1>
          </div>
          <div className="flex ml-2">
            <FaYenSign className="mt-1" />
            <h2 className="font-bold">72,188.3</h2>
            <h2 className="text-red-500 ml-4">-4.06%</h2>
            <Image src={red} className="rounded-full w-5 h-5 mt-1" />
          </div>
        </div>
        <div className="flex justify-center wrap p-2">
          <div className="flex justify-start">
            <Image src={gold} className="ml-1" />
            <h1 className="font-bold ml-2">Zinc</h1>
          </div>
          <div className="flex ml-2">
            <FaYenSign className="mt-1" />
            <h2 className="font-bold">72,188.3</h2>
            <h2 className="text-red-500 ml-4">-0.33%</h2>
            <Image src={green} className="rounded-full w-5 h-5 mt-1" />
          </div>
        </div>
        <div className="flex justify-center wrap p-2">
          <div className="flex justify-start ml-1">
            <Image src={gold} className="ml-2" />
            <h1 className="font-bold ml-2">Oil/Gas</h1>
          </div>
          <div className="flex">
            <FaYenSign className="mt-1" />
            <h2 className="font-bold">72,188.3</h2>
            <h2 className="text-red-500 ml-4">-4.06%</h2>
            <Image src={red} className="rounded-full w-5 h-5 mt-1" />
          </div>
        </div>
        <div className="flex justify-center wrap p-2">
          <div className="flex justify-start">
            <Image src={gold} className="ml-0" />
            <h1 className="font-bold ml-2">Salt</h1>
          </div>
          <div className="flex">
            <FaYenSign className="mt-1" />
            <h2 className="font-bold">72,188.3</h2>
            <h2 className="text-red-500 ml-4">-4.06%</h2>
            <Image src={red} className="rounded-full w-5 h-5 mt-1" />
          </div>
        </div>
        <div className="flex justify-center wrap p-2">
          <div className="flex justify-start ml-4">
            <Image src={gold} className="ml-0" />
            <h1 className="font-bold ml-2">Diamond</h1>
          </div>
          <div className="flex">
            <FaYenSign className="mt-1" />
            <h2 className="font-bold">72,188.3</h2>
            <h2 className="text-red-500 ml-4">-4.06%</h2>
            <Image src={red} className="rounded-full w-5 h-5 mt-1" />
          </div>
        </div>
        <div className="flex justify-start wrap p-2">
          <div className="flex justify-start">
            <Image src={gold} className="ml-0" />
            <h1 className="font-bold ml-2">Carbon</h1>
          </div>
          <div className="flex ">
            <FaYenSign className="mt-1" />
            <h2 className="font-bold">72,188.3</h2>
            <h2 className="text-red-500 ml-4">-4.06%</h2>
            <Image src={red} className="rounded-full w-5 h-5 mt-1" />
          </div>
        </div>
        <div className="flex justify-start wrap p-2">
          <div className="flex justify-start">
            <Image src={gold} className="ml-0" />
            <h1 className="font-bold ml-2">Cast</h1>
          </div>
          <div className="flex ">
            <FaYenSign className="mt-1" />
            <h2 className="font-bold">72,188.3</h2>
            <h2 className="text-red-500 ml-4">-4.06%</h2>
            <Image src={red} className="rounded-full w-5 h-5 mt-1" />
          </div>
        </div>
        <div className="flex justify-start wrap p-22">
          <div className="flex justify-start">
            <Image src={gold} className="ml-0" />
            <h1 className="font-bold ml-2">Ore</h1>
          </div>
          <div className="flex ">
            <FaYenSign className="mt-1" />
            <h2 className="font-bold">72,188.3</h2>
            <h2 className="text-red-500 ml-4">-4.06%</h2>
            <Image src={red} className="rounded-full w-5 h-5 mt-1" />
          </div>
        </div>
        <div className="flex justify-start wrap p-2">
          <div className="flex justify-start">
            <Image src={gold} className="ml-0" />
            <h1 className="font-bold ml-2">Iron</h1>
          </div>
          <div className="flex ">
            <FaYenSign className="mt-1" />
            <h2 className="font-bold">72,188.3</h2>
            <h2 className="text-red-500 ml-4">-4.06%</h2>
            <Image src={red} className="rounded-full w-5 h-5 mt-1" />
          </div>
        </div>
        <div className="flex justify-start wrap p-2">
          <div className="flex justify-start">
            <Image src={gold} className="ml-0" />
            <h1 className="font-bold ml-2">Cobalt</h1>
          </div>
          <div className="flex ">
            <FaYenSign className="mt-1" />
            <h2 className="font-bold">72,188.3</h2>
            <h2 className="text-red-500 ml-4">-4.06%</h2>
            <Image src={red} className="rounded-full w-5 h-5 mt-1" />
          </div>
        </div>
        <div className="flex justify-start wrap p-2">
          <div className="flex justify-start">
            <Image src={gold} className="ml-0" />
            <h1 className="font-bold ml-2">Coal</h1>
          </div>
          <div className="flex ">
            <FaYenSign className="mt-1" />
            <h2 className="font-bold">72,188.3</h2>
            <h2 className="text-red-500 ml-4">-4.06%</h2>
            <Image src={red} className="rounded-full w-5 h-5 mt-1" />
          </div>
        </div>
        <div className="flex justify-start wrap p-22">
          <div className="flex justify-start">
            <Image src={gold} className="ml-0" />
            <h1 className="font-bold ml-2">Suit</h1>
          </div>
          <div className="flex ">
            <FaYenSign className="mt-1" />
            <h2 className="font-bold">72,188.3</h2>
            <h2 className="text-red-500 ml-4">-4.06%</h2>
            <Image src={red} className="rounded-full w-5 h-5 mt-1" />
          </div>
        </div>
        <div className="flex justify-center p-2 divide-slate-200"></div>
      </div>
    </div>
  );
};

export default ChakraCard;
