/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ThirdSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
    });
  }, []);
  return (
    <div>
      <div
        data-aos="fade-up"
        style={{ backgroundColor: "#81b8fd" }}
        className=" flex flex-col items-center justify-center py-20"
      >
        <div data-aos="fade-down">
          <img
            style={{ height: "450px", width: "800px" }}
            src="https://www.zywa.co/wp-content/uploads/2023/02/perso-1-2.png"
            alt=""
          />
        </div>

        <motion.h2
          animate={{ x: [50, 150, 50], opacity: 1, scale: 1 }}
          transition={{
            duration: 5,
            delay: 0.3,
            ease: [0.5, 0.71, 1, 1.5],
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.2 }}
        >
          <span
            className="text-white text-5xl font-bold text-center"
            style={{ letterSpacing: "-4px" }}
          >
            Get free <span className=" logo">Boast</span> Prepaid card powered
            by <br /> <span className="dhaka-bank">Dhaka Bank</span> and{" "}
            <span className="master-card">Master Card</span>
          </span>
        </motion.h2>
      </div>
    </div>
  );
};

export default ThirdSection;
