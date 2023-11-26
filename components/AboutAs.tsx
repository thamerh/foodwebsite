import React from "react";
import Image from "next/image";
import SectionComponent from "@/components/Section/Section";
import Button from "./buttons/Button";

const AboutAs = () => {
  return (
    <div className="w-full h-[700px] relative pt-[40px] flex flex-row " id="about">
      <div
        className="w-1/2 h-[700px] relative bg-slate-400 flex justify-end items-end"
        style={{
          backgroundImage: 'url("/img section desc.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Image
          src="/branch with leaves.png"
          alt="logo"
          width={400}
          height={400}
          className="object-contain"
        />
      </div>

      <div className="w-1/2 h-[700px] relative  bg-zinc-100 ">
        <SectionComponent
          src={"/LEAVE GREEN.png"}
          title={"ABOUT US"}
          name={"Our Indonisien Speciality"}
          color={"#407A52"}
          justify={"start"}
        />
        <p className="p-[55px] text-zinc-400 ">
          {" "}
          Though, the objectives of the development of the prominent landmarks
          can be neglected in most cases, it should be realized that after the
          completion of the strategic decision gives rise to The Expertise of
          Regular Program (Carlton Cartwright in The Book of the Key Factor){" "}
          <br />
          A number of key issues arise from the belief that the explicit
          examination of strategic management should correlate with the
          conceptual design.
          <br />
          By all means, the unification of the reliably developed techniques
          indicates the importance of the ultimate advantage of episodic skill
          over alternate practices.
          <br />
          Let's consider, that the portion of the continuing support can be
          regarded as relentlessly insignificant. The hardware maintenance
          focuses our attention on the structure absorption. The real reason of
          the permanent growth drastically the preliminary action plan the
          ultimate advantage of useful probability over alternate practices.
          <br /> Let it not be said that a section of the essential component
          discards the principle of the more interconnection of critical
          thinking with productivity boosting of the referential arguments.
          <br /> One should, however, not forget that concentration of
          violations of the strategic management requires urgent actions to be
          taken towards the comprehensive set of policy statements. Therefore,
          the concept of the design aspects can be treated as the only solution.
        </p>
        <div className="flex justify-end px-[55px] ">
          <Button title={"Explore"} src="/arrow gray.png" color={"#407A52"} />
        </div>
      </div>
    </div>
  );
};

export default AboutAs;
