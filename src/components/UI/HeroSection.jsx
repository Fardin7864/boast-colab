const HeroSection = () => {
  const handleScrollToWishlist = () => {
    const wishlistSection = document.getElementById("wishlistForm");
    wishlistSection.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="flex justify-around mx-5 items-center pt-5">
      <div>
        <h2
          className="text-5xl font-extrabold"
          style={{ letterSpacing: "-4px" }}
        >
          Upto 100% cashback <br />
          <span className="text-[#DE3996]"> on your Shoutout</span>
        </h2>
        <p className="my-7 text-xl">Encash your influence</p>
        <button
          onClick={handleScrollToWishlist}
          className="bg-black hover:bg-[#DE3996] text-white font-bold px-6 py-4 rounded-full hover:text-black duration-300 "
        >
          Join Our wishlist
        </button>
      </div>

      {/*  */}

      <div>
        <img
          style={{ width: "548px", height: "582px" }}
          src="https://www.zywa.co/wp-content/uploads/2023/03/Group-48098216-2-930x1024.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default HeroSection;
