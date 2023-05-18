import React from 'react';
import githubIcon from '../img/github.svg';
import telegramIcon from '../img/telegram.svg';

export const About = () => {
  return (
    <div className="container mx-auto my-10">
      <header className="wrapper justify-evenly margin">
        <div className="my_photo"></div>
        <div className="text-block">
          <h1 className="header">
            <span className="header header_span">I’m </span>Vasja Batryn
          </h1>
          <p className="paragraph my-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            tincidunt nibh mollis, tempor dolor id, venenatis ex. Aenean
            convallis tellus id purus posuere aliquet. Fusce quis imperdiet
            libero. Nullam nec massa bibendum, laoreet est eu, aliquet elit.
            Pellentesque malesuada volutpat lacinia. Maecenas euismod lectus at
            mi dapibus, non egestas dui ullamcorper.
          </p>
          <div className="wrapper">
            <a
              href="https://github.com/vasja-batryn"
              target="_blank"
              rel="noreferrer"
            >
              <img src={githubIcon} alt="icon" width="30" />
            </a>
            <a
              href="https://t.me/vasja_batryn"
              target="_blank"
              rel="noreferrer"
            >
              <img src={telegramIcon} alt="icon" width="30" className="ml-5" />
            </a>
          </div>
        </div>
      </header>
      <main className="wrapper justify-evenly margin">
        <div className="card my-10">
          <div className="card_content">
            <h4 className="header text-center mb-5">Education&Courses</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              tincidunt nibh mollis, tempor dolor id, venenatis ex. Aenean
              convallis tellus id purus posuere aliquet. 
            </p>
          </div>
        </div>

        <div className="card my-10">
          <div className="card_content">
            <h4 className="header text-center mb-5">Skills</h4>
            <ul className='list'>
              <li>First skill here</li>
              <li>Second skill here</li>
              <li>Third skill here</li>
              <li>Fourth skill here</li>
              <li>Fifth skill here</li>
            </ul>
          </div>
        </div>

        <div className="card my-10">
          <div className="card_content">
            <h4 className="header text-center mb-5">Languages</h4>
            <ul className='list'>
              <li>English - B1</li>
              <li>Ukrainian - native</li>
              <li>Third skill here</li>
              <li>Fourth skill here</li>
              <li>Fifth skill here</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};
