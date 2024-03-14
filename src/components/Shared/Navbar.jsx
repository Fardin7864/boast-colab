import Image from "next/image";

/* eslint-disable @next/next/no-img-element */
const Navbar = () => {
  const handleScrollToWishlist = () => {
    const wishlistSection = document.getElementById("wishlistForm");
    wishlistSection.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className=" pt-3 drop-shadow-lg bg-slate-100">
      <div className="flex justify-between items-center mx-20">
        <Image
          src={"/logo.png"}
          width={80}
          height={0}
          alt="logo"
          className=""
        />
        <button
          onClick={handleScrollToWishlist}
          className="bg-black hover:bg-[#fd7f3e] text-white font-bold px-6 py-2 rounded-full hover:text-black mb-4 duration-300 "
        >
          Get Boast
        </button>
      </div>
    </div>
  );
};

export default Navbar;
