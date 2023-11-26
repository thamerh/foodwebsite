import React from 'react';

interface ImageItemProps {
  src: string;
  title: string;
}

const ImageItem: React.FC<ImageItemProps> = ({ src, title }) => {
  return (
    <div className="relative group">
      <img className="w-full h-100 object-cover" src={src} alt={title} />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="absolute inset-0 bg-black opacity-25"></div>
        <h2 className="text-2xl  text-white font-bold">{title}</h2>
      </div>
    </div>
  );
};

export default ImageItem;
