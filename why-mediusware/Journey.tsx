import React from "react";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import ContentGap from "./ContentGap";

const Journey = () => {
  return (
    <SectionWrapper>
      <SectionTitle
        title1="Our"
        title2="Journey & Growth"
        center={true}
        description="We help world-renowned brands solve their product problems. We use our innovative power and combine it together. Which is for the success of your business."
      />
      <ContentGap />
      <div className="grid grid-cols-9 grid-rows-12">
        <div className="col-span-4 row-span-12 grid grid-rows-3 gap-y-14">
          <Image
            className="row-span-1 rounded-2xl"
            src="/assets/WhyMediusware/inception1.png"
            width={690}
            height={360}
            quality={100}
            alt="Inception"
          />
          <div className="row-span-1 relative">
            <span className="text-3xl font-semibold text-primary-1 bg-[#E6EFF7] rounded-[20px] px-6 py-3 absolute right-[106px] top-4">
              2019
            </span>
            <div className="mt-20">
              <SectionTitle
                title1="Company"
                title2="Inception"
                center={false}
                description=""
              />
            </div>
            <p className="mt-6 text-primary-1 text-lg w-[94%]">
              Incepted in 2015, Mediusware Ltd. has been serving as a leading IT
              Solution provider in Bangladesh. Our aim is to help businesses all
              around the world by providing the digital solutions according to
              their need. Serving a number of renowned companies from the USA,
              UK, and many other countries, we have already created a wide range
              of satisfied clients!
            </p>
          </div>
          <Image
            className="row-span-1 rounded-2xl"
            src="/assets/WhyMediusware/inception1.png"
            width={690}
            height={360}
            quality={100}
            alt="Inception"
          />
        </div>
        <div className="col-span-1 row-span-12 relative">
          <div className="flex items-center">
            <div className="bg-primary-2 w-20 h-20 flex items-center justify-center rounded-[50%]">
              <img src="/assets/WhyMediusware/logo.png" alt="" />
            </div>
            <img src="/assets/WhyMediusware/activeArrow.png" alt="" />
          </div>
          <div className="bg-[#5E9BCD] w-1 min-h-[250px] rounded-xl ml-10 mt-5"></div>
          <div className="flex items-center absolute -left-[82px] mt-14">
            <img className="rotate-180" src="/assets/WhyMediusware/activeArrow.png" alt="" />
            <div className="border-primary-2 bg-white border w-20 h-20 flex items-center justify-center rounded-[50%]">
              <img src="/assets/WhyMediusware/logoColor.png" alt="" />
            </div>
          </div>
          <div className="w-1 bg-[#5E9BCD] h-[250px] mt-40 ml-10 rounded-xl"></div>
          <div className="flex items-center mt-14">
            <div className="border-primary-2 border bg-white w-20 h-20 flex items-center justify-center rounded-[50%]">
              <img src="/assets/WhyMediusware/logoColor.png" alt="" />
            </div>
            <img src="/assets/WhyMediusware/activeArrow.png" alt="" />
          </div>
          <div className="bg-[#5E9BCD] w-1 min-h-[250px] rounded-xl ml-10 mt-5"></div>
        </div>
        <div className="col-span-4 row-span-12 grid grid-rows-3">
          <div className="row-span-1 mt-5">
            <span className="text-3xl px-6 py-3 text-primary-1 bg-[#E6EFF7] rounded-[20px] font-semibold">
              2015
            </span>
            <div className="mt-5">
              <SectionTitle
                title1="Company"
                title2="Inception"
                center={false}
                description=""
              />
              <p className="text-gray-600 text-lg mt-6 w-[94%]">
                Incepted in 2015, Mediusware Ltd. has been serving as a leading
                IT Solution provider in Bangladesh. Our aim is to help
                businesses all around the world by providing the digital
                solutions according to their need. Serving a number of renowned
                companies from the USA, UK, and many other countries, we have
                already created a wide range of satisfied clients!
              </p>
            </div>
          </div>
          <Image
            className="row-span-1 rounded-2xl"
            src="/assets/WhyMediusware/inception2.png"
            width={690}
            height={360}
            quality={100}
            alt="Inception"
          />
          <div className="row-span-1 mt-16">
            <span className="text-3xl px-6 py-3 text-primary-1 bg-[#E6EFF7] rounded-[20px] font-semibold">
              2024
            </span>
            <div className="mt-5">
              <SectionTitle
                title1="Company"
                title2="Inception"
                center={false}
                description=""
              />
              <p className="text-gray-600 text-lg mt-6 w-[94%]">
                Incepted in 2015, Mediusware Ltd. has been serving as a leading
                IT Solution provider in Bangladesh. Our aim is to help
                businesses all around the world by providing the digital
                solutions according to their need. Serving a number of renowned
                companies from the USA, UK, and many other countries, we have
                already created a wide range of satisfied clients!
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Journey;
