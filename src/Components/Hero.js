import React from "react";
import heroImg from "./assets/Assets/hero_image.png";
import hand from "./assets/Assets/hand_icon.png";
export default function Hero() {
  return (
    <div className="flex  py-20 justify-center items-center gap-52 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 ">
      <div>
        <div className="my-3">
          <h1 className="font-bold text-xl">NEW ARIVALS ONLY</h1>
        </div>
        <div className="flex gap-3 my-1">
          <h1 className="font-bold text-5xl mb-3">new</h1>
          <img className="w-14" src={hand}></img>
        </div>
        <div className="">
          <h1 className="font-bold text-5xl my-2">Collections</h1>
          <h1 className="font-bold text-5xl"> for everyone</h1>
        </div>
        <div className="my-7">
          <button className="bg-red-500 rounded-full py-2 px-4 text-white">
            Latest Collection{" "}
          </button>
        </div>
      </div>
      <div>
        <div>
          <img className="w-[300px]" src={heroImg}></img>
        </div>
      </div>
    </div>
  );
}
