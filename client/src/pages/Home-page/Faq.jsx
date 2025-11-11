import React, { useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

export const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is copy trading and how does it work?",
      answer:
        "Copy trading allows you to automatically replicate the trades of expert traders. When they make a trade, it’s copied to your account in real-time, giving you the same results proportionally.",
    },
    {
      question: "Do I need trading experience to start?",
      answer:
        "No, you don’t. Copy trading is designed for beginners and professionals alike. You simply choose a trader to follow and the system does the rest automatically.",
    },
    {
      question: "Can I withdraw my profits anytime?",
      answer:
        "Yes, your funds always remain in your account. You can withdraw your profits anytime without restrictions or hidden fees.",
    },
    {
      question: "How do I select the best master trader to follow?",
      answer:
        "You can review each trader’s performance history, risk level, and strategy before following them. Transparency helps you make an informed decision.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full min-h-screen flex flex-col justify-start items-center text-center  px-6 bg-white">
      {/* Heading Section */}
      <h1 className="text-[16px] font-semibold text-[#8dc442] tracking-wide mb-2">
        FAQ
      </h1>

      <h2 className="text-[22px] sm:text-[26px] md:text-[30px] font-bold text-[#3f5224] mb-4 ">
        Frequently Asked Questions
      </h2>

      <p className="text-[15px] sm:text-[16px] md:text-[17px] text-[#3f5224] max-w-4xl leading-relaxed mb-10 text-left lg:text-center ml-1 lg:ml-0">
        Have questions about how copy trading works or how to get started? Our
        FAQ section provides clear, straightforward answers to help you make
        confident decisions. From account setup to trading strategies and
        withdrawals, explore everything you need to know for a smooth and
        informed trading experience.
      </p>

      {/* Accordion Section */}
      <div className="w-full max-w-6xl space-y-6 text-left mb-10">
        {faqs.map((faq, index) => (
          <div
            key={index}
            onClick={() => toggleFAQ(index)}
            className="border border-[#8dc442]/40 rounded-lg p-5 cursor-pointer bg-[#f9f9f9] hover:border-[#8dc442] shadow-sm hover:shadow-md transition-all duration-300"
          >
            {/* Question Row */}
            <div className="flex justify-between items-center">
              <h3 className="text-[15px] lg:text-[20px] font-semibold text-[#3f5224]">
                {faq.question}
              </h3>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <HiChevronDown className="text-[#8dc442] text-[24px]" />
              </motion.div>
            </div>

            {/* Animated Answer */}
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="mt-4 text-[15px] text-[#3f5224] leading-relaxed border-t border-gray-200 pt-3">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Read More Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-12 py-3 bg-[#8dc442] text-[#ffffff] font-semibold rounded-full shadow-md hover:bg-[#7bb03c] transition-colors duration-300 text-[18px] cursor-pointer"
      >
        Read More
      </motion.button>
    </div>
  );
};
