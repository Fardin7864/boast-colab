/* eslint-disable @next/next/no-img-element */
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaStar } from "react-icons/fa6";

const HowDoesItWork = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
    });
  }, []);
  return (
    <div>
      <div
        style={{ backgroundColor: "#a1df70" }}
        className="flex flex-col justify-center lg:flex-row items-center p-20"
      >
        <div className="w-1/2 m-5">
          <h2
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            className="text-black text-center lg:text-start text-6xl font-extrabold "
            style={{ letterSpacing: "-5px" }}
          >
            How Does it work?
          </h2>
        </div>
        <div className="w-1/2">
          <img
            data-aos="fade-down"
            data-aos-easing="linear"
            style={{ height: "555px", width: "388px" }}
            src="https://www.zywa.co/wp-content/uploads/2023/02/Rectangle-8.png"
            alt=""
          />
        </div>
        <div
          className="w-1/2 m-5"
          data-aos="fade-left"
          data-aos-easing="linear"
        >
          <h2
            className="text-black text-2xl flex gap-2 my-3"
            style={{ letterSpacing: "-2px" }}
          >
            <span className="text-sm mt-2">
              <FaStar />
            </span>
            You become our member.
          </h2>
          <h2
            className="text-black text-2xl flex gap-2 my-3"
            style={{ letterSpacing: "-2px" }}
          >
            <span className="text-sm mt-2">
              <FaStar />
            </span>
            Shop from any of our Partner Brands and post it on social media.
          </h2>
          <h2
            className="text-black text-2xl flex gap-2 my-3"
            style={{ letterSpacing: "-2px" }}
          >
            <span className="text-sm mt-2">
              <FaStar />
            </span>

            <span>Get Cashback depending on you Boasting power.</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HowDoesItWork;
