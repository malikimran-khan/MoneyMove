import React, { useState, useEffect, useRef } from "react";
import { FaStar } from "react-icons/fa";

export const Test = () => {
  const testimonials = [
    {
      name: "Ayesha Khan",
      desc: "Money Move completely changed my trading experience. The transparency and ease of use make it stand out from other platforms I’ve tried.",
    },
    {
      name: "Michael Lee",
      desc: "I’ve been consistently earning passive income with Money Move. The copytrading feature is amazing, and payouts are always on time.",
    },
    {
      name: "Sara Ahmed",
      desc: "What I love most is how secure and trustworthy the platform feels. I can follow expert traders with full control and confidence.",
    },
    {
      name: "Omar Farooq",
      desc: "The real-time analytics and expert strategies have boosted my portfolio by 40% in just 3 months. Highly recommended!",
    },
    {
      name: "Laila Hassan",
      desc: "As a beginner, I was nervous, but the guided onboarding and low-risk options made trading simple and profitable.",
    },
    {
      name: "James Carter",
      desc: "Fast withdrawals, transparent fees, and 24/7 support  Money Move is the most reliable platform I’ve used.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);
  const slidesPerView = 3; // 3 slides at a time on md+

  // Auto-slide
  useEffect(() => {
    const startAutoSlide = () => {
      timeoutRef.current = setInterval(() => {
        setCurrentIndex((prev) =>
          prev >= testimonials.length - slidesPerView ? 0 : prev + 1
        );
      }, 4000);
    };

    startAutoSlide();
    return () => clearInterval(timeoutRef.current);
  }, [testimonials.length]);

  // Pause on hover
  const handleMouseEnter = () => clearInterval(timeoutRef.current);
  const handleMouseLeave = () => {
    timeoutRef.current = setInterval(() => {
      setCurrentIndex((prev) =>
        prev >= testimonials.length - slidesPerView ? 0 : prev + 1
      );
    }, 3000);
  };

  // Total pages for dots
  const totalPages = Math.ceil(testimonials.length / slidesPerView);
  const activePage = Math.floor(currentIndex / slidesPerView);

  return (
    <div className="w-full min-h-screen flex flex-col justify-start items-center text-center pt-6 px-6 bg-white">
      <h1 className="text-[16px] font-bold text-[#8dc442] tracking-wide mb-2">
        TESTIMONIALS
      </h1>

      <h2 className="text-[22px] sm:text-[26px] md:text-[30px] font-bold text-[#3f5224] mb-4 max-w-3xl">
        What Our Clients Say About Money Move
      </h2>

      <p className="text-[15px] sm:text-[16px] md:text-[17px] text-[#3f5224] max-w-4xl leading-relaxed mb-12">
        Don’t just take our word for it hear from investors and traders who have consistently grown their wealth through our copytrading platform. From monthly profit withdrawals to risk-controlled trading, discover why Money Move is trusted by clients worldwide.   
      </p>

      {/* Carousel */}
      <div
        className="w-full max-w-7xl overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)`,
          }}
        >
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full md:w-1/3 px-1 lg:px-4"
              style={{ minWidth: `${100 / slidesPerView}%` }}
            >
              <div className="h-[260px] bg-[#f7f7f7] rounded-xl shadow-md p-6 text-left border border-transparent hover:border-[#8dc442] hover:shadow-lg transition-all duration-300">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-[#8dc442] text-[16px]" />
                  ))}
                </div>

                <p className="text-[14px] text-[#3f5224] mt-5 leading-relaxed">
                  {item.desc}
                </p>

                <button className="bg-[#8dc442] mt-6 text-white text-[13px] px-4 py-2 font-medium hover:bg-[#76a931] transition">
                  Read More
                </button>

                <p className="text-[15px] font-semibold text-[#3f5224] mt-5">
                  {item.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fixed Dots */}
      <div className="flex gap-2 mt-8">
        {Array.from({ length: totalPages }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx * slidesPerView)}
            className={`h-2 rounded-full transition-all duration-300 ${
              activePage === idx
                ? "bg-[#8dc442] w-8"
                : "bg-gray-300 w-2"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};