import React from "react";

export const Trustedbroker = () => {
    return (
        <div className="w-full min-h-screen flex flex-col justify-between items-center text-center  py-10 bg-white">
            <div className="w-full">
                <h1 className="text-[24px] md:text-[28px] font-bold text-[#3f5224] text-left px-3  ml-3.5 md:ml-14">
                    Our Trusted Broker Partners
                </h1>

                <p className="text-[15px] md:text-[17px] text-[#3f5224] font-medium max-w-4xl text-left leading-relaxed ml-1 lg:ml-11 md:ml-12 mt-8 px-6">
                    At <strong className="text-[#8dc442]">Money Move</strong>, we collaborate exclusively with
                    <strong className="text-[#8dc442]"> globally regulated and reputable brokers</strong> to guarantee every trader a
                    <strong className="text-[#8dc442]"> secure, transparent, and lightning-fast trading experience</strong>. Our broker
                    network has been carefully selected to support seamless forex copy trading, ensuring smooth
                    account integration, reliable execution, and complete peace of mind for our users.
                </p>

                {/* Broker Logos */}
                <div className="grid grid-cols-2 sm:flex sm:flex-row justify-center md:justify-evenly items-center mt-15 lg:mt-25 gap-10 sm:gap-1">
                    <img
                        src="images/FASM.png"
                        alt="FASM"
                        className="w-[130px] sm:w-[150px] object-contain bg-black p-2 rounded-md mx-auto"
                    />
                    <img
                        src="images/FBS.svg"
                        alt="FBS"
                        className="w-[90px] sm:w-[100px] object-contain mx-auto"
                    />
                    <img
                        src="images/MIC.png"
                        alt="MIC"
                        className="w-[90px] sm:w-[100px] object-contain mx-auto"
                    />
                    <img
                        src="images/exness.webp"
                        alt="Exness"
                        className="w-[90px] sm:w-[100px] object-contain mx-auto"
                    />
                </div>

            </div>

            {/* Bottom Text */}
            <p className="text-[14px] md:text-[18px] text-[#3f5224] font-semibold text-center mb-0 lg:mb-4 max-w-2xl mt-10 sm:mt-0 md:mt-0 lg:mt-0 ">
                Connect with our verified broker partners today and experience real-time trading
                excellence backed by transparency and trust.
            </p>
        </div>
    );
};
