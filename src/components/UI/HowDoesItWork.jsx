/* eslint-disable @next/next/no-img-element */
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaStar } from "react-icons/fa6";
import Image from "next/image";

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
        className="flex justify-center items-center py-20"
      >
        <div className="w-2/4">
          <h2
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            className="text-gray-900 text-center lg:text-start text-5xl font-extrabold "
            style={{ letterSpacing: "-3px" }}
          >
            How Does it work?
          </h2>
          <div data-aos="fade-left" className=" my-5">
            <p className=" py-4 flex items-center gap-3">
              <span className=" bg-[#fd7f3e] text-white p-3 rounded-full">
                Stap-1 :
              </span>
              <span className=" text-2xl text-white"> Buy</span>{" "}
              <span>
                <Image
                  src={"/right.webp"}
                  width={20}
                  height={20}
                  alt="right arrow"
                />
              </span>{" "}
              <span className=" bg-[#fd7f3e] text-white p-3 rounded-full">
                Stap-2:
              </span>{" "}
              <span className=" text-2xl text-white">Post</span>{" "}
              <Image
                src={"/right.webp"}
                width={20}
                height={20}
                alt="right arrow"
              />{" "}
              <span className=" bg-[#fd7f3e] text-white p-3 rounded-full">
                Stap-3:
              </span>{" "}
              <span className=" text-2xl text-white">Earn</span>
              <Image
                src={"/hat.gif"}
                width={100}
                height={0}
                alt="animat"
                className=" rounded-2xl"
              />{" "}
            </p>
            <div className="" data-aos="fade-left" data-aos-easing="linear">
              <h2
                className="text-black text-2xl flex items-center gap-2 my-3"
                style={{ letterSpacing: "-2px" }}
              >
                <span className="text-sm">
                  <FaStar className=" text-2xl text-orange-500" />
                </span>
                You become our member.
              </h2>
              <h2
                className="text-black text-2xl flex items-center gap-2 my-3"
                style={{ letterSpacing: "-2px" }}
              >
                <span className="text-sm">
                  <FaStar className=" text-2xl text-orange-500" />
                </span>
                Shop from any of our Partner Brands and post it on social media.
              </h2>
              <h2
                className="text-black text-2xl flex items-center gap-2 my-3"
                style={{ letterSpacing: "-2px" }}
              >
                <span className="text-sm">
                  <FaStar className=" text-2xl text-orange-500" />
                </span>

                <span>Get Cashback depending on you Boasting power.</span>
              </h2>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" at className="w-1/3">
          {/* <Image 
          src={"/phone.png"}
          width={500}
          height={0}
          alt="phone"
          /> */}

          <iframe
            src="https://lottie.host/embed/256f9631-8f49-4c69-a550-378e2d780f30/AuDhWLtZ98.json"
            width={500}
            height={600}
          ></iframe>
        </div>

        {/* <div
          className=""
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
        </div> */}
      </div>
    </div>
  );
};

export default HowDoesItWork;
