import React from "react";
import { motion } from "framer-motion";

export const Smarterpassive = () => {
  return (
    <div className="w-full h-auto flex flex-col md:flex-row items-center justify-center bg-white px-6 lg:px-16">

      {/* Left Side - Image */}
      <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
        <motion.img
          src="images/smarterpassive.png"
          alt="Smarter Passive"
          className="w-[300px] sm:w-[400px] md:w-[450px] object-contain"
          animate={{
            y: [0, -30, 0], // up & down motion
          }}
          transition={{
            duration: 3, // slow motion
            ease: "easeInOut",
            repeat: Infinity, 
          }}
        />
      </div>

      {/* Right Side - Text and Button */}
      <div className="w-full md:w-1/2 flex flex-col items-start md:items-start text-start md:text-left  px-0 lg:px-8">
        <h1 className="text-[24px] md:text-[36px] font-bold text-[#3f5224] mb-4">
          Copy Trades for Smarter Passive Income
        </h1>
        <p className="text-[14px] md:text-[16px] text-[#3f5224] leading-relaxed mb-6  font-semibold tracking-tight lg:tracking-normal">
          <strong className="text-[#8dc442]">
            Money Move 
          </strong> 
           {" "}
          empowers you to earn smarter—not harder. With our copy trading forex platform,
          you can mirror the strategies of top-performing traders and build steady passive income without
          manual trading stress.
          <br />
          Start small, learn from professionals, and grow your wealth confidently.
        </p>
        <button className="bg-[#8dc442] text-[#ffffff] font-semibold text-[16px] px-8 py-3.5 rounded-full hover:bg-[#7bb63b] transition-all">
          Copy Expert Trades
        </button>
      </div>
    </div>
  );
};
