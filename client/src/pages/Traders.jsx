import React from "react";
import { BsFillPeopleFill } from "react-icons/bs";
import { LuCalendar, LuChartSpline, LuChartGantt, LuFileUser } from "react-icons/lu";

export const Traders = () => {
  const traders = [
    {
      id: 1,
      type: "intro",
      title: "Top Performing Traders",
      subtitle: "Copy the Best with Just One Click!",
      desc1:
        "Explore and copy our top-performing traders by simply clicking the Connect Now button.",
      desc2:
        "Want to see their performance? Click on Performance to view real-time verified stats on the international analytics platform.",
    },
    {
      id: 2,
      name: "SMART FOREX",
      img: "images/box1.webp",
      stats: [
        { label: "Follower", value: "312 / 501", icon: BsFillPeopleFill },
        { label: "ROI", value: "+12% to 16%", icon: LuChartSpline },
        { label: "Drawdown", value: "10%", icon: LuChartGantt },
        { label: "Time Period", value: "Monthly", icon: LuCalendar },
        { label: "Minimum Deposit", value: "$500", icon: LuFileUser },
      ],
    },
    {
      id: 3,
      name: "SAFETRADE",
      img: "images/box2.webp",
      stats: [
        { label: "Follower", value: "279 / 300", icon: BsFillPeopleFill },
        { label: "ROI", value: "+10% to 13%", icon: LuChartSpline },
        { label: "Drawdown", value: "13%", icon: LuChartGantt },
        { label: "Time Period", value: "Monthly", icon: LuCalendar },
        { label: "Minimum Deposit", value: "$1000", icon: LuFileUser },
      ],
    },
    {
      id: 4,
      name: "Daniel Roy",
      img: "images/box3.webp",
      stats: [
        { label: "Follower", value: "220 / 350", icon: BsFillPeopleFill },
        { label: "ROI", value: "+8% to 12%", icon: LuChartSpline },
        { label: "Drawdown", value: "9%", icon: LuChartGantt },
        { label: "Time Period", value: "Monthly", icon: LuCalendar },
        { label: "Minimum Deposit", value: "$700", icon: LuFileUser },
      ],
    },
    {
      id: 5,
      name: "Michael Chen",
      img: "images/box4.webp",
      stats: [
        { label: "Follower", value: "180 / 250", icon: BsFillPeopleFill },
        { label: "ROI", value: "+15% to 18%", icon: LuChartSpline },
        { label: "Drawdown", value: "12%", icon: LuChartGantt },
        { label: "Time Period", value: "Monthly", icon: LuCalendar },
        { label: "Minimum Deposit", value: "$900", icon: LuFileUser },
      ],
    },
    {
      id: 6,
      type: "outro",
      title: "",
      subtitle: "Interactive Performance Analysis",
      desc1:
        "We help you make informed decisions with access to transparent, data-rich analytics. Our interactive performance tools let you",
      desc2:
        "track traders’ real-time stats, including ROI, trade history, win rate, and risk metrics. All verified on leading global analytics platforms.",
    },
  ];

  return (
    <div className="w-full min-h-screen mt-20 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-4">

          {traders.map((trader) => {
            // Intro & Outro Cards
            if (trader.type === "intro" || trader.type === "outro") {
              return (
                <div
                  key={trader.id}
                  className="col-span-1 sm:col-span-2 lg:col-span-1
                     p-6 sm:p-8
                    flex flex-col justify-center h-full min-h-[400px] lg:min-h-[580px] lg:w-[400px]"
                >
                  {trader.title && (
                    <h3 className="text-lg sm:text-xl font-semibold text-[#3f5224] mb-3">
                      {trader.title}
                    </h3>
                  )}
                  <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold mb-5 text-[#8dc442] leading-tight">
                    {trader.subtitle}
                  </h2>
                  <p className="text-[#3f5224] text-sm sm:text-[16px] mb-3 leading-relaxed">
                    {trader.desc1}
                  </p>
                  <p className="text-[#3f5224] text-sm sm:text-[16px] leading-relaxed">
                    {trader.desc2}
                  </p>
                </div>
              );
            }

            // Trader Cards
            return (
              <div
                key={trader.id}
                className="bg-white/95 backdrop-blur-sm border border-[#8dc442]/30 
                  rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 
                  flex flex-col h-full min-h-[520px] sm:min-h-[560px] lg:min-h-[580px]
                  w-full max-w-[340px] sm:max-w-[360px] lg:max-w-[400px] mx-auto
                  p-5 sm:p-6"
              >
                {/* Image */}
                <div className="flex justify-center mb-4">
                  <img
                    src={trader.img}
                    alt={trader.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-2 border-[#8dc442]"
                  />
                </div>

                {/* Name */}
                <h2 className="text-xl sm:text-2xl font-bold text-[#3f5224] text-center mb-5">
                  {trader.name}
                </h2>

                {/* Stats */}
                <ul className="flex-1 space-y-3 mb-6 mt-5 px-2 sm:px-12">
                  {trader.stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <li
                        key={index}
                        className="flex items-center gap-2.5 text-[#3f5224] text-xs sm:text-[18px]"
                      >
                        <Icon className="text-[#8dc442] text-base sm:text-lg flex-shrink-0" />
                        <span>
                          <strong>{stat.label}:</strong> {stat.value}
                        </span>
                      </li>
                    );
                  })}
                </ul>

                {/* Buttons */}
                <div className="mt-auto space-y-3 pb-4 px-2 sm:px-4">
                  <button className="w-full py-2.5 sm:py-4 bg-[#8dc442] text-white font-medium text-sm sm:text-base rounded-full hover:bg-[#76a838] transition-all duration-300">
                    Connect Now
                  </button>
                  <button className="w-full py-2.5 sm:py-4 border border-[#8dc442] text-[#3f5224] font-medium text-sm sm:text-base rounded-full hover:bg-[#8dc442]/10 transition-all duration-300">
                    Performance
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};