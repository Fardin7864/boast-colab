import { motion } from "framer-motion";

const ThirdSection = () => {
  return (
    <div>
      <div
        style={{ backgroundColor: "#81b8fd" }}
        className=" flex flex-col items-center justify-center py-20"
      >
        <img
          src="https://www.zywa.co/wp-content/uploads/2023/02/perso-1-2.png"
          alt=""
        />

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
