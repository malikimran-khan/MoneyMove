import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export const Nav = () => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const isActive = (path) => location.pathname === path;

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
        <ul className="hidden sm:flex space-x-6 md:space-x-8 text-[#3f5224] text-[15px] md:text-[14px] lg:text-[16px] font-medium">
          {[
            { name: "HOME", path: "/" },
            { name: "TRADERS", path: "/Traders" },
            { name: "MONEY CARE", path: "/Fintec" },
            { name: "FAQS", path: "/Faqs" },
            { name: "CONTACT", path: "/Contact" },
          ].map((item) => (
            <li key={item.path} className="relative group">
              <Link
                to={item.path}
                className={`transition-colors duration-300 ${isActive(item.path)
                    ? "text-[#8dc442]"
                    : "hover:text-[#8dc442]"
                  }`}
              >
                {item.name}
              </Link>
              <span
                className={`absolute left-0 bottom-[-5px] h-[2px] bg-[#8dc442] transition-all duration-500 ${isActive(item.path)
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                  }`}
              ></span>
            </li>
          ))}
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

      {/* Mobile Menu (Slide from Left) */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 bg-[#ffffff] top-[-8%] w-full h-screen flex flex-col px-7 py-22 z-[1000]"
          >
            {/* Close Button */}
            <div
              className="absolute top-6 right-6 text-[#3f5224] text-[19px] cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <FiX />
            </div>

            {/* Nav Links */}
            <ul className="space-y-6 text-[#3f5224] text-[19px] font-medium mt-16">
              {[
                { name: "HOME", path: "/" },
                { name: "TRADERS", path: "/Traders" },
                { name: "MONEY CARE", path: "/Fintec" },
                { name: "FAQS", path: "/Faqs" },
                { name: "CONTACT", path: "/Contact" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className={`inline-block relative pb-1 ${isActive(item.path)
                        ? "text-[#8dc442] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#8dc442]"
                        : "hover:text-[#8dc442]"
                      }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
