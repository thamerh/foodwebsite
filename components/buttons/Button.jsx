import React from 'react';
import Image from 'next/image'; // Add this import statement


const Button = ({ title , src , color}) => {
  return (
    <div className="flex items-center justify-start space-x-2">
     
      <button className={`border border-transparent p-2 text-[${color}]`} >
        <p className="text-2xl font-bold"> {title} </p>
      </button>
      <Image
        src={src}
        alt="logo"
        width={50}
        height={50}
        className=" object-contain"
      />
    </div>
  );
};

export default Button;
