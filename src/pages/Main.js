import React from 'react';
import TypeWriterEffect from 'react-typewriter-effect';
import Carousel from '../components/Carousel';

export const Main = () => {
  return (
    <main>
      <div className="container mx-auto wrapper wrapper_centered full-page">
        <div className="wrapper justify-evenly ">
          <div className="text-block w-2/5">
            {/* <h2 className="big-header">Hello</h2> */}
            <h2 className="big-header">
              <TypeWriterEffect text="Hello" typeSpeed={500} startDelay={100} />
            </h2>
            <h1 className="header">
              <span className="header header_span">I’m </span>Vasja Batryn
            </h1>
            <p className="paragraph my-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              tincidunt nibh mollis, tempor dolor id, venenatis ex. Aenean
              convallis tellus id purus posuere aliquet. Fusce quis imperdiet
              libero. Nullam nec massa bibendum, laoreet est eu, aliquet elit.
              Pellentesque malesuada volutpat lacinia. Maecenas euismod lectus
              at mi dapibus, non egestas dui ullamcorper.
            </p>
          </div>
          <div className="photo-block ">
            <div class="box-container">
              <div class="box"></div>
            </div>

            <div />
          </div>
        </div>

        <div className="wrapper wrapper_centered full-page h-screen">
          <div className="text-block max-w-lg">
            <h2 className="header header_second text-center pb-7">
              ABOUT <span className="header header_second header_span">ME</span>
            </h2>
            <p className="paragraph paragraph_second my-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              tincidunt nibh mollis, tempor dolor id, venenatis ex. Aenean
              convallis tellus id purus posuere aliquet. Fusce quis imperdiet
              libero. Nullam nec massa bibendum, laoreet est eu, aliquet elit.
              Pellentesque malesuada volutpat lacinia. Maecenas euismod lectus
              at mi dapibus, non egestas dui ullamcorper.
            </p>
          </div>
        </div>
        <div className="carousel-container">
          <Carousel />
        </div>
      </div>
    </main>
  );
};
