/* eslint-disable @next/next/no-img-element */
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const SecondSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
    });
  }, []);
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-28 py-10 second-section">
      <div className="w-1/3">
        <h2
          className="text-white text-6xl font-extrabold"
          style={{ letterSpacing: "-2px" }}
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
        >
          Are you an influencer?
        </h2>
      </div>
      <div className="w-1/2">
        <img
          data-aos="fade-down"
          data-aos-easing="linear"
          style={{ height: "555px" }}
          src="/images/red/2.png"
          alt=""
        />
      </div>
      <div className="w-1/2">
        <h2
          className="text-white text-xl font-bold text-justify"
          style={{ letterSpacing: "-1px" }}
        >
          Are you an influencer looking to monetize your social media presence?
          Even if you are not, it doesn&#x2019;t hurt getting things for free,
          does it? Boast provides you 10-100% cashback based on your Social
          media reach whenever you buy something from our Partner Brands and
          share your purchase on Social media. You also get paid projects thrown
          your way every now and then. You can apply for Membership if you have
          a minimum of 1000 followers. Our Membership is free.
        </h2>
      </div>
    </div>
  );
};

export default SecondSection;
