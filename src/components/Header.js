import './Header.css';
import React, { useRef, useState } from 'react';
import Nav from './Nav';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Spiral as Hamburger } from 'hamburger-react';

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
export default function Header() {
  const [isOpen, setOpen] = useState(false);
  const [mode, setMode] = useState(false);
  const navRef = useRef();
  const btnRef = useRef();
  function buttonEnter() {
    btnRef.current.classList.remove('button-animation');
  }
  function buttonLeave() {
    btnRef.current.classList.add('button-animation');
  }
  function navHandler() {
    navRef.current.classList.toggle('nav-hamburger');
  }
  function modeHandler() {
    setMode(!mode);
    document.body.classList.toggle('dark-mode');
  }
  return (
    <header className="header sticky-top">
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <img src="Assets/logo.png" className="logo" />
          </div>
          <div className="col-3 col-sm-6 col-md-6 d-flex justify-content-center align-items-center pt-2">
            <Nav navRef={navRef} />
          </div>
          <div className="col-sm-3 col-md-3 col-6 d-flex justify-content-evenly justify-content-sm-around justify-content-md-around align-items-center">
            <div onClick={modeHandler}>
              <img src={!mode ? 'Assets/sun.png' : 'Assets/moon.png'} className="mode" />
            </div>
            <motion.button
              ref={btnRef}
              className="btn fw-bold border Header-col3-button"
              onMouseEnter={buttonEnter}
              onMouseLeave={buttonLeave}
              variants={buttonVariants}
              initial="hidden"
              whileTap="hover">
              Sign In
            </motion.button>
            <div className="hamburger" onClick={navHandler}>
              <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
