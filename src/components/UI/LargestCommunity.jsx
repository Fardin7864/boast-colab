/* eslint-disable @next/next/no-img-element */
import React from "react";

const LargestCommunity = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-20 lg:gap-0 justify-between items-center  bg-[#ff3b46] p-20">
      <div className="">
        <h2
          className="text-5xl mb-4 font-extrabold text-white"
          style={{ letterSpacing: "-4px" }}
        >
          Join our Influencer Community,
        </h2>
        <h1 className=" text-white text-xl mb-4 font-extralight">
          lifestyle, fashion, art, entrepreneurship, music, gaming and more-
          There is a place for you at Boast.
        </h1>
      </div>

      {/*  */}
      <img
        style={{ width: "663px", height: "375px" }}
        src="https://www.zywa.co/wp-content/uploads/2023/03/70EFFDB2-67EF-4592-819B-8C56EF7F7A98-1024x576.jpg"
        alt=""
      />
    </div>
  );
};

export default LargestCommunity;
