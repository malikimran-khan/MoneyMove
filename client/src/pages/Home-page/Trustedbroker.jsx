import React from "react";

export const Trustedbroker = () => {
    return (
        <div className="w-full min-h-screen flex flex-col justify-between items-center text-center  py-10 bg-white">
            <div className="w-full">
                <h1 className="text-[24px] md:text-[28px] font-bold text-[#3f5224] text-left px-3 md:ml-18">
                    Our Trusted Broker Partners
                </h1>

                <p className="text-[15px] md:text-[17px] text-[#3f5224] font-medium max-w-4xl text-left leading-relaxed ml-4 md:ml-15 mt-8 px-6">
                    At <strong>Money Move</strong>, we collaborate exclusively with
                    <strong> globally regulated and reputable brokers</strong> to guarantee every trader a
                    <strong> secure, transparent, and lightning-fast trading experience</strong>. Our broker
                    network has been carefully selected to support seamless forex copy trading, ensuring smooth
                    account integration, reliable execution, and complete peace of mind for our users.
                </p>

                {/* Broker Logos */}
                <div className="flex flex-col sm:flex-row justify-center md:justify-evenly items-center mt-10 lg:mt-25 gap-6 sm:gap-10">
                    <img
                        src="images/FASM.png"
                        alt="FASM"
                        className="w-[130px] sm:w-[150px] object-contain bg-black p-2 rounded-md"
                    />
                    <img
                        src="images/FBS.svg"
                        alt="FBS"
                        className="w-[90px] sm:w-[100px] object-contain"
                    />
                    <img
                        src="images/MIC.png"
                        alt="MIC"
                        className="w-[90px] sm:w-[100px] object-contain"
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
