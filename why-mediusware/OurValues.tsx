import React from "react";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import ContentGap from "./ContentGap";
import Image from "next/image";
import SectionGap from "./SectionGap";

const OurValues = () => {
  return (
    <div className="bg-white">
      <SectionGap />
      <SectionWrapper>
        <SectionTitle
          title1="Our Core"
          title2="Values"
          center={true}
          description="Dedicated Experts, Transforming Ideas into Reality."
        />
        <ContentGap />
        <div className="grid grid-cols-3 gap-x-8 gap-y-12">
          <div className="bg-primary-3 rounded-[16px] py-20 bg-[url('/assets/WhyMediusware/valuesBg.png')] bg-no-repeat bg-right">
            <Image
              className="mx-auto"
              src="/assets/WhyMediusware/value1.png"
              width={110}
              height={110}
              quality={100}
              alt="Value Photo"
            />
            <h6 className="text-white text-3xl text-center mt-11">
              Drive to Inspire
            </h6>
          </div>
          <div className="bg-primary-3 rounded-[16px] py-20 bg-[url('/assets/WhyMediusware/valuesBg.png')] bg-no-repeat bg-right">
            <Image
              className="mx-auto"
              src="/assets/WhyMediusware/value2.png"
              width={110}
              height={110}
              quality={100}
              alt="Value Photo"
            />
            <h6 className="text-white text-3xl text-center mt-11">
              Customer Focus
            </h6>
          </div>
          <div className="bg-primary-3 rounded-[16px] py-20 bg-[url('/assets/WhyMediusware/valuesBg.png')] bg-no-repeat bg-right">
            <Image
              className="mx-auto"
              src="/assets/WhyMediusware/value3.png"
              width={110}
              height={110}
              quality={100}
              alt="Value Photo"
            />
            <h6 className="text-white text-3xl text-center mt-11">Integrity</h6>
          </div>
          <div className="bg-primary-3 rounded-[16px] py-20 bg-[url('/assets/WhyMediusware/valuesBg.png')] bg-no-repeat bg-right">
            <Image
              className="mx-auto"
              src="/assets/WhyMediusware/value4.png"
              width={110}
              height={110}
              quality={100}
              alt="Value Photo"
            />
            <h6 className="text-white text-3xl text-center mt-11">Team Work</h6>
          </div>
          <div className="bg-primary-3 rounded-[16px] py-20 bg-[url('/assets/WhyMediusware/valuesBg.png')] bg-no-repeat bg-right">
            <Image
              className="mx-auto"
              src="/assets/WhyMediusware/value5.png"
              width={110}
              height={110}
              quality={100}
              alt="Value Photo"
            />
            <h6 className="text-white text-3xl text-center mt-11">Passion</h6>
          </div>
          <div className="bg-primary-3 rounded-[16px] py-20 bg-[url('/assets/WhyMediusware/valuesBg.png')] bg-no-repeat bg-right">
            <Image
              className="mx-auto"
              src="/assets/WhyMediusware/value6.png"
              width={110}
              height={110}
              quality={100}
              alt="Value Photo"
            />
            <h6 className="text-white text-3xl text-center mt-11">
              Transparency
            </h6>
          </div>
        </div>
      </SectionWrapper>
      <SectionGap />
    </div>
  );
};

export default OurValues;
