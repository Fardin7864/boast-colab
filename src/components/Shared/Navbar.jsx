import Image from "next/image";

/* eslint-disable @next/next/no-img-element */
const Navbar = () => {
  const handleScrollToWishlist = () => {
    const wishlistSection = document.getElementById("wishlistForm");
    wishlistSection.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className=" drop-shadow-lg navbar">
      <div className="flex justify-between items-center mx-24 py-2">
        {/* <h1
          className="text-black text-4xl font-extrabold"
          style={{ letterSpacing: "-6px" }}
        >
          BOAST
        </h1> */}
        {/* <img
          style={{ height: "60px", width: "170px" }}
          src="/images/logo.png"
          alt=""
        /> */}
        <Image
          src={"/images/1212.png"}
          width={100}
          height={0}
          alt="logo"
          className=""
        />
        <button
          onClick={handleScrollToWishlist}
          className="bg-white hover:bg-[#fd7f3e] text-black font-bold px-6 py-2 rounded-full hover:text-black duration-300 "
        >
          Get Boast
        </button>
      </div>
    </div>
  );
};

export default Navbar;
