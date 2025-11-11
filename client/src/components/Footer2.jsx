import React from "react";
import { Link } from "react-router-dom";


export const Footer2 = () => {
    return (
        <div className="w-full bg-gradient-to-b from-[#8dc4421a] via-[#8dc44233] to-transparent text-[#2c2c2c] py-12 px-6 md:px-16 leading-relaxed">
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Company Info */}
                <h3 className="text-[15px] font-bold text-[#8dc442]">
                    MONEY MOVE LIMITED
                </h3>

                <p className="text-[13px]">
                    <strong className="text-[#8dc442]">Money Move</strong> is operated by
                    MONEY MOVE LIMITED, a company registered in the United Kingdom
                    under Registration No 000000. Our head office is located at 2
                    Frederick Street, Kings Cross, London.
                </p>

                <p className="text-[13px]">
                    For any business inquiries, partnerships, or customer support, please
                    contact us at{" "}
                    <strong className="text-[#8dc442]">support@moneymove.com</strong>{" "}
                    or call us at <strong>+00 0000 000000</strong> (additional contact:{" "}
                    <strong>+00 0000 000000</strong>).
                </p>

                <p className="text-[13px]">
                    At{" "}
                    <strong className="text-[#8dc442]">Money Move</strong>, we are
                    committed to transparency, trust, and innovation in copytrading and
                    financial technology services.
                </p>

                {/* Disclaimer Section */}
                <h2 className="text-[15px] font-semibold uppercase text-[#8dc442] pt-6">
                    Disclaimer
                </h2>

                <p className="text-[12px] leading-relaxed">
                    The information provided on this website is for general informational
                    purposes only and is not intended to be relied upon as investment
                    advice. Trading and investing in financial markets carries a high
                    level of risk and may not be suitable for all investors. It is
                    important to understand the risks involved before engaging in any
                    trading or investment activity.
                </p>

                <p className="text-[12px] leading-relaxed">
                    Please note that trading in financial markets involves a high level of
                    risk, and past performance is not necessarily indicative of future
                    results. The use of any trading or investment strategy is at the
                    user’s sole discretion and risk. Money Move makes no
                    representation or warranty regarding the accuracy, reliability, or
                    completeness of any information provided on this website or any
                    trading or investment activity conducted through our platform.
                </p>

                <p className="text-[12px] leading-relaxed">
                    Users should carefully consider their financial situation, investment
                    objectives, and risk tolerance before engaging in any trading or
                    investment activity. Users should also seek independent financial
                    and/or legal advice before making any investment decision. Money
                    Move is not liable for any loss or damage that may arise directly
                    or indirectly from the use of any information provided on this website
                    or any trading or investment activity conducted through our platform.
                </p>

                <p className="text-[12px] leading-relaxed">
                    Please be aware that we do not provide investment advice, and any
                    decision to engage in trading or investment activity is at the user’s
                    sole discretion and risk. Furthermore, we do not guarantee any profit
                    or loss, and any profits are subject to market fluctuations and risks
                    associated with financial trading. Users should only use funds that
                    they can afford to lose, and Money Move is not liable for any
                    losses incurred by users.
                </p>

                <p className="text-[12px] leading-relaxed">
                    We recommend that users carefully read and understand our terms and
                    conditions, risk disclosure, and privacy policy before engaging in any
                    trading or investment activity through our platform. By using our
                    platform, users agree to all terms and conditions, risk disclosure,
                    and privacy policy.
                </p>

                <ul className="w-full flex flex-col sm:flex-row justify-between items-center text-[12px] lg:text-[14px] text-[#3f5224] mt-6 border-t border-[#8dc442]/40 pt-4 gap-2 sm:gap-0">
                    <li>©2025 Moneymove Inc. All rights reserved. Designed with care.</li>

                    <li className="flex gap-3">
                        <Link
                            to="/privacy-policy"
                            className="text-[#8dc442] font-semibold hover:underline"
                        >
                            Privacy Policy
                        </Link>
                        {" |"}
                        <Link
                            to="/terms-of-services"
                            className="text-[#8dc442] font-semibold hover:underline"
                        >
                            Terms of Services
                        </Link>
                    </li>
                </ul>

            </div>
        </div>
    );
};
