import React from "react";
import { motion } from "framer-motion";

export const Risk = () => {
  return (
    <div className="w-full bg-white py-16 px-6 sm:px-10 md:px-16">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left: Text */}
        <div className="space-y-6 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-[28px] font-bold text-[#3f5224]">
            Risk Disclosure and Our Commitment to Client Protection
          </h1>

          <p className="text-[#3f5224]/90 text-base sm:text-[16px] leading-relaxed">
            It’s important for clients to understand that trading involves risks.{" "}
            <strong>Money Move</strong> can provide assistance in mitigating
            potential losses, but it cannot guarantee profits nor prevent all losses.
          </p>

          <p className="text-[#3f5224]/90 text-base sm:text-[16px] leading-relaxed">
            However, we aim to provide an added layer of protection and support to our
            clients by carefully monitoring and managing the traders in our network.
          </p>
        </div>

        {/* Right: Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src="images/Risk.jpeg"
              alt="Risk Disclosure"
              className="w-full max-w-[550px] h-auto rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>

      {/* Bottom Section with Animation */}
      <div className="flex flex-col items-center text-center mt-16 space-y-5">
        {/* Heading Animation */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-2xl sm:text-[23px] font-bold text-[#3f5224]"
        >
          Ready to Start Copytrading with{" "}
          <span className="text-[#8dc442]">Fintec Market</span>?
        </motion.h1>

        {/* Button Animation (slightly delayed) */}
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
          className="bg-[#8dc442] hover:bg-[#76b83b] text-white font-semibold px-10 py-3 rounded-full shadow-md transition-all duration-300"
        >
          Connect Now
        </motion.button>
      </div>
    </div>
  );
};
