/* eslint-disable @next/next/no-img-element */
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useEffect } from "react";

const SecondSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
    });
  }, []);
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-28 pt-28 second-section gap-20">
      <div
        className="w-1/2"
        data-aos="fade-right"
        data-aos-easing="ease-in-sine"
      >
        <h2
          className="text-white text-6xl font-extrabold mb-6"
          style={{ letterSpacing: "-2px" }}
        >
          Are you an influencer?
        </h2>
        <h2
          className="text-white text-xl font-semibold text-justify"
          style={{ letterSpacing: "-1px", fontFamily: "Montserrat" }}
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

      <Image
        // className="mx-auto block"
        data-aos="fade-down"
        data-aos-easing="linear"
        height={400}
        width={500}
        // src="https://res.cloudinary.com/dy80ftu9k/image/upload/v1710434061/BOAST/redsection_wqz2cz.png"
        src="/images/orange2.png"
        alt=""
      />
    </div>
  );
};

export default SecondSection;
