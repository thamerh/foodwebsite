import React from 'react';
import Button from "../buttons/Button";


const Card = ({title , imageSrc ,content1,content2, bgColor ,textColor }) => {
  return (
    <div className="w-full h-[750px] mx-auto mr-5 mt-[60px] overflow-hidden relative">
      {/* Image Container */}
      <div className="relative  h-[400px]  z-10">
        <img
          className="w-full h-full object-containt"
          src={imageSrc}  // Replace with your actual image URL
          alt="Card Image"
        />
      </div>
      {/* Details Container */}
      <div className={`absolute top-[300px] left-[70px] p-[50px]   z-20 `  }  style={{ backgroundColor: bgColor }}>
        {/* Your Details Content */}
        <h2 className={`text-2xl font-bold text-[${textColor}] mb-10`}>{title}</h2>
        <p className={`text-[${textColor}] m-5`}>{content1}</p>
<p className={`text-[${textColor}] m-5`}>{content2}</p>
<div>
<div className="flex justify-end px-[55px] ">
          <Button title={"Explore"} src= {textColor =="#ffff"? "/arrow gray2.png" : "/arrow gray.png"} color={textColor} />
        </div>
</div>
      </div>
    </div>
  );
};

export default Card ;
