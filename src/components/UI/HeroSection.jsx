import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  const handleScrollToWishlist = () => {
    const wishlistSection = document.getElementById("wishlistForm");
    wishlistSection.scrollIntoView({ behavior: "smooth" });
  };
  return (
    // <div className="flex justify-around mx-5 items-center pt-5 bg-slate-100">
    <div className="flex justify-between items-center pt-5 bg-slate-100 mx-28">
      <div>
        <h2
          className="text-5xl font-extrabold"
          style={{ letterSpacing: "-4px" }}
        >
          Upto 100% cashback <br />
          <span className="text-[#fd7f3e]">
            {" "}
            on your
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                " Shoutout",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                " Post",
                1000,
                " Story",
                1000,
              ]}
              wrapper="span"
              speed={30}
              // style={{ fontSize: '1rem', display: 'inline-block' }}
              repeat={Infinity}
            />
          </span>
        </h2>
        <p
          className="my-7 text-2xl font-semibold text-gray-700"
          style={{ fontFamily: "Montserrat" }}
        >
          Encash your influence
        </p>
        <button
          onClick={handleScrollToWishlist}
          className="bg-black hover:bg-[#fd7f3e] text-white font-bold px-6 py-4 rounded-full hover:text-black duration-300 "
        >
          Early access
        </button>
      </div>

      {/*  */}

      <div>
        <img
          className="mb-20"
          style={{ width: "548px", height: "582px" }}
          src="/images/red/hero.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default HeroSection;
