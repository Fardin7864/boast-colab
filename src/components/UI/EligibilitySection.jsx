import React from "react";
import { FaStar } from "react-icons/fa6";

const EligibilitySection = () => {
  const handleScrollToWishlist = () => {
    const wishlistSection = document.getElementById("wishlistForm");
    wishlistSection.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className=" justify-around flex flex-col lg:flex-row gap-20 lg:gap-0 mx-5 items-center py-20">
      <div>
        <h5 className="font-extrabold text-2xl mb-4">Eligibility</h5>
        <h2
          className="text-5xl mb-4 font-extrabold"
          style={{ letterSpacing: "-4px" }}
        >
          We got your back!
        </h2>
        <div className="my-10">
          <h5 className="flex items-center gap-3 font-bold pb-3">
            <span>
              <FaStar />
            </span>
            1000 followers on any social media platform.
          </h5>
          <h5 className="flex  gap-3 font-bold">
            <span>
              <FaStar />
            </span>
            If you have this you can apply for our Membership. <br /> But the
            more followers the better you encash.
          </h5>
        </div>
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
          src="https://www.zywa.co/wp-content/uploads/2023/02/Group-48098228.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default EligibilitySection;
