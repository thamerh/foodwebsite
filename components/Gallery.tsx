import React from 'react';
import CardList from './Gallery/CardList';
import SectionComponent  from '@/components/Section/Section' 
import { images } from '@/constants';
const Gallery: React.FC = () => {
  return (
    <div className="w-full mx-0 mt-8">
      <SectionComponent src={'/LEAVE GREEN.png'} title={'EXPLORE'} name={'Our Gallery'} color={'#407A52'} justify={'center'} />
      <CardList images={images} />
    </div>
  );
};

export default Gallery;
