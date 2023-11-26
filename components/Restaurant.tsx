import React from 'react';
import SectionComponent from "@/components/Section/Section";
import Image from "next/image";
import { Carousel } from "./Carrousel/Carousel";
import Button from "./buttons/Button";
import { slides } from '@/constants';


const Restaurant = () => {
  return (
    <div className=" h-[1000px] pt-10 pl-5 relative">
      <div className="  pt-10 pl-5 "
        style={{
          backgroundImage: 'url(\'bg.png\')',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          overflowX: 'hidden',
        }}
      >
        <div className='flex'> 
        <div style={{
          backgroundImage: 'url("/img 1 speciality.jpg")',
          backgroundSize: 'cantaint',
          width: '800px',
          height: '550px',
          zIndex: 9999,
        }} className="flex  items-end p-[50px] absolute top-[-180px] left-[300px]">
          <div className=" flex flex-col">
          <p className="text-7xl mb-[10px] font-bold text-[#6b7280]"> Rata </p> 

          <Button title={"Explore"} src="/arrow gray.png" color={"#407A52"} />
        </div>
        </div>
        <div style={{
          backgroundImage: 'url("/img 2 speciality.jpg")',
          backgroundSize: 'cantaint',
          width: '800px',
          height: '550px',
          zIndex: 9999,
        }} className="flex items-center justify-end p-[50px] absolute top-[-400px] right-[120px]">
            <div className=" flex flex-col">
          <p className="text-7xl mt-[-50px] mr-[50px] font-bold text-[#ffff]"> Pasta </p> 

          <Button title={"Explore"} src="/arrow gray2.png" color={"#ffff"} />
        </div>
        </div>
        </div>
       

        <div className="pt-10 pl-5 mt-[250px]">
          <SectionComponent
            src={"/LEAVE GREEN.png"}
            title={"GREENRATA"}
            name={"Our Restaurant Story"}
            color={"#407A52"}
            justify={"start"}
          />
        </div>

        <Carousel data={slides} />
      </div>
    </div>
  );
};

export default Restaurant;
