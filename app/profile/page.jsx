import SideBar from "@/components/SideBar";
import React from "react";
import { RiLoopLeftFill } from "react-icons/ri";

const Profile = () => {
  return (
    <div>
      <div className="w-2/6">
        <SideBar icon={<iLoopLeftFill size={20} />} text="Settings"></SideBar>
      </div>
    </div>
  );
};

export default Profile;
