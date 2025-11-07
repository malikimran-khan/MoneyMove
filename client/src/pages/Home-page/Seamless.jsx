import React from "react";
import { motion } from "framer-motion";
import { HiCheck } from "react-icons/hi";

export const Seamless = () => {
    return (
        <div className="w-full h-auto md:h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-12 bg-white">

            {/* Left Text Section */}
            <div className="w-full md:w-1/2 text-left mb-10 md:mb-0">
                <h5 className="text-[16px] text-[#8dc442] font-semibold mb-2 tracking-wide">
                    SEAMLESS PROCESS
                </h5>

                <h2 className="text-[24px] md:text-[32px] font-bold text-[#3f5224] mb-4">
                    How Can You Join?
                </h2>

                <p className="text-[14px] md:text-[17px] text-[#3f5224] leading-relaxed font-medium mb-6">
                    <strong className="text-[#8dc442]">Money Move</strong>, a Forex copy trading platform,
                    is a fully automated trading system that offers real-time trade
                    replication from expert traders with zero effort. To get started,
                    simply register on the Broker, open a live trading account, deposit
                    funds into your wallet, and transfer them to your MT5 account. Once
                    completed, follow the steps below.
                </p>

                {/* Tick Points */}
                <div className="flex flex-col gap-4 mt-4 text-[#3f5224] font-medium">
                    <div className="flex items-center gap-3">
                        <span className="bg-[#8dc442] text-white p-1.5 rounded-full">
                            <HiCheck className="text-[12px]" />
                        </span>
                        <p>
                            Go to{" "}
                            <a
                                href="#"
                                className="text-[#8dc442] transition-colors duration-200 underline-offset-2 hover:underline"
                            >
                                Money Move Traders
                            </a>{" "}
                            Page
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <span className="bg-[#8dc442] text-white p-1.5 rounded-full">
                            <HiCheck className="text-[12px]" />
                        </span>
                        <p>Select an expert Trader and click on the “follow”</p>
                    </div>

                    <div className="flex items-center gap-3">
                        <span className="bg-[#8dc442] text-white p-1.5 rounded-full">
                            <HiCheck className="text-[12px]" />
                        </span>
                        <p>Fill the form and click “connect” to join us</p>
                    </div>
                </div>
            </div>

            {/* Right Image Section */}
            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="w-full md:w-1/2 flex justify-center md:justify-end"
            >
                <img
                    src="images/seamless.png"
                    alt="Seamless Copy Trading"
                    className="h-[310px] sm:h-[400px] md:h-[500px] object-contain"
                />
            </motion.div>
        </div>
    );
};
