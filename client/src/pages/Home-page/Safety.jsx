import React from "react";
import { HiCheck } from "react-icons/hi";
import { motion } from "framer-motion";

export const Safety = () => {
  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center bg-white px-6 md:px-20 py-10">
      {/* Left Side Image */}
      <motion.div
        className="flex-1 flex justify-center items-center mb-8 md:mb-0"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <img
          src="images/safety.png"
          alt="Safety"
          className="w-[250px] sm:w-[350px] md:w-[450px] lg:w-[500px] h-auto object-contain"
        />
      </motion.div>

      {/* Right Side Content */}
      <div className="flex-1 flex flex-col justify-center items-start text-[#3f5224] md:ml-10 text-left">
        <h1 className="text-[16px] sm:text-[18px] font-semibold mb-2 text-[#8dc442]">
          Money Move - Only the Best
        </h1>

        <h2 className="text-[20px] sm:text-[24px] md:text-[28px] font-bold leading-snug mb-4">
          Your Safety Starts With Our Strict Selection Process
        </h2>

        <p className="text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed mb-6 max-w-lg">
          At <strong>Money Move</strong> copytrading platform, trust comes before every trade.
          That’s why Fintec Care is dedicated to building trust and protecting your capital.
          We thoroughly evaluate every Master Trader before they join our platform.
        </p>

        {/* ✅ Tick Points */}
        <div className="space-y-3 mb-6 w-full">
          {[
            "Only high-performing, verified traders are approved.",
            "Built to safeguard your investments from unnecessary risk.",
            "Performance-based selection",
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <span className="bg-[#8dc442] text-white p-1.5 rounded-full flex items-center justify-center">
                <HiCheck className="text-[12px]" />
              </span>
              <p className="text-[14px] sm:text-[15px] font-medium leading-tight">
                {item}
              </p>
            </div>
          ))}
        </div>

        <p className="text-[14px] sm:text-[15px] leading-relaxed max-w-lg">
          Each trader undergoes a strict performance review, risk assessment, and strategy
          analysis to ensure they meet our high standards of reliability and consistency.
        </p>
      </div>
    </div>
  );
};
