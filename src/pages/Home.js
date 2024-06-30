import React, { useRef, Fragment, useEffect, useState } from 'react';
import './Home.css';
import { Link, useNavigate } from 'react-router-dom';
import { delay, motion } from 'framer-motion';
import { MdOutlineRocketLaunch } from 'react-icons/md';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { FaRegBuilding } from 'react-icons/fa';
import { HiOutlineBuildingStorefront } from 'react-icons/hi2';
import { PiBuildingApartment } from 'react-icons/pi';
import { GiSpookyHouse } from 'react-icons/gi';
import { BsBuildings } from 'react-icons/bs';
import { FaKitchenSet } from 'react-icons/fa6';
import { LuSofa } from 'react-icons/lu';
import videoBg from '../images/home/card-video-bg.mp4';

const buttonVariants = {
  hidden: {
    width: 0,
  },
  visible: {
    width: '100%',
    transition: {
      duration: 2,
      ease: 'easeInOut',
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
const quoteLineVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      repeat: 2,
    },
  },
};

export default function Home() {
  const heading = 'Make Your Interior More';
  const heading2 = 'Minimaistic & Modern';
  const btnRef = useRef();
  const navigate = useNavigate();
  function exploreNowHandler() {
    navigate('/gallery');
  }

  function buttonEnter() {
    btnRef.current.classList.remove('button-animation');
  }
  function buttonLeave() {
    btnRef.current.classList.add('button-animation');
  }
  return (
    <Fragment>
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
                  <button
                    ref={btnRef}
                    className="btn home-col1-btn"
                    onMouseEnter={buttonEnter}
                    onMouseLeave={buttonLeave}
                    onClick={exploreNowHandler}>
                    <motion.span variants={buttonVariants} initial="hidden" animate="visible"></motion.span>
                    Explore Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="container quotes d-flex flex-column flex-md-row">
        <div className="d-flex flex-column gap-3 align-items-center line-col-1">
          <motion.div
            className="quotes-first-line"
            variants={quoteLineVariants}
            initial="hidden"
            whileInView="visible"></motion.div>
          <motion.div
            className="quotes-second-line"
            variants={quoteLineVariants}
            initial="hidden"
            whileInView="visible"></motion.div>
        </div>
        <div className="d-flex flex-column  justify-content-center">
          <h1 className="text-center">I hate vacations. if you can build buildings,why sit on the beach?</h1>
          <p className="text-end">--Philip Johnson</p>
        </div>
        <div className="d-flex flex-column-reverse flex-md-column gap-3 align-items-center line-col-2">
          <motion.div
            className="quotes-first-line"
            variants={quoteLineVariants}
            initial="hidden"
            whileInView="visible"></motion.div>
          <motion.div
            className="quotes-second-line"
            variants={quoteLineVariants}
            initial="hidden"
            whileInView="visible"></motion.div>
        </div>
      </div>
      <Svg />
      <Expandingcards />
      <Projectsteps />
      <Getintouch />
    </Fragment>
  );
}

function Svg() {
  return (
    <Fragment>
      <main className="svg">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300">
            <path
              fill="var(--main-background)"
              fill-opacity="1"
              d="M0,128L48,138.7C96,149,192,171,288,154.7C384,139,480,85,576,96C672,107,768,181,864,197.3C960,213,1056,171,1152,149.3C1248,128,1344,128,1392,128L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
          </svg>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-3">
              <div className="home-col1-h3 d-flex justify-content-center">
                <h3 className="">
                  What We Do
                  <br />
                  Best in the
                  <br />
                  Field
                </h3>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-3 svg-col-2">
              <div className="d-flex flex-column gap-5">
                <div className="d-flex flex-column gap-3 svg-box">
                  <div className="d-flex gap-3">
                    <div className="bg-icon">
                      <FaRegBuilding className="svg-react-icons" />
                    </div>
                    <div className="sub-heading">
                      <h5>Interior Design</h5>
                      <h6>Interior Design</h6>
                    </div>
                  </div>
                  <p className="svg-para">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce faucibus purus elit, sed pharetra
                    velit iaculis vitae.
                  </p>
                </div>
                <div className="d-flex flex-column gap-3 svg-box">
                  <div className="d-flex gap-3">
                    <div className="bg-icon">
                      <HiOutlineBuildingStorefront className="svg-react-icons" />
                    </div>
                    <div className="sub-heading">
                      <h5>Cafe Interior</h5>
                      <h6>Interior Design</h6>
                    </div>
                  </div>
                  <p className="svg-para">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce faucibus purus elit, sed pharetra
                    velit iaculis vitae.
                  </p>
                </div>
                <div className="d-flex flex-column gap-3 svg-box">
                  <div className="d-flex gap-3">
                    <div className="bg-icon">
                      <PiBuildingApartment className="svg-react-icons" />
                    </div>
                    <div className="sub-heading">
                      <h5>Apartment Make-Over</h5>
                      <h6>Interior Design</h6>
                    </div>
                  </div>
                  <p className="svg-para">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce faucibus purus elit, sed pharetra
                    velit iaculis vitae.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-3 svg-col-3">
              <div className="d-flex flex-column gap-5">
                <div className="d-flex flex-column gap-3 svg-box">
                  <div className="d-flex gap-3">
                    <div className="bg-icon">
                      <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em" className="svg-react-icons">
                        <path d="M6 2a2 2 0 00-2 2v15c0 1.11.89 2 2 2v1h2v-1h8v1h2v-1c1.11 0 2-.89 2-2V4a2 2 0 00-2-2H6m0 2h5v15H6V4m7 0h5v15h-5V4m-5 6v3h2v-3H8m6 0v3h2v-3h-2z" />
                      </svg>
                    </div>
                    <div className="sub-heading">
                      <h5>Wardrobe</h5>
                      <h6>Interior Design</h6>
                    </div>
                  </div>
                  <p className="svg-para">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce faucibus purus elit, sed pharetra
                    velit iaculis vitae.
                  </p>
                </div>
                <div className="d-flex flex-column gap-3 svg-box">
                  <div className="d-flex gap-3">
                    <div className="bg-icon">
                      <GiSpookyHouse className="svg-react-icons" />
                    </div>
                    <div className="sub-heading">
                      <h5>Landscaping</h5>
                      <h6>Exterior Design</h6>
                    </div>
                  </div>
                  <p className="svg-para">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce faucibus purus elit, sed pharetra
                    velit iaculis vitae.
                  </p>
                </div>
                <div className="d-flex flex-column gap-3 svg-box">
                  <div className="d-flex gap-3">
                    <div className="bg-icon">
                      <BsBuildings className="svg-react-icons" />
                    </div>
                    <div className="sub-heading">
                      <h5>Building Cnnstruction</h5>
                      <h6>Building Contract</h6>
                    </div>
                  </div>
                  <p className="svg-para">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce faucibus purus elit, sed pharetra
                    velit iaculis vitae.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-3 svg-col-4">
              <div className="d-flex flex-column gap-5">
                <div className="d-flex flex-column gap-3 svg-box">
                  <div className="d-flex gap-3">
                    <div className="bg-icon">
                      <FaKitchenSet className="svg-react-icons" />
                    </div>
                    <div className="sub-heading">
                      <h5>Modular Kitchen</h5>
                      <h6>Interior Design</h6>
                    </div>
                  </div>
                  <p className="svg-para">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce faucibus purus elit, sed pharetra
                    velit iaculis vitae.
                  </p>
                </div>
                <div className="d-flex flex-column gap-3 svg-box">
                  <div className="d-flex gap-3">
                    <div className="bg-icon">
                      <LuSofa className="svg-react-icons" />
                    </div>
                    <div className="sub-heading">
                      <h5>Boutique Interior</h5>
                      <h6>Interior Design</h6>
                    </div>
                  </div>
                  <p className="svg-para">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce faucibus purus elit, sed pharetra
                    velit iaculis vitae.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="svg-image">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300">
            <path
              fill="var(--main-background)"
              fill-opacity="1"
              d="M0,128L48,138.7C96,149,192,171,288,154.7C384,139,480,85,576,96C672,107,768,181,864,197.3C960,213,1056,171,1152,149.3C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </main>
    </Fragment>
  );
}

const cardBodyVariants = {
  hidden: {
    opacity: 0,
  },
  hover: {
    opacity: 1,
    transition: {
      delay: 0.5,
      ease: 'easeInOut',
      repeat: 1,
      type: 'spring',
      stiffness: 120,
    },
  },
};

function Expandingcards() {
  return (
    <main className="Expanding-cards-main">
      <div className="container mb-5 ">
        <div className="d-flex gap-2 flex-column flex-sm-row flex-md-row justify-content-center align-items-center">
          <div className="card Expanding-card card1">
            <motion.div
              className="card-body d-flex justify-content-center align-items-end"
              variants={cardBodyVariants}
              initial="hidden"
              whileHover="hover">
              <div className="card-body-container">
                <h1 className="text-center">Modular Kitchen Designs</h1>
              </div>
            </motion.div>
            <div className="card-body card-body-2">
              <div className="card-body-container1">
                <h1 className="text-center">Modular Kitchen Designs</h1>
              </div>
            </div>
          </div>
          <div className="card Expanding-card card2">
            <motion.div
              className="card-body d-flex justify-content-center align-items-end"
              variants={cardBodyVariants}
              initial="hidden"
              whileHover="hover">
              <div className="card-body-container">
                <h1 className="text-center">Wardrobe Designs</h1>
              </div>
            </motion.div>
            <div className="card-body card-body-2">
              <div className="card-body-container1">
                <h1 className="text-center">Wardrobe Designs</h1>
              </div>
            </div>
          </div>
          <div className="card Expanding-card card3">
            <motion.div
              className="card-body d-flex justify-content-center align-items-end"
              variants={cardBodyVariants}
              initial="hidden"
              whileHover="hover">
              <div className="card-body-container">
                <h1 className="text-center">Bathroom Designs</h1>
              </div>
            </motion.div>
            <div className="card-body card-body-2">
              <div className="card-body-container1">
                <h1 className="text-center">Bathroom Designs</h1>
              </div>
            </div>
          </div>
          <div className="card Expanding-card card4">
            <motion.div
              className="card-body d-flex justify-content-center align-items-end"
              variants={cardBodyVariants}
              initial="hidden"
              whileHover="hover">
              <div className="card-body-container">
                <h1 className="text-center">Master Bedroom Designs</h1>
              </div>
            </motion.div>
            <div className="card-body card-body-2">
              <div className="card-body-container1">
                <h1 className="text-center">Master Bedroom Designs</h1>
              </div>
            </div>
          </div>
          <div className="card Expanding-card card5">
            <motion.div
              className="card-body d-flex justify-content-center align-items-end"
              variants={cardBodyVariants}
              initial="hidden"
              whileHover="hover">
              <div className="card-body-container">
                <h1 className="text-center">Pooja Room Designs</h1>
              </div>
            </motion.div>
            <div className="card-body card-body-2">
              <div className="card-body-container1">
                <h1 className="text-center">Pooja Room Designs</h1>
              </div>
            </div>
          </div>
          <div className="card Expanding-card card6">
            <motion.div
              className="card-body d-flex justify-content-center align-items-end"
              variants={cardBodyVariants}
              initial="hidden"
              whileHover="hover">
              <div className="card-body-container">
                <h1 className="text-center">Kids Room Designs</h1>
              </div>
            </motion.div>
            <div className="card-body card-body-2">
              <div className="card-body-container1">
                <h1 className="text-center">Kids Room Designs</h1>
              </div>
            </div>
          </div>
          <div className="card Expanding-card card7">
            <motion.div
              className="card-body d-flex justify-content-center align-items-end"
              variants={cardBodyVariants}
              initial="hidden"
              whileHover="hover">
              <div className="card-body-container">
                <h1 className="text-center">Swimming Pool Designs</h1>
              </div>
            </motion.div>
            <div className="card-body card-body-2">
              <div className="card-body-container1">
                <h1 className="text-center">Swimming Pool Designs</h1>
              </div>
            </div>
          </div>
          <div className="card Expanding-card card8">
            <motion.div
              className="card-body d-flex justify-content-center align-items-end"
              variants={cardBodyVariants}
              initial="hidden"
              whileHover="hover">
              <div className="card-body-container">
                <h1 className="text-center">Indoor Home Theatre Designs</h1>
              </div>
            </motion.div>
            <div className="card-body card-body-2">
              <div className="card-body-container1">
                <h1 className="text-center">Indoor Home Theatre Designs</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

const LineVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      repeat: 1,
      type: 'spring',
      stiffness: 120,
    },
  },
};
function Projectsteps() {
  return (
    <main className="my-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 d-flex flex-column gap-5 project-col-1">
            <div>
              <h2 className="project-heading">Designing Your Dream in Three Simple Steps</h2>
            </div>
            <div className="d-flex flex-column gap-3">
              <div className="d-flex flex-row gap-5 sub-col-1">
                <div className="d-flex flex-column gap-4 justify-content-center align-items-center">
                  <div className="project-icon">
                    <MdOutlineRocketLaunch className="react-icons" />
                  </div>
                  <motion.div
                    className="project-line"
                    variants={LineVariants}
                    initial="hidden"
                    whileInView="visible"></motion.div>
                </div>
                <div className="d-flex flex-column gap-3 justify-content-center project-content">
                  <h5>Start Project</h5>
                  <p>
                    Embark on your design adventure by initiating your project. Share your vision and set the stage for
                    a bespoke design experience
                  </p>
                </div>
              </div>
              <div className="d-flex flex-row gap-5 sub-col-2">
                <div className="d-flex flex-column gap-4 justify-content-center align-items-center">
                  <div className="project-icon">
                    <HiOutlineLightBulb className="react-icons" />
                  </div>
                  <motion.div
                    className="project-line"
                    variants={LineVariants}
                    initial="hidden"
                    whileInView="visible"></motion.div>
                </div>
                <div className="d-flex flex-column gap-3 justify-content-center project-content">
                  <h5>Craft</h5>
                  <p>
                    Collaborate closely to achieve design excellence refining your vision and crafting brilliance into
                    every aspect of your space
                  </p>
                </div>
              </div>
              <div className="d-flex flex-row gap-5 sub-col-3">
                <div className="d-flex flex-column gap-4  ">
                  <div className="project-icon">
                    <IoIosCheckmarkCircleOutline className="react-icons" />
                  </div>
                </div>
                <div className="d-flex flex-column gap-3 justify-content-center mt-2">
                  <h5>Execute</h5>
                  <p>
                    Witness your vision becoming a reality as we execute the design plan with precision. Celebrate the
                    joy of your newly transformed space
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 project-col-2 d-flex justify-content-center align-items-center pt-5 ps-5">
            <div className="card project-col-2-card">
              <video src={videoBg} autoPlay loop muted />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

const buttonVariants2 = {
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

const getInTouchParaVariants = {
  hidden: {
    scale: 0.2,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duartion: 1.5,
      type: 'spring',
      stiffness: 120,
    },
  },
};
function Getintouch() {
  const btnRef = useRef();
  const navigate = useNavigate();
  function getInTouchHandler() {
    navigate('/contact');
  }
  function buttonEnter() {
    btnRef.current.classList.remove('button-animation');
  }
  function buttonLeave() {
    btnRef.current.classList.add('button-animation');
  }
  return (
    <section className="mt-5">
      <div className="row">
        <div className="col-6 d-flex justify-content-center align-items-center getintouch-col1 py-4">
          <div className="">
            <motion.p className="text-center" variants={getInTouchParaVariants} initial="hidden" whileInView="visible">
              You Dream It, We Design Them
            </motion.p>
            <motion.h6 className="text-center" variants={getInTouchParaVariants} initial="hidden" whileInView="visible">
              Let's Collborate
            </motion.h6>
          </div>
        </div>
        <div className="col-6 d-flex justify-content-center align-items-center getintouch-col2 py-4">
          <div className="">
            <motion.p className="text-center" variants={getInTouchParaVariants} initial="hidden" whileInView="visible">
              Vendors
            </motion.p>
            <motion.h6 className="text-center" variants={getInTouchParaVariants} initial="hidden" whileInView="visible">
              Let's Collaborate
            </motion.h6>
            <motion.button
              ref={btnRef}
              className="btn getintouch-button mt-3"
              onMouseEnter={buttonEnter}
              onMouseLeave={buttonLeave}
              onClick={getInTouchHandler}
              variants={buttonVariants2}
              initial="hidden"
              whileTap="hover">
              Get In Touch
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
