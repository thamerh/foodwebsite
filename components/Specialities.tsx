import React from "react";
import SectionComponent from "@/components/Section/Section";
import Image from "next/image";

const Specialities = () => {
  return (
    <div className="bg-[#91938D] w-full h-[600px] pt-10 pl-5  " id="specialities">
      <div className="pt-10 pl-5  ">
        <SectionComponent
          src={"/branch with leaves WHITE.png"}
          title={"EXPLORE"}
          name={"Our Indonisien Speciality"}
          color={"#ffff"}
          justify={"start"}
        />
      </div>
      <p className="pt-10 pl-16 w-1/3  text-white">
        To sort everything out, it is worth mentioning that a significant
        portion of the
        internal policy contributes to the capabilities of The Survey of
        Accessible
        Enhancement (Gilberto Montague in The Book of the Structured Technology)
      </p>
    </div>
  );
};

export default Specialities;
