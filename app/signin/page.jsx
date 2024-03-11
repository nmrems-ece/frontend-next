"use client";

import { React, useEffect } from "react";
import Link from "next/link";
import { useState } from "react";
import { GoEyeClosed } from "react-icons/go";
import { FaRegEyeSlash } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";

const Login = () => {
  const router = useRouter();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const OnLogin = async () => {
    try {
      const response = await axios.post(
        "https://nmrems-backend.onrender.com/api/v1/health",
        user
      );
      console.log("Login Successfull", response.data);
      toast.success("Login Successful");
      router.push("/dashboard");
    } catch (error) {
      console.log("Login Failed", error.message);
      toast.error("login Failed", error.message);
    }
  };
  useEffect(() => {
    if ((user.email.length < 0 && user.password, length < 0)) {
      toast.error("Please input correct password");
      toast.success("Please Provide credentials to login");
    }
  }, [user]);

  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(FaRegEyeSlash);

  const passwordClick = () => {
    if (type === "password") {
      setType("password");
      setIcon(GoEyeClosed);
    } else {
      setType("password");
      setIcon(FaRegEyeSlash);
    }
  };

  return (
    <>
      <div>
        <Toaster />
      </div>
      <div className="grid grid-cols-2 justify-center wrap ">
        <div className="bg-[#1F263E] h-screen">
          <p className="text-white">Sign in</p>
        </div>
        <div className="bg-white flex justify-center h-screen align-middle overflow-hidden">
          <div className="flex flex-col align-middle justify-center h-screen">
            <h1 className=" font-bold text-2xl ml-14">Welcome Back</h1>
            <p>Welcome Back! Please enter your details </p>
            <div className="my-10">
              <label htmlFor="email">Email</label>
              <br />
              <div className="bg-slate-200 flex rounded">
                <input
                  id="email"
                  placeholder="email"
                  className="w-64 bg-inherit border-none outline-none rounded ml-2 "
                  onChange={(e) => {
                    setUser({ ...user, email: e.target.value });
                  }}
                />
                <span className="my-2">
                  <MdAlternateEmail />
                </span>
              </div>
            </div>
            <div className="bg-white rounded-lg h-2 w-64 my-0 py-0.5 outline-hidden">
              <label htmlFor="password">Password</label>
              <br />
              <div className="bg-slate-200 flex rounded w-72">
                <input
                  className="w-64 bg-inherit border-none outline-none rounded ml-2"
                  placeholder="password"
                  type="password"
                  onChange={(e) => {
                    setUser({ ...user, password: e.target.value });
                  }}
                />
                <span className="my-2">
                  <FaRegEyeSlash icon={FaRegEyeSlash} onClick={passwordClick} />
                </span>
              </div>
            </div>
            <br />
            <Link href="/passwordreset" className="m-5 p-5 flex">
              <p className="flex ml-20 text-blue-700">Forgot password?</p>
            </Link>

            <div className="w-72 rounded bg-slate-600  my-4 w-64 rounded   bg-slate-60o w-64">
              <button
                className=" bg-[#1F263E] w-72 rounded  p-1.5 bg-slate-60o w-64 text-white"
                onClick={OnLogin}
              >
                SignUp
              </button>
            </div>
            <p className="mt-4 bottom-0 flex justify-center">
              Don't Have an account
              <Link href="/signup" className="text-blue-700 ml-1">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
