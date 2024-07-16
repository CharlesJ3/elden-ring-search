import React from 'react';
import Card from './Cardholder';

const Cards = (searchBarProps: any) => {

  return (
    <div className='z-10 flex flex-wrap'>
      { searchBarProps.term.data &&
      searchBarProps.term.data.map((card: any, index: any) => (
        <Card key={index} {...card} />
      ))
      }
    </div>
  );
}

export default Cards;
