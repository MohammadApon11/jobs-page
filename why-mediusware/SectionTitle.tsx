import React from "react";

interface Props {
  title1: string;
  title2: string;
  description: string;
  center: boolean;
}

const SectionTitle: React.FC<Props> = ({
  title1,
  title2,
  description = "",
  center = false,
}) => {
  return (
    <>
      <h1 className={`text-5xl ${center && "text-center"}`}>
        {title1} <span className="text-primary-2">{title2}</span>
      </h1>
      {description && (
        <p className="text-gray-600 text-lg text-center mt-6 max-w-[800px] mx-auto">{description}</p>
      )}
    </>
  );
};

export default SectionTitle;
