import React from "react";

export const Contact = () => {
  return (
    <div className="w-full min-h-screen bg-white flex justify-center items-center mt-35 px-4 sm:px-8">
      <div className="max-w-6xl w-full flex flex-col md:flex-row bg-white rounded-2xl shadow-xl overflow-hidden border border-[#8dc442]/30">
        
        {/* LEFT SIDE - Text */}
        <div className="w-full md:w-1/2 text-[#3f5224] p-6 sm:p-10 flex flex-col justify-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-[#8dc442]">
            Contact US
          </h2>

          <p className="text-[#3f5224]/90 mb-6 leading-relaxed text-[15px] sm:text-[16px]">
            Whether you’re new to Money Move or have a question about your existing account, we can help.
            Simply fill in your details below and we’ll get back to you soon.
          </p>

          <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-[#8dc442]">
            Email Enquiries
          </h3>

          <ul className="space-y-3 text-[#3f5224]/90 text-[15px] sm:text-[16px]">
            <li className="flex items-center gap-2">
              <span className="text-[#8dc442] text-lg">📧</span>
              support@moneymove.com
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#8dc442] text-lg">📧</span>
              accounts@moneymove.com
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#8dc442] text-lg">📧</span>
              contact@moneymove.com
            </li>
          </ul>
        </div>

        {/* RIGHT SIDE - Form */}
        <div className="w-full md:w-1/2 bg-[#f9faf7] p-6 sm:p-10 flex flex-col justify-center">
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Full Name*"
              className="w-full px-4 py-3 bg-white border border-[#8dc442]/40 rounded-md text-[#3f5224] focus:border-[#8dc442] focus:shadow-[0_0_6px_#8dc442] outline-none text-sm sm:text-base"
            />
            <input
              type="email"
              placeholder="Email*"
              className="w-full px-4 py-3 bg-white border border-[#8dc442]/40 rounded-md text-[#3f5224] focus:border-[#8dc442] focus:shadow-[0_0_6px_#8dc442] outline-none text-sm sm:text-base"
            />
            <input
              type="text"
              placeholder="Phone*"
              className="w-full px-4 py-3 bg-white border border-[#8dc442]/40 rounded-md text-[#3f5224] focus:border-[#8dc442] focus:shadow-[0_0_6px_#8dc442] outline-none text-sm sm:text-base"
            />
            <textarea
              placeholder="Your Message*"
              rows="4"
              className="w-full px-4 py-3 bg-white border border-[#8dc442]/40 rounded-md text-[#3f5224] focus:border-[#8dc442] focus:shadow-[0_0_6px_#8dc442] outline-none text-sm sm:text-base"
            ></textarea>

            <button
              type="submit"
              className="w-full py-3 bg-[#8dc442] hover:bg-[#7bbc3a] text-white font-bold rounded-md transition-all shadow-md text-sm sm:text-base"
            >
              SEND!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
