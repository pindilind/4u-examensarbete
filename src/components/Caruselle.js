import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

export default function App() {
  return (
    <div style={{ display: 'block', width: '100%', padding: 10, background: 'red' }}>
      <Carousel>
        <Carousel.Item interval={2500}>
          <img
            /* className={'logo'}
            src={LogoSmall} */
            alt="logo"
          />
          <Carousel.Caption>
            <h3>Label for first slide</h3>
            <p>Sample Text for Image One</p>
          </Carousel.Caption>
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

