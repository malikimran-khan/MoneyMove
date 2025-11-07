import React from "react";


export const Evaluate = () => {
  return (
    <div className="w-full bg-white py-20 px-6 sm:px-12 md:px-30 flex flex-col md:flex-row items-center justify-between gap-10 mt-25">
      
      {/* LEFT SIDE - TEXT */}
      <div className="md:w-1/2 text-[#3f5224]">
        <h2 className="text-3xl sm:text-[32px] font-bold mb-6 text-[#8dc442]">
          How We Evaluate Our Traders
        </h2>
        <p className="text-[#3f5224]/90 leading-relaxed text-[18px]">
         To ensure only the most reliable and consistent traders are approved, each Forex trader undergoes a strict performance review, risk assessment, and in-depth strategy assessment. We assess not only past profitability, but also consistency, drawdown levels, and trade management practices to make sure they meet our strict criteria.


        </p>
      </div>

      {/* RIGHT SIDE - IMAGES */}
      <div className="md:w-1/2 flex items-center justify-center relative">
        {/* Wrapper for images */}
        <div className="relative flex items-end">
          <img
            src="images/Evaluate.png"
            alt="Phone 1"
            className="sm:w-[200px] md:w-[520px] md:h-[501px] rounded-xl  "
          />
         
        </div>

        {/* Decorative Circle Glow */}
      </div>
    </div>
  );
};
