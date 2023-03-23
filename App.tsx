import * as React from 'react';
import Carousel from './carousel';

export default function App() {
  return (
    <div>
      <h1>Basic React Carousel Component</h1>
      <Carousel
        cards={[
          {
            title: 'Rome',
            imageUrl:
              'https://followtheclarks.files.wordpress.com/2012/07/wpid-photo-jul-15-2012-843-pm.jpg',
          },
          {
            title: 'Florence',
            imageUrl:
              'https://www.romeanditaly.com/accessible/wp-content/uploads/sites/2/2019/12/WALKING-TOUR-FLORENCE-%E2%80%93-HIGHLIGHTS-OF-THE-CITY-04-min.jpg',
          },
          {
            title: 'Sardinia',
            imageUrl: 'https://wallpapercave.com/wp/wp6861478.jpg',
          },
        ]}
        initial={1}
      />
    </div>
  );
}
