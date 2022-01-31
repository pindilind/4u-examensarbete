import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

import CaruselleMorgan from '../assets/CarusellMorgan.png';
import CaruselleTina from '../assets/CaruselleTina.png';

export default function App() {
  return (
    <div style={{ display: 'flex', width: '100%', padding: 10, objectFit: 'cover' }}>
      <Carousel>
        <Carousel.Item interval={2500}>
          <img
            src={CaruselleMorgan}
            alt="logo"
          />
        </Carousel.Item>

        <Carousel.Item interval={2500}>
          <img
            src={CaruselleTina}
            alt="logo"
          />
        </Carousel.Item>

        <Carousel.Item interval={2500}>
          <img
            /* className={'logo'}
            src={LogoSmall} */
            alt="logo"
          />
          <Carousel.Caption>
            <h3>Label for second slide</h3>
            <p>Sample Text for Image Two</p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    </div>
  );
}

