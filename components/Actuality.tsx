import React from 'react';
import SectionComponent from '@/components/Section/Section';
import Card from './Card/Card';
import { cardsData } from '@/constants';

const Actuality = () => {
  return (
    <div className="w-full mx-0 mt-8" id="actuality">
      <SectionComponent src={'/LEAVE GREEN.png'} title={'EXPLORE'} name={'Actuality'} color={'#407A52'} justify={'center'} />
      <div className="w-full h-[800px] mt-[30px] object-cover" style={{ backgroundImage: 'url("/bgbw.png")', backgroundSize: "cover" }}>
        <div className="flex">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              imageSrc={card.imageSrc}
              title={card.title}
              content1={card.content1}
              content2={card.content2}
              bgColor={card.bgColor}
              textColor={card.textColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Actuality;
