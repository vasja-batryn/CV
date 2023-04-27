import React, { useState } from 'react';
import projectPic from '../img/center-project.png';
import arrow from '../img/arrow.svg';
import { Splide, SplideSlide } from '@splidejs/react-splide';

export const Carousel = (props) => {
  return (
    <div >
      <Splide
        options={{
          width: '100vw',
          arrows: false,
          pagination: false,
          height: '100vh',
          loop: true,
          type: 'loop',
          autoplay: true,
          pauseOnHover: false,
        }}
      >
        <SplideSlide>
          <img src={projectPic} className="mx-auto mt-10" alt="projectPic" />
          <h3 className="carousel_title mt-10">Український центр психоаналізу</h3>
        </SplideSlide>
      </Splide>
     
    </div>
  );
};
