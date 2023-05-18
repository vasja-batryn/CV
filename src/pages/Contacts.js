import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase-config';
import { addDoc, collection } from 'firebase/firestore';
import githubIcon from '../img/github.svg';
import telegramIcon from '../img/telegram.svg';
import linkedin from '../img/linkedIN.svg';

export const Contacts = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [err, setErr] = useState('');

  const clientCollectionRef = collection(db, 'clients');

  const navigate = useNavigate();

  const handleClick = async (e) => {
    if (name === null || name.trim() === '') {
      setErr('Please enter your name');
    } else if (email === null || email.trim() === '') {
      setErr('Please enter your email');
    } else {
      setErr('');
      try {
        await addDoc(clientCollectionRef, {
          name: name,
          email: email,
          message: message,
        });
        navigate('/');
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="wrapper wrapper_centered">
      <div className="wrapper wrapper_centered flex-col mt-10">
        <h3 className="header header_second text-center pb-7 my-10">
          LET’S GET{' '}
          <span className="header header_second header_span">IN TOUCH</span>
        </h3>
        <div className="flex flex-col justify-center items-start my-5 mx-auto">
          <label className="label">Your name</label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="user_name"
            className="input"
            required
          />
        </div>
        <div className="flex flex-col justify-center items-start my-5 mx-auto">
          <label className="label">Your email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            name="user_email"
            className="input"
            required
          />
        </div>
        <div className="flex flex-col justify-center items-start my-5 mx-auto">
          <label className="label">Tell about your project</label>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            type="text"
            name="message"
            className="input input_area"
            required
            rows="4"
          />
        </div>
        {err && <span className="text-red-500 mb-5">{err}</span>}
        <button className="btn" onClick={handleClick}>
          SEND
        </button>
        <div className="wrapper justify-evenly w-full my-10">
          <a
            href="https://github.com/vasja-batryn"
            target="_blank"
            rel="noreferrer"
          >
            <img src={githubIcon} alt="icon" />
          </a>
          <a href="https://t.me/vasja_batryn" target="_blank" rel="noreferrer">
            <img src={telegramIcon} alt="icon" />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <img src={linkedin} alt="icon" />
          </a>
        </div>
      </div>
    </div>
  );
};
