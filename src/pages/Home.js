import React, { useRef } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const buttonVariants = {
  hidden: {
    y: 0,
  },
  hover: {
    y: -20,
    transition: {
      type: 'spring',
      stiffness: 120,
    },
  },
};

const h1Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function Home() {
  const heading = 'Make Your Interior More';
  const heading2 = 'Minimaistic & Modern';
  const btnRef = useRef();
  function buttonEnter() {
    btnRef.current.classList.remove('button-animation');
  }
  function buttonLeave() {
    btnRef.current.classList.add('button-animation');
  }
  return (
    <main className="home">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 home-col">
            <div className="d-flex flex-column justify-content-center align-items-center gap-4 mt-5 mt-sm-5 mt-md-0">
              <div className="d-flex gap-1">
                {heading.split('').map((head, index) => {
                  return head === ' ' ? (
                    <h1>&nbsp;</h1>
                  ) : (
                    <motion.h1
                      className="fw-bold home-col-h1"
                      key={index}
                      variants={h1Variants}
                      initial="hidden"
                      animate="visible"
                      transition={{
                        type: 'spring',
                        duration: 2,
                        delay: index * 0.1,
                        stiffness: 120,
                      }}>
                      {head}
                    </motion.h1>
                  );
                })}
              </div>
              <div className="d-flex gap-1">
                {heading2.split('').map((head, index) => {
                  return head === ' ' ? (
                    <h1>&nbsp;</h1>
                  ) : (
                    <motion.h1
                      className="fw-bold home-col-h1"
                      key={index}
                      variants={h1Variants}
                      initial="hidden"
                      animate="visible"
                      transition={{
                        type: 'spring',
                        duration: 2,
                        delay: index * 0.1,
                        stiffness: 120,
                      }}>
                      {head}
                    </motion.h1>
                  );
                })}
              </div>
              <div>
                <p className="text-center fw-bold home-col-p">
                  Bringing interiors to life, understanding the person or people
                </p>
                <p className="text-center fw-bold home-col-p">living in a home is far greater need in design</p>
              </div>

              <div>
                <motion.button
                  ref={btnRef}
                  className="btn home-col1-btn"
                  onMouseEnter={buttonEnter}
                  onMouseLeave={buttonLeave}
                  variants={buttonVariants}
                  initial="hidden"
                  whileTap="hover">
                  Explore Now
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
