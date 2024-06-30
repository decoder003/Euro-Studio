import React, { Fragment, useState, useEffect } from 'react';
import './Gallery.css';
import { motion } from 'framer-motion';
import Loader from './Loader';

const columnVariants = {
  visible: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};
const subColVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 2,
    },
  },
};

export default function Gallery() {
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoad(!load);
    }, 3000);
  }, []);
  return (
    <Fragment>
      {!load ? (
        <Loader />
      ) : (
        <main className="gallery">
          <div className="container">
            <h2 className="text-center mb-5 kitchen-heading">MODULAR KITCHEN</h2>
            <div className="row kitchen-row">
              <motion.div
                className="col-12 col-md-6 d-flex flex-column gap-3  interior-col-1"
                variants={columnVariants}
                initial="hidden"
                whileInView="visible">
                <motion.div className="sub-col-1 d-flex justify-content-center" variants={subColVariants}>
                  <div className="sub-col-1-img"></div>
                </motion.div>
                <motion.div className="sub-col-2 d-flex justify-content-center gap-3">
                  <motion.div className="sub-col-img1" variants={subColVariants}></motion.div>
                  <motion.div className="sub-col-img2" variants={subColVariants}></motion.div>
                </motion.div>
                <motion.div className="sub-col-3 justify-content-center d-flex gap-3">
                  <motion.div className="sub-col-img1" variants={subColVariants}></motion.div>
                  <motion.div className="sub-col-img2" variants={subColVariants}></motion.div>
                </motion.div>
              </motion.div>
              <motion.div
                className="col-12 col-md-6 d-flex flex-column gap-3 kitchen-col-2"
                variants={columnVariants}
                initial="hidden"
                whileInView="visible">
                <motion.div className="sub-col-2 d-flex justify-content-center gap-3">
                  <motion.div className="sub-col-img1" variants={subColVariants}></motion.div>
                  <motion.div className="sub-col-img2" variants={subColVariants}></motion.div>
                </motion.div>
                <motion.div className="sub-col-1 d-flex justify-content-center" variants={subColVariants}>
                  <div className="sub-col-1-img"></div>
                </motion.div>
                <motion.div className="sub-col-3 d-flex justify-content-center gap-3">
                  <motion.div className="sub-col-img1" variants={subColVariants}></motion.div>
                  <motion.div className="sub-col-img2" variants={subColVariants}></motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
          <div className="container mt-5">
            <h2 className="text-center mb-5 interior-heading">INTERIOR</h2>
            <div className="row interior-row">
              <motion.div
                className="col-12 col-md-6 d-flex flex-column gap-3  interior-col-1"
                variants={columnVariants}
                initial="hidden"
                whileInView="visible">
                <motion.div className="sub-col-1 d-flex justify-content-center" variants={subColVariants}>
                  <div className="sub-col-1-img"></div>
                </motion.div>
                <motion.div className="sub-col-2 d-flex justify-content-center gap-3">
                  <motion.div className="sub-col-img1" variants={subColVariants}></motion.div>
                  <motion.div className="sub-col-img2" variants={subColVariants}></motion.div>
                </motion.div>
                <motion.div className="sub-col-3 justify-content-center d-flex gap-3">
                  <motion.div className="sub-col-img1" variants={subColVariants}></motion.div>
                  <motion.div className="sub-col-img2" variants={subColVariants}></motion.div>
                </motion.div>
              </motion.div>
              <motion.div
                className="col-12 col-md-6 d-flex flex-column gap-3 interior-col-2"
                variants={columnVariants}
                initial="hidden"
                whileInView="visible">
                <motion.div className="sub-col-2 d-flex justify-content-center gap-3">
                  <motion.div className="sub-col-img1" variants={subColVariants}></motion.div>
                  <motion.div className="sub-col-img2" variants={subColVariants}></motion.div>
                </motion.div>
                <motion.div className="sub-col-1 d-flex justify-content-center" variants={subColVariants}>
                  <div className="sub-col-1-img"></div>
                </motion.div>
                <motion.div className="sub-col-3 d-flex justify-content-center gap-3">
                  <motion.div className="sub-col-img1" variants={subColVariants}></motion.div>
                  <motion.div className="sub-col-img2" variants={subColVariants}></motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
          <div className="container mt-5">
            <h2 className="text-center mb-5 bedroom-heading">MASTER BEDROOM</h2>
            <div className="row bedroom-row">
              <motion.div
                className="col-12 col-md-6 d-flex flex-column gap-3  interior-col-1"
                variants={columnVariants}
                initial="hidden"
                whileInView="visible">
                <motion.div className="sub-col-1 d-flex justify-content-center" variants={subColVariants}>
                  <div className="sub-col-1-img"></div>
                </motion.div>
                <motion.div className="sub-col-2 d-flex justify-content-center gap-3">
                  <motion.div className="sub-col-img1" variants={subColVariants}></motion.div>
                  <motion.div className="sub-col-img2" variants={subColVariants}></motion.div>
                </motion.div>
                <motion.div className="sub-col-3 justify-content-center d-flex gap-3">
                  <motion.div className="sub-col-img1" variants={subColVariants}></motion.div>
                  <motion.div className="sub-col-img2" variants={subColVariants}></motion.div>
                </motion.div>
              </motion.div>
              <motion.div
                className="col-12 col-md-6 d-flex flex-column gap-3 bedroom-col-2"
                variants={columnVariants}
                initial="hidden"
                whileInView="visible">
                <motion.div className="sub-col-2 d-flex justify-content-center gap-3">
                  <motion.div className="sub-col-img1" variants={subColVariants}></motion.div>
                  <motion.div className="sub-col-img2" variants={subColVariants}></motion.div>
                </motion.div>
                <motion.div className="sub-col-1 d-flex justify-content-center" variants={subColVariants}>
                  <div className="sub-col-1-img"></div>
                </motion.div>
                <motion.div className="sub-col-3 d-flex justify-content-center gap-3">
                  <motion.div className="sub-col-img1" variants={subColVariants}></motion.div>
                  <motion.div className="sub-col-img2" variants={subColVariants}></motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </main>
      )}
    </Fragment>
  );
}
