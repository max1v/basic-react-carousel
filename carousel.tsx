import { useState } from 'react';
import React from 'react';

export default function Carousel({ cards, initial }) {
  const [activeIndex, setActiveIndex] = useState(initial);

  const activeCard = cards[activeIndex];

  function changeActive(e) {
    if (e.target.name === 'left') {
      if (activeIndex !== 0) {
        setActiveIndex(activeIndex - 1);
      }
    } else {
      if (activeIndex !== cards.length - 1) {
        setActiveIndex(activeIndex + 1);
      }
    }
  }

  return (
    <div
      style={{
        height: '50vh',
        width: '50vh',
        backgroundColor: 'gray',
        backgroundImage: `url("${activeCard.imageUrl}")`,
        backgroundSize: 'cover',
        position: 'relative',
      }}
    >
      <button
        style={{
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          left: '20px',
        }}
        name="left"
        onClick={changeActive}
      >
        {'<'}
      </button>
      <button
        style={{
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          right: '20px',
        }}
        onClick={changeActive}
      >
        {'>'}
      </button>
      <div
        style={{
          position: 'absolute',
          bottom: '0px',
          color: 'white',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          textAlign: 'center',
          width: '100%',
        }}
      >
        <p>
          {activeIndex + 1} of {cards.length}
        </p>
        <p
          style={{
            fontWeight: 'bold',
          }}
        >
          {activeCard.title}
        </p>
      </div>
    </div>
  );
}
