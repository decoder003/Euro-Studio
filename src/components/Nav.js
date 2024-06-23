import React, { useRef } from 'react';
import './Nav.css';
import { motion, spring } from 'framer-motion';
import { Link } from 'react-router-dom';

const ulVariants = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const liVariants = {
  hidden: {
    y: -100,
  },
  visible: {
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 120,
      duration: 5,
    },
  },
};

export default function Nav({ navRef }) {
  const liRef1 = useRef();
  const liRef2 = useRef();
  const liRef3 = useRef();
  const liRef4 = useRef();
  function liEnter1() {
    liRef1.current.classList.remove('li-animation');
  }
  function liLeave1() {
    liRef1.current.classList.add('li-animation');
  }
  function liEnter2() {
    liRef2.current.classList.remove('li-animation');
  }
  function liLeave2() {
    liRef2.current.classList.add('li-animation');
  }
  function liEnter3() {
    liRef3.current.classList.remove('li-animation');
  }
  function liLeave3() {
    liRef3.current.classList.add('li-animation');
  }
  function liEnter4() {
    liRef4.current.classList.remove('li-animation');
  }
  function liLeave4() {
    liRef4.current.classList.add('li-animation');
  }
  return (
    <nav ref={navRef} className="nav">
      <motion.ul className="list-inline nav-ul" variants={ulVariants} initial="hidden" animate="visible">
        <motion.li
          ref={liRef1}
          className="list-inline-item nav-ul-li"
          onMouseEnter={liEnter1}
          onMouseLeave={liLeave1}
          variants={liVariants}>
          <Link to="/" className="nav-ul-li-Link">
            Home
          </Link>
        </motion.li>
        <motion.li
          ref={liRef2}
          className="list-inline-item nav-ul-li"
          variants={liVariants}
          onMouseEnter={liEnter2}
          onMouseLeave={liLeave2}>
          <Link to="" className="nav-ul-li-Link">
            Services
          </Link>
        </motion.li>
        <motion.li
          ref={liRef3}
          className="list-inline-item nav-ul-li"
          onMouseEnter={liEnter3}
          onMouseLeave={liLeave3}
          variants={liVariants}>
          <Link to="" className="nav-ul-li-Link">
            Gallery
          </Link>
        </motion.li>
        <motion.li
          ref={liRef4}
          className="list-inline-item nav-ul-li"
          onMouseEnter={liEnter4}
          onMouseLeave={liLeave4}
          variants={liVariants}>
          <Link to="" className="nav-ul-li-Link">
            Contact us
          </Link>
        </motion.li>
      </motion.ul>
    </nav>
  );
}
