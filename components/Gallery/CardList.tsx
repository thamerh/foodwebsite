import React from 'react';
import ImageItem from './ImageItem';

interface Image {
  src: string;
  title: string;
}

interface CardListProps {
  images: Image[];
}

const CardList: React.FC<CardListProps> = ({ images }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-[50px]">
      {images.map((image, index) => (
        <ImageItem key={index} src={image.src} title={image.title} />
      ))}
    </div>
  );
};

export default CardList;
