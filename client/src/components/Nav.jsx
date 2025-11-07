import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";


export const Nav = () => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll detection logic
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        // scrolling down → hide nav
        setVisible(false);
      } else {
        // scrolling up → show nav
        setVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-[3%] left-1/2 -translate-x-1/2 w-[1170px] max-w-[95%] border border-[#2B333F] rounded-full px-7 lg:px-9 py-3 backdrop-blur-md bg-[#fff6f61A] shadow-[0_4px_20px_rgba(0,0,0,0.15)] z-[999] transition-transform duration-500 ${visible ? "translate-y-0 opacity-100" : "-translate-y-[150%] opacity-0"
        }`}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <img
          src="images/money move logo 2-01.png"
          className="w-[75px] sm:w-[120px] md:w-[100px] lg:w-[80px] h-auto"
          alt="Logo"
        />

        {/* Center Menu */}
        <ul className="hidden sm:flex space-x-5 md:space-x-7 text-[#3f5224] text-[15px] md:text-[14px] lg:text-[16px] font-medium lg:ml-30">
          <li className="hover:text-[#8dc442] cursor-pointer transition-colors">
            <Link to="/">HOME</Link>
          </li>
          <li className="hover:text-[#8dc442] cursor-pointer transition-colors">
            <Link to="/Traders">TRADERS</Link>
          </li>
          <li className="hover:text-[#8dc442] cursor-pointer transition-colors">
            <Link to="/Fintec">MONEY CARE</Link>
          </li>
          <li className="hover:text-[#8dc442] cursor-pointer transition-colors">
            <Link to="/Faqs">FAQS</Link>
          </li>
          <li className="hover:text-[#8dc442] cursor-pointer transition-colors">
            <Link to="/Contact">CONTACT</Link>
          </li>
        </ul>

        {/* Right Button */}
        <button className="hidden lg:block mr-3 text-[15px] font-semibold text-[#ffffff] bg-[#8dc442] px-8 md:px-10 py-2.5 md:py-3 rounded-full transition-all duration-500 shadow-md relative overflow-hidden group cursor-pointer hover:shadow-[#8dc442]">
          <span className="relative z-10">Start Copy Trading</span>
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></span>
        </button>

        {/* Hamburger Icon */}
        <div
          className="block sm:hidden text-[#3f5224] text-2xl cursor-pointer"
          onClick={() => setOpen(true)}
        >
          <FiMenu />
        </div>
      </div>

      {/* Full-Screen Overlay */}
      {open && (
        <div className="fixed inset-0 bg-[#ffffff] w-full h-screen flex flex-col px-7 py-22 z-[1000] transition-all duration-300">
          {/* Close Button */}
          <div
            className="absolute top-6 right-6 text-[#3f5224] text-[19px] cursor-pointer"
            onClick={() => setOpen(false)}
          >
            <FiX />
          </div>

          {/* Nav Links - Left Side */}
          <ul className="space-y-6 text-[#3f5224] text-[19px] font-medium mt-16">
            <li><Link to="/" onClick={() => setOpen(false)}>HOME</Link></li>
            <li><Link to="/Traders" onClick={() => setOpen(false)}>TRADERS</Link></li>
            <li><Link to="/Fintec" onClick={() => setOpen(false)}>MONEY CARE</Link></li>
            <li><Link to="/Faqs" onClick={() => setOpen(false)}>FAQS</Link></li>
            <li><Link to="/Contact" onClick={() => setOpen(false)}>CONTACT</Link></li>
          </ul>

        </div>
      )}
    </header>
  );
};
