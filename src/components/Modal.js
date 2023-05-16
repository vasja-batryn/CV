import React from 'react';
import closeIcon from '../img/close_ring_light.svg';

export const Modal = (props) => {
  return (
    <div className="modal_bg">
      <div className="modal_container">
        <button
          onClick={() => props.closeModal(false)}
          className="header_alt_white ml-auto"
        >
          <img src={closeIcon} alt="close" />
        </button>
        <div className="wrapper wrapper_centered">
          <img src={props.img} alt="icon" className="modal_img ml-10" />
          <div className="modal_text wrapper wrapper_centered p-10">
            <h4 className="block-desc_project__text header_alt_white">
              {props.title}
            </h4>
            <p className="header_alt_white text-2xl mt-5">{props.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
