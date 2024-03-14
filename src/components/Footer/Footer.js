import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="footer ">
      <div className="flex max-w-7xl mx-auto py-10 justify-center gap-10">
        <div className="flex flex-col w-3/6 ">
          <div className="flex gap-3">
            <Image src={"/images/1212.png"} width={100} height={0} alt="Logo" />
          </div>
          <div className="flex flex-col my-5 text-white">
            <p className="text-justify text-sm text-gray-200">
              It is simple! Once you join Boast free membership, you can shop at
              any of our partner brands. Then, share about your purchase on your
              social media channels, tagging the brand and get a cashback
              ranging from 10-100% depending on your social influencing power.
            </p>
          </div>
        </div>
        {/* 2nd section */}
        <div>
          <div className=" text-gray-100">
            <h4 className=" text-xl font-extrabold mb-2">Office</h4>
            <p className=" text-sm text-gray-300">136, Kalachadpur, North Baridhara, Dhaka 1206, Bangladesh</p>
            <h4 className=" text-xl font-extrabold mt-3 mb-2">Contacts</h4>
            <p className=" text-sm text-gray-300">+8801614395930 ridwan@xrougex.com</p>
            {/* <p className=" text-sm text-gray-300">+8801614395930 rehnuma@contentguy.co</p> */}
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center  py-3 text-white font-normal">
        <p>© 2024 BOAST. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
