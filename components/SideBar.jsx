import React from "react";

const SideBar = () => {
  return (
    <div className="">
      <div className="invisible md:visible h-full w-64 bg-blue-500 ">
        <nav className="h-screen">
          <ul>
            <li>Dashboard</li>
            <li>Information</li>
            <li>services</li>
            <li>Broadcast</li>
            <li>Welcome</li>
            <li>You</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SideBar;
