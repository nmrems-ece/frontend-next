import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div className="text-red">
      <p className="bg-slate-500">you are here</p>
      <Link href="/"> You are right</Link>
    </div>
  );
};

export default page;
