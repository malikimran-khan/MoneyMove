import React, { useEffect, useRef } from "react";
import Hls from "hls.js";

export const Home = () => {
  const videoRef = useRef(null);
  const videoSrc =
    "https://content.apisystem.tech/hls/medias/BUjfOaQJJm8mX0dG4LcH/media/transcoded_videos/cts-c9d357405af2768b_,360,480,720,1080,p.mp4.urlset/master.m3u8";

  useEffect(() => {
    const video = videoRef.current;
    if (video && Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(videoSrc);
      hls.attachMedia(video);
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = videoSrc;
    }
  }, []);

  return (
    <div className="w-full h-auto bg-[#ffffff] flex flex-col items-center justify-center text-center px-6 py-20 mt-25 sm:mt-35 lg:mt-30">
      {/* Desktop & Tablet View (hidden on mobile) */}
      <div className="max-w-5xl -mt-10 mb-10 hidden sm:block">
        <h1 className="text-[35px] md:text-[35px] font-bold text-[#3f5224] mb-4">
          Copy Trading Simplified with Risk Management
        </h1>
        <h2 className="text-[24px] md:text-[29px] text-[#3f5224] font-bold mb-3">
          Money move helps you copy expert traders safely and profitably
        </h2>
        <p className="text-[#3f5224] text-[18px] md:text-[19px] leading-relaxed font-medium max-w-4xl mx-auto">
          Start your journey with{" "}
          <strong className="text-[#8dc442] text-[19px]">
            Money Move,
          </strong>{" "}
          where copy trading is simplified and risk-managed. Mirror top traders,
          build steady profits, and grow your portfolio with safety, confidence,
          and ease.
        </p>
      </div>

      {/* Video Section */}
      <div className="w-full max-w-5xl flex justify-center">
        <video
          ref={videoRef}
          className="vjs-big-play-centered video-js vjs-ghl hide-quality-selector autoplay vjs-fluid  shadow-lg"
          controls
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      {/* Mobile View (hidden on sm and up) */}
      <div className="block sm:hidden mt-6">
        <h1 className="text-[26px] font-bold text-[#3f5224] mb-3">
          Copy Trading Made Easy with Fintec Markets
        </h1>
        <p className="text-[#3f5224] text-[14px] leading-relaxed font-semibold mt-5">
          Discover How MONEY Markets Makes Copy Trading Simple, Safe, And
          Rewarding. Follow Top Traders, Grow Your Portfolio With Smart
          Strategies, And Enjoy Peace Of Mind Through Effective Risk Management
          That Helps Protect Your Investments While Maximizing Potential
          Returns.
        </p>
      </div>
    </div>
  );
};
