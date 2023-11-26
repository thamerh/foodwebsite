"use client"
import React, { useState } from "react";
import { CiCircleChevRight, CiCircleChevLeft } from "react-icons/ci";
import "./Carousel.css";

interface CarouselProps {
 
  data: { src: string; alt: string;  years : string ; title: string ; desc: string }[];
}

export const Carousel: React.FC<CarouselProps> = ({ data }) => {
  const [slide, setSlide] = useState<number>(0);

  const nextSlide = () => {
    setSlide((slide) => (slide === data.length - 1 ? 0 : slide + 1));
  };

  const prevSlide = () => {
    setSlide((slide) => (slide === 0 ? data.length - 1 : slide - 1));
  };

  return (
    <div className="flex  h-[500px] relative bottom-0 justify-center left-[10px] p-5 items-center  " >
      <CiCircleChevLeft
        onClick={prevSlide}
        className="mr-[80px]"
        style={{ fontSize: "100px", color: "#91938D" }}
      />
      {data.map((item, idx) => (
        <div
          key={idx}
          className={`slide-container ${slide === idx ? "" : "slide-hidden"} flex items-end  `}
        >
          <img src={item.src} alt={item.alt} className="w-[650px]" />
          <div className="w-[650px] h-[320px] bg-[#91938D] relative left-[-100px] p-[40px]">
            {/* {item.src} */}
            <p className='text-4xl font-bold text-white mb-5 '> {item.years}</p>
            <p className='text-4xl font-bold text-white mb-5'> {item.title} </p>
            <p className='text-xm  text-white' >  {item.desc} </p>
          </div>
        </div>
      ))}
      <CiCircleChevRight
        onClick={nextSlide}
        className=""
        style={{ fontSize: "100px", color: "#91938D" }}
      />

      <span className="indicators">
        {data.map((_, idx) => (
          <button
            key={idx}
            className={slide === idx ? "indicator" : "indicator indicator-inactive"}
            onClick={() => setSlide(idx)}
          ></button>
        ))}
      </span>
    </div>
  );
};
