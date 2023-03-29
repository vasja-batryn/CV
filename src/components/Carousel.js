import React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// import { wrap } from 'popmotion';
import projectPic from '../img/center-project.png';
import arrow from '../img/arrow.svg';

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

export default function Carousel() {
  const [[page, direction], setPage] = useState([0, 0]);
  //   const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          //   src={images[imageIndex]}
          //   src={projectPic}
          className="motion-img"
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        >
          <motion.img src={projectPic} alt="picture" />
          <h3 className="carousel_title">Український центр психоаналізу</h3>
        </motion.div>
      </AnimatePresence>
      <div className="next" onClick={() => paginate(1)}>
        <img src={arrow} alt="arrow" />
      </div>
      <div className="prev" onClick={() => paginate(-1)}>
        <img src={arrow} alt="arrow" />
      </div>
    </>
  );
}
