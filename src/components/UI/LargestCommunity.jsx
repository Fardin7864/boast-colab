/* eslint-disable @next/next/no-img-element */
import React from "react";

const LargestCommunity = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-20 lg:gap-0 justify-around items-center p-20 bg-[#ff3b46]">
      <div className="m-5">
        <h2
          className="text-5xl mb-4 font-extrabold text-white"
          style={{ letterSpacing: "-4px" }}
        >
          join the largest community of gen z
        </h2>
        <h1 className=" text-white text-xl mb-4 font-extralight">
          lifestyle, fashion, art, entrepreneurship, music, gaming and more –
          there’s always a place for you at our zywa club!
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
