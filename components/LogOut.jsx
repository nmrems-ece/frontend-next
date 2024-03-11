"use client";

import React from "react";
import Link from "next/link";
import { ImSwitch } from "react-icons/im";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Router } from "next/router";
import { Toast, toast } from "react-hot-toast";

const LogOut = () => {
  const router = useRouter();

  return (
    <>
      <div className="flex text-gray-600 bg-inherit hover:bg-[#49516f] hover:text-white focus h-9  justify-center mt-2 overflow-hidden">
        <button>
          <div className="m-1">
            <ImSwitch />
          </div>
          <span className="ml-1">
            <h1>Log Out</h1>
          </span>
        </button>
      </div>
    </>
  );
};

export default LogOut;
