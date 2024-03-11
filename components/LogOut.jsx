"use client";

import React from "react";
import Link from "next/link";
import { ImSwitch } from "react-icons/im";
import axios from "axios";
import { useRouter } from "next/navigation";
import {  toast } from "react-hot-toast";



const LogOut = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      // Call your logout API endpoint
cookie.remove('token')
      // Clear token from state (assuming you're using a state management library like Redux or Context API)
      // dispatch({ type: 'LOGOUT' });

      // Redirect to login screen
      router.push('/signin');
      toast.success("logout successful")
    } catch (error) {
      console.error("Logout failed", error);
      toast.error("logout failed")
    }
  };

  return (
    <div>
      {/* <div><Toast/></div> */}
    <button className="flex text-gray-600 bg-inherit hover:bg-[#49516f] hover:text-white focus h-9  justify-center mt-2 overflow-hidden" onClick={handleLogout}>
      Log Out
    </button>
    </div>
  );
};

export default LogOut;
