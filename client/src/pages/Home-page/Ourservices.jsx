import React from "react";

export const Ourservices = () => {
    const services = [
        {
            img: "images/icon1.webp",
            title: "MT5 Support",
            desc: "Fully compatible with all MT5 accounts, our platform ensures seamless and secure Forex copy trading across global markets. Whether you’re following top-performing traders or building your own portfolio, enjoy smooth trade execution, real-time synchronization, and complete transparency all through the trusted power of MetaTrader 5.",
        },
        {
            img: "images/icon2.webp",
            title: "Client Autonomy",
            desc: "Your funds always remain in your own trading account, never transferred to any third party. This ensures full transparency, security, and independence at every step. You stay in control while seamlessly copying the strategies of professional traders, with complete visibility of every trade and balance movement empowering you to grow your portfolio with confidence and peace of mind.",
        },
        {
            img: "images/icon3.webp",
            title: "Mirror Trading",
            desc: "Experience the power of mirror trading by automatically replicating the strategies of skilled traders in real time. No prior trading experience is needed; simply follow proven experts, diversify your portfolio, and watch your investments grow with transparency and control. It’s a smarter, effortless way to participate in the Forex market while learning from professionals.",
        },
        {
            img: "images/icon4.webp",
            title: "Low Investment",
            desc: "Start mirror trading with a small investment and unlock steady passive income opportunities every month. Even with minimal capital, you can follow expert traders, benefit from their experience, and grow your portfolio at your own pace. Designed for accessibility and transparency, it’s the simplest way to begin your Forex journey with low risk and consistent returns.",
        },
        {
            img: "images/icon5.webp",
            title: "Real Sync",
            desc: "Experience true real-time synchronization where every trade is replicated instantly and accurately. Our system ensures that your account mirrors expert traders’ actions without delay, maintaining precision and transparency in every execution. Stay fully aligned with live market movements and enjoy a seamless, up-to-date trading experience built for reliability and performance.",
        },
        {
            img: "images/icon6.webp",
            title: "Fast Payment",
            desc: "Enjoy a smooth and secure payment process designed to support your copy trading journey. Deposits and withdrawals are processed quickly, giving you instant access to your funds whenever you need them. With multiple reliable payment options and real-time transaction updates, you can trade confidently without delays or complications.",
        },
    ];

    return (
        <div className="w-full min-h-screen flex flex-col items-center text-center pt-10 px-4 bg-white">
            {/* Top Heading */}
            <h1 className="text-[15px] sm:text-[18px] font-bold text-[#3f5224] tracking-wide mb-2">
                OUR SERVICES
            </h1>

            <h2 className="text-[20px] sm:text-[24px] md:text-[30px] font-medium text-[#3f5224] mb-4">
                Enhance Your Copy Trading Experience
            </h2>

            <p className="text-[14px] sm:text-[16px] text-[#3f5224] max-w-3xl md:max-w-4xl leading-relaxed mb-12 font-medium">
                We provide a comprehensive suite of trading solutions tailored to support informed and
                strategic decisions. From expert strategies to real-time execution, we provide everything
                you need to trade smarter.
            </p>

            {/* Responsive Service Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="w-full sm:w-[300px] md:w-[350px] lg:w-[380px] h-auto min-h-[370px] bg-[#f7f7f7] rounded-xl shadow-md p-6 text-left flex flex-col border border-transparent hover:border-[#8dc442] transition-all duration-300 ease-in-out hover:shadow-lg"
                    >
                        <img
                            src={service.img}
                            alt={service.title}
                            className="w-[65px] h-[65px] mb-4 filter hue-rotate-[90deg] brightness-110"
                        />

                        <h3 className="text-[18px] sm:text-[20px] font-bold text-[#3f5224] mt-2">
                            {service.title}
                        </h3>
                        <p className="text-[13px] sm:text-[14px] text-[#3f5224] font-medium mt-4 leading-relaxed">
                            {service.desc}
                        </p>
                    </div>
                ))}
            </div>

            {/* CTA Button */}
            <button
                className="mt-12 bg-[#8dc442] text-[#ffffff] px-6 py-3 rounded-full text-[15px] sm:text-[16px] font-semibold transition-all duration-300 ease-in-out hover:bg-[#8dc442] hover:scale-105 shadow-md"
            >
                Dive into Our Services
            </button>
        </div>
    );
};
