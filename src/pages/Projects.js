import React, { useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import '@splidejs/react-splide/css';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100vw',
  bgcolor: 'transparent',
  outline: 'none',
  display: 'flex',
  justifyContent: 'space-evenly',
  p: 4,
};

export const Projects = () => {
  const [open, setOpen] = useState(false);

  return (
    <Splide
      options={{
        direction: 'ttb',
        wheel: true,
        releaseWheel: true,
        height: '100vh',
        width: '100vw',
        arrows: false,
      }}
    >
      <SplideSlide className="wrapper wrapper_centered">
        <h2 className="header header_alt">PROJECTS</h2>
      </SplideSlide>
      <SplideSlide className="wrapper justify-around mt-10">
        {/* here we`ll be maping */}
        <div
          onClick={() => setOpen(true)}
          className="block-desc block-desc_project flex justify-center content-center text-center flex-col relative"
        >
          <img
            src="https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="icon"
            className="block-desc_project__img"
          />
          <h3 className="block-desc_project__text absolute left-0 right-0">
            NIXON
          </h3>
        </div>

        {/* modal */}
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="modal-modal-image"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <img
              src="https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="icon"
              className="modal_img ml-10"
              id="modal-modal-image"
            />
            <div
              className="modal_text wrapper wrapper_centered p-10"
              id="modal-modal-description"
            >
              <h4 className="block-desc_project__text header_alt_white">
                NIXON
              </h4>
              <p className="header_alt_white text-2xl mt-5">
                The customers of this object disagreed on the color of the
                future site. It was decided to turn to non-standard
                combinations, and after repeated approvals, an option was
                developed with a deep sea, moving from saffron to white.
                Applying this palette to a modern design was an interesting
                challenge. One of the company's favorite projects.
              </p>
            </div>
          </Box>
        </Modal>
      </SplideSlide>
    </Splide>
  );
};
