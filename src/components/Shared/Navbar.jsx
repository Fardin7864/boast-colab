/* eslint-disable @next/next/no-img-element */
const Navbar = () => {
  const handleScrollToWishlist = () => {
    const wishlistSection = document.getElementById("wishlistForm");
    wishlistSection.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className=" my-5  border-b-1">
      <div className="flex justify-between mx-14">
        {/* <h1
          className="text-black text-4xl font-extrabold"
          style={{ letterSpacing: "-6px" }}
        >
          BOAST
        </h1> */}
        <img
          style={{ height: "60px", width: "170px" }}
          src="/images/logo.png"
          alt=""
        />
        <button
          onClick={handleScrollToWishlist}
          className="bg-black hover:bg-[#DE3996] text-white font-bold px-6 py-4 rounded-full hover:text-black mb-4 duration-300 "
        >
          get Boast
        </button>
      </div>
    </div>
  );
};

export default Navbar;
