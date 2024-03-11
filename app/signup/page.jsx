"use client";
import React, { useState, useEffect } from "react";
import { GoEyeClosed } from "react-icons/go";
import { IoPersonOutline } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";

const SignUp = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const OnSignup = async () => {
    if (user.fullname < 5 && user.email < 5 && user.password < 4) {
      toast.error("All credentials are required and must be greater than 5 !");
    }
    try {
      const response = await axios.post("/api/users/signup", user);
      toast.success("Registration succcessful!");
      router.push("/signin");
      console.log(user);
    } catch (error) {
      toast.error("Signup Failed");
      console.log(error.message);
    } finally {
    }
  };
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(FaRegEyeSlash);
  const [submitusuccess, setSubmitusuccess] = useState(false);

  const passwordClick = () => {
    if (type === "password") {
      setType("text");
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
      <div className="grid grid-cols-2 justify-center overflow-hidden">
        <div
          className="bg-[#1F263E] inv h-screen md:visible"
          id="rightside"
        >
          <p className="text-white text-">Sign up</p>
        </div>
        <div className="bg-white flex justify-center items-center h-screen overflow-hidden">
          <div className="flex flex-col items-center justify-center h-screen">
            <h1 className=" font-bold text-2xl text-center">Sign Up</h1>
            <p>Welcome Back! Please enter your details </p>
            <br />
            <form>
              <div className="my-2 ">
                <label htmlFor="email">Full Name</label>
                <br />
                <div className="bg-slate-200 flex rounded">
                  <input
                    id="fullname"
                    className="w-64 bg-inherit border-none outline-none rounded ml-2"
                    type="text"
                    value={user.fullname}
                    onChange={(e) =>
                      setUser({ ...user, fullname: e.target.value })
                    }
                  />
                  <span className="my-2">
                    <IoPersonOutline />
                  </span>
                </div>
              </div>
              <div className="my-2 ">
                <label htmlFor="email">Email</label>
                <br />
                <div className="bg-slate-200 flex rounded">
                  <input
                    className="w-64 bg-inherit border-none outline-none rounded ml-2"
                    type="text"
                    value={user.email}
                    onChange={(e) =>
                      setUser({ ...user, email: e.target.value })
                    }
                  />
                  <span className="my-2">
                    <MdAlternateEmail />
                  </span>
                </div>
              </div>
              <div className="my-2 ">
                <label htmlFor="password">Create Password</label>
                <br />
                <div className="bg-slate-200 flex rounded">
                  <input
                    className="w-64 bg-inherit border-none outline-none rounded ml-2"
                    type={type}
                    value={user.password}
                    onChange={(e) =>
                      setUser({
                        ...user,
                        password: e.target.value,
                      })
                    }
                  />
                  <span className="my-2">
                    <FaRegEyeSlash onClick={passwordClick} />
                  </span>
                </div>
              </div>
              <div className="my-2">
                <label htmlFor="confirmpassword">Confirm Password</label>
                <br />
                <div className="bg-slate-200 flex rounded">
                  <input
                    className="w-64 bg-inherit border-none outline-none rounded ml-2"
                    type={type}
                  />
                  <span className="my-2">
                    <FaRegEyeSlash onClick={passwordClick} />
                  </span>
                </div>
              </div>
            </form>
            <div className="w-72 rounded bg-slate-600  my-4 w-64 rounded   bg-slate-60o w-64">
              <button
                className=" bg-[#1F263E] w-72 rounded  p-1.5 bg-slate-60o w-64 text-white"
                onClick={OnSignup}
              >
                SignUp
              </button>
            </div>
            <div className="flex justify-center">
              <p>Already have an account?</p>
              <span className="ml-1">
                <Link className="text-blue-500 mr-2" href="/signin">
                  Log in
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
