import React from "react";
import { FaInstagram, FaTiktok, FaFacebookF, FaYoutube } from "react-icons/fa";

export const Footer1 = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-[#8dc4421a] via-[#8dc44233] to-transparent text-[#2c2c2c] py-12 px-6 rounded-3xl mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-left">
        {/* Logo & Description */}
        <div className="ml-1 lg:ml-10">
          <img
            src="images/money move logo 2-01.png"
            alt="Money Move Logo"
            className="w-[110px] h-auto mb-4"
          />
          <p className="text-[14px] text-[#3f5224]">
            Join{" "}
            <strong className="text-[#8dc442] font-semibold">Money Move</strong>{" "}
            as your trusted trading partner and experience smarter, more
            transparent Forex investing. Empower your journey with expert
            strategies, real-time performance, and complete control.
          </p>
        </div>

        {/* Links */}
        <div className="ml-0 lg:ml-20">
          <h3 className="font-bold text-[16px] mb-3 text-[#8dc442]">LINKS</h3>
          <ul className="space-y-2 text-[14px]">
            <li className="hover:text-[#8dc442] cursor-pointer transition-colors">
              <a href="/" className="block">Home</a>
            </li>
            <li className="hover:text-[#8dc442] cursor-pointer transition-colors">
              <a href="/traders" className="block">Traders</a>
            </li>
            <li className="hover:text-[#8dc442] cursor-pointer transition-colors">
              <a href="/about" className="block">About</a>
            </li>
            <li className="hover:text-[#8dc442] cursor-pointer transition-colors">
              <a href="/copy-trading" className="block">Copy Trading Solution</a>
            </li>
            <li className="hover:text-[#8dc442] cursor-pointer transition-colors">
              <a href="/forex-vps" className="block">Forex VPS</a>
            </li>
            <li className="hover:text-[#8dc442] cursor-pointer transition-colors">
              <a href="/contact" className="block">Contact Us</a>
            </li>
          </ul>

        </div>

        {/* Explore */}
        <div>
          <h3 className="font-bold text-[16px] mb-3 text-[#8dc442]">EXPLORE</h3>
          <ul className="space-y-2 text-[14px]">
            <li className="hover:text-[#8dc442] cursor-pointer transition-colors">
              <a href="/Fintec" className="block">Money Move Care</a>
            </li>
            <li className="hover:text-[#8dc442] cursor-pointer transition-colors">
              <a href="/investors-guide" className="block">Investors Guide</a>
            </li>
            <li className="hover:text-[#8dc442] cursor-pointer transition-colors">
              <a href="/master-trader-guide" className="block">Master Trader Guide</a>
            </li>
          </ul>

        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold text-[16px] mb-3 text-[#8dc442]">CONTACT</h3>
          <ul className="space-y-2 text-[14px]">
            <li className="text-[#3f5224]">support@moneymove.com</li>
            <li className="text-[#3f5224]]">
              2 Frederick Street, Kings Cross, London, United Kingdom, Wc1X0ND.
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-5 mt-10">
            <div className="p-2 bg-[#8dc4421a] rounded-md hover:bg-[#8dc442] transition-all cursor-pointer">
              <FaInstagram className="text-[18px] text-[#3f5224] hover:text-white" />
            </div>
            <div className="p-2 bg-[#8dc4421a] rounded-md hover:bg-[#8dc442] transition-all cursor-pointer">
              <FaTiktok className="text-[18px] text-[#3f5224] hover:text-white" />
            </div>
            <div className="p-2 bg-[#8dc4421a] rounded-md hover:bg-[#8dc442] transition-all cursor-pointer">
              <FaFacebookF className="text-[18px] text-[#3f5224] hover:text-white" />
            </div>
            <div className="p-2 bg-[#8dc4421a] rounded-md hover:bg-[#8dc442] transition-all cursor-pointer">
              <FaYoutube className="text-[18px] text-[#3f5224] hover:text-white" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
