import React from 'react';
import TypeWriterEffect from 'react-typewriter-effect';
import { Carousel } from '../components/Carousel';
import { BlockDesc } from '../components/BlockDesc';
import icon1 from '../img/icon-1.svg';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

export const Main = () => {
  
  return (
    <Splide
      className=""
      options={{
        direction: 'ttb',
        wheel: true,
        releaseWheel: true,
        height: '100vh',
        width: '100vw',
        arrows: false,
      }}
    >
      <SplideSlide className="wrapper wrapper_centered justify-evenly">
        <div className="text-block full-page">
          {/* <h2 className="big-header">Hello</h2> */}
          <h2 className="big-header mt-10">
            <TypeWriterEffect text="Hello" typeSpeed={500} startDelay={100} />
          </h2>
          <h1 className="header">
            <span className="header header_span">I’m </span>Vasja Batryn
          </h1>
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            tincidunt nibh mollis, tempor dolor id, venenatis ex. Aenean
            convallis tellus id purus posuere aliquet. Fusce quis imperdiet
            libero. Nullam nec massa bibendum, laoreet est eu, aliquet elit.
            Pellentesque malesuada volutpat lacinia. Maecenas euismod lectus at
            mi dapibus, non egestas dui ullamcorper.
          </p>
        </div>
        <div className="photo-block mt-10">
          <div className="box-container">
            <div className="box"></div>
          </div>

          <div />
        </div>
      </SplideSlide>

      <SplideSlide className="wrapper wrapper_centered full-page h-screen ">
        <div className="max-w-lg">
          <h2 className="header header_second text-center pb-7">
            ABOUT <span className="header header_second header_span">ME</span>
          </h2>
          <p className="paragraph paragraph_second my-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            tincidunt nibh mollis, tempor dolor id, venenatis ex. Aenean
            convallis tellus id purus posuere aliquet. Fusce quis imperdiet
            libero. Nullam nec massa bibendum, laoreet est eu, aliquet elit.
            Pellentesque malesuada volutpat lacinia. Maecenas euismod lectus at
            mi dapibus, non egestas dui ullamcorper.
          </p>
        </div>
      </SplideSlide>

      <SplideSlide className="wrapper wrapper_centered  h-screen">
        <Carousel />
      </SplideSlide>

      <SplideSlide className="wrapper justify-around">
        {/* maping here  */}
        <BlockDesc image={icon1} title="Creative Design" />
        <BlockDesc image={icon1} title="Creative Design" />
        <BlockDesc image={icon1} title="Creative Design" />

        <BlockDesc image={icon1} title="Creative Design" />
        <BlockDesc image={icon1} title="Creative Design" />
        <BlockDesc image={icon1} title="Creative Design" />
      </SplideSlide>
    </Splide>
  );
};
