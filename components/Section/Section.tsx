import React from 'react';
import Image from 'next/image';

interface SectionComponentProps {
  src: string;
  title: string;
  name: string;
  color: string;
  justify: string;
}

function SectionComponent({ src, title, name, color  , justify}: SectionComponentProps) {
  return (
    <div className="flex flex-col">
      <div className={`flex items-center space-x-2 px-10 mt-10 justify-${justify}`}>
        <Image src={src} width={50} height={50} className="object-contain" alt={''} />
        <p className={`text-2xl text-[${color}]`}>{title}</p>
      </div>
      <div>
      <p className={`text-4xl font-bold text-[${name=="Our Indonisien Speciality"? "#407A52": color}] ${justify === "center" ? "text-center"  : "text-left ml-10"}`}>{name}</p>

      </div>
    </div>
  );
}

export default SectionComponent;
