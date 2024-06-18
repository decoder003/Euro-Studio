import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const h1Variants = {
  hidden: {
    opacity: 0,
    y: -10,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};
export default function Home() {
  const heading = 'Interior Design';

  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="d-grid  justify-content-center align-content-center gap-3 mt-5">
              <div className="d-flex gap-1">
                {heading.split('').map((head, index) => (
                  <motion.h1
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
                ))}
              </div>
              <p>
                Step into a world where the art of Interior Design is meticulously crafted to bring together timeless
                elegance and cutting-edge modern Innovation, Allowing you to transform your living spaces into the
                epitome of luxury and sophistication
              </p>
              <div>
                <button className="btn home-col1-btn">Explore Now</button>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="card">
              <img src="" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
