import React from "react";

const HowDoesItWork = () => {
  return (
    <div>
      <div
        style={{ backgroundColor: "#a1df70" }}
        className="flex items-center py-20 px-12"
      >
        <div className="w-1/2 m-5">
          <h2
            className="text-black text-5xl font-extrabold "
            style={{ letterSpacing: "-4px" }}
          >
            How Does it work?
          </h2>
        </div>
        <div className="w-1/2">
          <img
            style={{ height: "555px", width: "388px" }}
            src="https://www.zywa.co/wp-content/uploads/2023/02/Rectangle-8.png"
            alt=""
          />
        </div>
        <div className="w-1/2 m-5">
          <h2
            className="text-black text-2xl font-bold mt-60 "
            style={{ letterSpacing: "-2px" }}
          >
            Its simple! Once you join Boasts free membership, you can shop at
            any of our partner brands Then, share about your purchase on your
            social media channels, tagging the brand and get a cashback ranging
            from 10-100% depending open your social influencing power
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HowDoesItWork;
