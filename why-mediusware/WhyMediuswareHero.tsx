import React from "react";

const WhyMediuswareHero = () => {
  return (
    <div className="bg-cover w-full min-h-[720px] bg-center bg-[url('/assets/WhyMediusware/hero.png')] flex items-center justify-center text-center">
      <div className="">
        <h1 className="text-7xl uppercase text-white">
          Elevating Excellence in
        </h1>
        <h1 className=" text-white mt-2 uppercase">
          Every <span className="text-primary-1">Solution</span>
        </h1>
        <p className="mt-6 text-white text-xl">
          Discover unparalleled quality and innovation with Mediusware, where
          every solution <br />
          is crafted to elevate your experience and exceed expectations.
        </p>
        <button className="text-[22px] font-medium uppercase border border-white rounded-xl flex items-center gap-4 py-[18px] px-8 text-white mt-16 mx-auto hover:bg-primary-3 hover:border-[#0060af] transall duration-300 group">
          Request a quote
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 group-hover:rotate-45 transition-all duration-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default WhyMediuswareHero;
