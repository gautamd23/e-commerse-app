import React from "react";

export default function LoginSignUp() {
  return (
    <div className="flex flex-col justify-center items-center gap-5 py-14 ">
      <div className="flex shadow-md flex-col gap-6 bg-gray-200 py-12 px-10 rounded-lg w-[500px]">
        <div>
          <h1 className="text-3xl font-bold">Sign Up</h1>
        </div>
        <div className="flex flex-col gap-4 ">
          <input
            className="py-3 px-3 rounded-lg outline-none text-sm"
            type="text"
            placeholder="Your Name"
          ></input>
          <input
            className="py-3 px-3 rounded-lg outline-none text-sm"
            type="email"
            placeholder="Your Email"
          ></input>
          <input
            className="py-3 px-3 rounded-lg outline-none text-sm"
            type="password"
            placeholder="Password"
          ></input>
        </div>
        <div className="flex justify-center items-center">
          <button className="py-3 px-3 bg-red-500 rounded-lg text-white w-full">
            Countinue
          </button>
        </div>
        <div className="-mt-3">
          <p className="text-sm ">
            Already have an account? <span className=" font-bold">Login here</span>
          </p>
        </div>
        <div className="flex gap-3 items-center">
          <input className="w-3" type="checkbox"></input>
          <p className="text-sm">
            By continuing I agree to the terms and use of privacy and policy
          </p>
        </div>
      </div>
    </div>
  );
}
