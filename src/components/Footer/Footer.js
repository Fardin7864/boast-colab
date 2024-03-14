import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col items-center pt-8 footer">
      <div className="flex items-center gap-3">
        <Image src={"/logo.png"} width={100} height={0} alt="Logo" />
      </div>
      <div className="flex flex-col items-center my-5">
        <p className="text-justify text-sm lg:w-1/2">
          It is simple! Once you join Boast free membership, you can shop at any
          of our partner brands. Then, share about your purchase on your social
          media channels, tagging the brand and get a cashback ranging from
          10-100% depending on your social influencing power.
        </p>
      </div>
      <div className="w-full flex flex-col items-center  py-3">
        <p>2024 BOAST All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
