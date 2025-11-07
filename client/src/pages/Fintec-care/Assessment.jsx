import React from "react";

export const Assessment = () => {
  const items = [
    {
      title: "Trading History & Performance Review",
      desc: "We thoroughly verify the trader’s past trading records to confirm consistency and profitability over time.",
    },
    {
      title: "Strategy & Trading Style Assessment",
      desc: "We analyze the trader’s overall approach, including strategy execution, trading discipline, and market behavior.",
    },
    {
      title: "Trade & Money Management Evaluation",
      desc: "Our team reviews how the trader manages individual trades and capital allocation to protect your capital.",
    },
    {
      title: "Risk & Portfolio Management Analysis",
      desc: "We evaluate traders' ability on risk management and portfolio diversification across market conditions.",
    },
    {
      title: "Drawdown Monitoring",
      desc: "We monitor traders’ drawdowns to ensure they stay within limits and protect clients from major losses.",
    },
    {
      title: "Behavioral and Ethical Standards",
      desc: "Beyond numbers, we monitor discipline, transparency, and trading ethics to ensure alignment with ethical principles.",
    },
  ];

  return (
    <section className="w-full bg-white py-10 px-6 sm:px-12 md:px-20">
      <h2 className="text-center text-3xl sm:text-4xl font-bold text-[#3f5224] mb-12">
        Our Comprehensive Assessment Process Includes
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, i) => (
          <div
            key={i}
            className="bg-[#f9f9f9] border border-[#8dc442]/30 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 rounded-2xl p-6"
          >
            <h3 className="text-lg sm:text-[23px] font-semibold text-[#8dc442] mb-3">
              {item.title}
            </h3>
            <p className="text-[#3f5224]/90 text-[16px] leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
    
  );
};
