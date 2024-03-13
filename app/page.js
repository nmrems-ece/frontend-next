"use client";
import { Link } from "@chakra-ui/next-js";
import Welcome from ".././components/Welcome";
import ChakraCard from "@/components/ChakraCard";
import { dividerClasses } from "@mui/material";


// app/page.tsx

export default function Page() {
  return <div className="flex justify-center items-center">
    <Link href="dashboard">
      <button className="text-white p-4 rounded-xl mt-4 flex justify-center items-center bg-[#1F263E]">Click here to dashboard
      </button></Link>
  </div>;
}
