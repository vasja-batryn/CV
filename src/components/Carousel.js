import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';

export const Carousel = (props) => {
  const mainProjects = [
    {
      id: 1,
      title: 'Український центр психоаналізу',
      img: 'center-project.png',
    },
    {
      id: 2,
      title: 'Test 1',
      img: 'test1.webp',
    },
    {
      id: 3,
      title: 'Test 2',
      img: 'test2.webp',
    },
    {
      id: 4,
      title: 'Test 3',
      img: 'test3.webp',
    },
  ];

  return (
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
      {mainProjects.map((project) => (
        <SplideSlide key={project.id} className="mt-10">
          <img
            src={require(`../img/${project.img}`)}
            className="mx-auto mt-10 carousel-img"
            alt="projectPic"
          />
          <h3 className="carousel_title mt-10">{project.title}</h3>
        </SplideSlide>
      ))}
    </Splide>
  );
};
