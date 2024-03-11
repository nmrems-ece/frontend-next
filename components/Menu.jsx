import React from "react";
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { CiGift } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { ImLibrary } from "react-icons/im";
import { BsQuestionOctagon } from "react-icons/bs";
import { ImSwitch } from "react-icons/im";

const Menu = ({}) => {
  return (
    <div className="flex text-gray-600 bg-inherit hover:bg-red hover:text-white focus h-9  justify-center mt-2 overflow-hidden">
      <Link href="" className="flex">
        <div></div>
        <span>
          <h1>DashBoard</h1>
        </span>
      </Link>
    </div>
  );
};
export const SideBarData = [
  {
    title: "Dashboard",
    icon: <AiOutlineHome />,
    link: "/dashboard",
  },
  {
    title: "Information",
    icon: <ImLibrary />,
    link: "/dashboard",
  },
  {
    title: "Prices",
    icon: <CiGift />,
    link: "/dashboard",
  },
 
  {
    title: "FAQ",
    icon: <BsQuestionOctagon />,
    link: "/dashboard",
  },
  {
    title: "Log out",
    icon: <ImSwitch />,
    link: "/dashboard",
  },
];

export default Menu;
