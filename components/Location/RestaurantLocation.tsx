import React, { FC } from 'react';
import Image from 'next/image';

interface RestaurantLocationProps {
  city: string;
  imagePath: string;
  address: string;
  hasBorder: boolean;
}

const RestaurantLocation: FC<RestaurantLocationProps> = ({ city, imagePath, address, hasBorder }) => (
  <div className={`flex items-center justify-start space-x-2 px-7 ${hasBorder ? 'border-l-2 border-r-2 border-[#407A52]' : ''}`}>
    <Image
      src={imagePath}
      alt="logo"
      width={50}
      height={50}
      className="object-contain"
    />
    <p className="font-bold text-[#407A52]">
      {address} <br />
      {city}
    </p>
  </div>
);

const Restaurant: FC = () => {
  return (
    <div className="w-full h-[100px] bg-transparent flex justify-center items-center">
      {/* Main container */}
      <div className="w-3/5 h-[150px] bg-white justify-center items-center shadow-md">

        {/* Header */}
        <div className="flex items-center justify-center space-x-2 py-5">
          <Image
            src="/icons/Restaurant.png"
            alt="logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <p className="text-2xl font-bold text-[#407A52]">OUR RESTAURANTS</p>
        </div>

        {/* Content */}
        <div className="flex flex-row items-center justify-center">

          {/* Restaurant Locations */}
          <RestaurantLocation city="Toulouse" imagePath="/icons/Region.png" address="25 Place du Salin 31 000" hasBorder={false} />
          <RestaurantLocation city="Paris" imagePath="/icons/Region.png" address="73 Champs-Élysées 30 000" hasBorder={true} />
          <RestaurantLocation city="Paris" imagePath="/icons/Region.png" address="101 Champs-Élysées 30 000" hasBorder={false} />

        </div>

      </div>
    </div>
  );
};

export default Restaurant;
