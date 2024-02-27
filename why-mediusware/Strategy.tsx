import React from "react";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import SectionGap from "./SectionGap";

const Strategy = () => {
  return (
    <SectionWrapper>
      <div className="grid grid-cols-12 gap-x-14">
        <div className="col-span-5">
          <span className="text-[#0060AF]">Why Choose Mediusware</span>
          <h1 className="text-5xl my-3">Build A Strategy That Puts An</h1>
          <SectionTitle
            title1="Your"
            title2="Money To Work"
            center={false}
            description=""
          />
          <p className="text-gray-500 mt-4 w-[85%]">
            This is the main factor that sets us apart from our and allows us
            deliver a Special ist business consul Our team applies its ranging
            experience strategies us deliver a specialist business consul Our
            team.
          </p>
          <div className="mt-10 bg-[#C2D9EC] py-2 px-4 max-w-[284px] rounded-lg flex items-center gap-4">
            <div className="w-12 h-11 bg-primary-3 flex items-center justify-center rounded-lg">
              <img src="/assets/WhyMediusware/ex.png" alt="" />
            </div>
            <span className="text-primary-3 font-semibold">
              10 Years of Experience
            </span>
          </div>
          <div className="flex flex-col gap-3 py-3 mt-4 text-primary-1 font-semibold">
            <div className="flex gap-4">
              <img
                className="w-5 h-5 mt-2"
                src="/assets/WhyMediusware/check.png"
                alt=""
              />
              <span className="text-gray-600 w-[92%] text-lg">
                This is the main factor that sets us apart from our and allows
                us deliver a Special.
              </span>
            </div>
            <div className="flex gap-4">
              <img
                className="w-5 h-5 mt-2"
                src="/assets/WhyMediusware/check.png"
                alt=""
              />
              <span className="text-gray-600 w-[92%] text-lg">
                This is the main factor that sets us apart from our and allows
                us deliver a Special.
              </span>
            </div>
            <div className="flex gap-4">
              <img
                className="w-5 h-5 mt-2"
                src="/assets/WhyMediusware/check.png"
                alt=""
              />
              <span className="text-gray-600 w-[92%] text-lg">
                This is the main factor that sets us apart from our and allows
                us deliver a Special.
              </span>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-x-4 mt-8">
            <div className="col-span-4 flex flex-col items-center gap-4 py-10 bg-[#E6EFF7] rounded-xl">
              <h1 className="text-[66px] text-primary-3">70+</h1>
              <p className="text-lg text-primary-3">Team Members</p>
            </div>
            <div className="col-span-4 flex flex-col items-center gap-4 py-10 bg-[#E6F6F4] rounded-xl">
              <h1 className="text-[66px] text-primary-2">70+</h1>
              <p className="text-lg text-primary-2">Team Members</p>
            </div>
            <div className="col-span-4 flex flex-col items-center gap-4 py-10 bg-[#F5E9F4] rounded-xl">
              <h1 className="text-[66px] text-[#831F7A]">70+</h1>
              <p className="text-lg text-[#831F7A]">Team Members</p>
            </div>
          </div>
        </div>
        <div className="col-span-5 relative">
          <Image
            className="w-full h-full"
            width={800}
            height={900}
            quality={100}
            src="/assets/WhyMediusware/team.png"
            alt="Team"
          />
          <div className="absolute bottom-[6%] flex items-center justify-center w-[482px] h-[332px] -right-[35%] bg-cover bg-center bg-[url('/assets/WhyMediusware/rewardBg.png')]">
            <div className="relative">
              <Image
                className="bg-cover bg-center"
                src="/assets/WhyMediusware/rewardDotted.png"
                width={426}
                height={280}
                alt="Dotted"
              />
              <div className="absolute top-[27%] left-[7%] flex items-center gap-6">
                <Image
                  src="/assets/WhyMediusware/trophy.png"
                  width={120}
                  height={120}
                  alt="Trophy"
                />
                <div>
                  <h1 className="text-white text-8xl">700+</h1>
                  <p className="text-white mt-6">Project Complete</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div className="relative">
            <Image
              src="/assets/WhyMediusware/team2.png"
              width={212}
              height={380}
              quality={100}
              alt="Team 2"
            />
            <button className="w-14 h-14 flex items-center justify-center bg-primary-3 rounded-[50%] absolute top-[42%] left-[35%]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <SectionGap />
    </SectionWrapper>
  );
};

export default Strategy;
