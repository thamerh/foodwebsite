import React from 'react';
import Card from './Card'; // Replace with the correct path to your Card component
import Button from '../buttons/Button'; // Replace with the correct path to your Button component

const CardList = () => {
  // Assuming you have an array of data for each card
  const cardData = [
    {
      imageUrl: '/blog/BLOG 1.jpg',
      title: 'Actuality 1',
      content:
        'To put it mildly, a surprising flexibility in a description of the bilateral act the independent knowledge...',
    },
    {
        imageUrl: '/blog/BLOG 1.jpg',
        title: 'Actuality 1',
        content:
          'To put it mildly, a surprising flexibility in a description of the bilateral act the independent knowledge...',
      },
      {
        imageUrl: '/blog/BLOG 1.jpg',
        title: 'Actuality 1',
        content:
          'To put it mildly, a surprising flexibility in a description of the bilateral act the independent knowledge...',
      },
    // Add more card data as needed
  ];

  return (
    <div className="flex">
      {cardData.map((data, index) => (
        <Card key={index} data={data} />
      ))}
    </div>
  );
};

export default CardList;
