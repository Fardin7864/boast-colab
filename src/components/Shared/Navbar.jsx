import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between m-5">
      <h1
        className="text-black text-4xl font-extrabold"
        style={{ letterSpacing: "-5px" }}
      >
        BOAST
      </h1>
      <button className="bg-black text-white font-bold px-6 py-4 rounded-full">
        Join our wishlist
      </button>
    </div>
  );
};

export default Navbar;
