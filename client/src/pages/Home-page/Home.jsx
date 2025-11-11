import React from "react";

export const Home = () => {
  return (
    <div className="w-full h-auto bg-[#ffffff] flex flex-col items-center justify-center text-center px-6 py-15 mt-15 sm:mt-35 lg:mt-35">
      {/* Desktop & Tablet View (hidden on mobile) */}
      <div className="max-w-5xl -mt-10 mb-10 hidden sm:block">
        <h1 className="text-[35px] md:text-[35px] font-bold text-[#3f5224] mb-4">
          Copy Trading Simplified with Risk Management
        </h1>
        <h2 className="text-[24px] md:text-[29px] text-[#3f5224] font-bold mb-3">
          Money move helps you copy expert traders safely and profitably
        </h2>
        <p className="text-[#3f5224] text-[18px] md:text-[19px] leading-relaxed font-medium max-w-4xl mx-auto">
          Start your journey with{" "}
          <strong className="text-[#8dc442] text-[19px]">
            Money Move,
          </strong>{" "}
          where copy trading is simplified and risk-managed. Mirror top traders,
          build steady profits, and grow your portfolio with safety, confidence,
          and ease.
        </p>
      </div>

      {/* Mobile View (hidden on sm and up) */}
      <div className="block sm:hidden mt-6">
        <h1 className="text-[26px] font-bold text-[#3f5224] mb-3">
          Copy Trading Made Easy with Money Move
        </h1>
        <p className="text-[#3f5224] text-[14px] leading-relaxed font-semibold mt-5">
          Discover How MONEY Markets Makes Copy Trading Simple, Safe, And
          Rewarding. Follow Top Traders, Grow Your Portfolio With Smart
          Strategies, And Enjoy Peace Of Mind Through Effective Risk Management
          That Helps Protect Your Investments While Maximizing Potential
          Returns.
        </p>
      </div>
    </div>
  );
};
