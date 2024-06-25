import React from 'react';
import './Loader.css';
import { motion } from 'framer-motion';
import Image1 from '../images/loader/loader-pic1.jpg';
import Image2 from '../images/loader/loader-pic2.jpg';
import Image3 from '../images/loader/loader-pic3.jpg';
import Image4 from '../images/loader/loader-pic4.jpg';
import background from '../images/loader/loader-main.jpg';

const mainVariants = {
  visible: {
    transition: {
      staggerChildren: 0.5,
      when: 'afterChildren',
    },
  },
};
const subMainVariants = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duaration: 1.5,
      type: 'spring',
      stiffness: 120,
    },
  },
};
export default function Loader() {
  return (
    <main className="loader">
      <div className="container ">
        <div className="row">
          <div className="col-12 d-flex justify-content-center align-items-center">
            <motion.div className="main-img" variants={mainVariants} initial="hidden" animate="visible">
              <img src={background} className="main-img-pic" />
              <motion.div className="sub-img1" variants={subMainVariants}>
                <img src={Image1} />
              </motion.div>
              <motion.div className="sub-img2" variants={subMainVariants}>
                <img src={Image2} />
              </motion.div>
              <motion.div className="sub-img3" variants={subMainVariants}>
                <img src={Image3} />
              </motion.div>
              <motion.div className="sub-img4" variants={subMainVariants}>
                <img src={Image4} />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
