import React, { Fragment, useState } from 'react';
import './Contact.css';
import Row1Bg from '../images/contact/contact-bg.jpg';
import ContactVideo from '../images/contact/contact-video.mp4';
import { motion } from 'framer-motion';
import { MdOutlinePhoneIphone } from 'react-icons/md';
import { TfiEmail } from 'react-icons/tfi';
import { GrLocation } from 'react-icons/gr';
import { TbWorldWww } from 'react-icons/tb';
import { IoMdPerson } from 'react-icons/io';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { RiMessage3Fill } from 'react-icons/ri';

const topBackgroundVariants = {
  hidden: {
    y: -100,
    scale: 0,
  },
  visible: {
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 120,
      duration: 2,
      delay: 1,
    },
  },
};
const formVariants = {
  hidden: {
    scale: 0.9,
  },
  visible: {
    scale: 1,
    transition: {
      duration: 1,
      type: 'spring',
      stiffness: 700,
    },
  },
};
const parentPVariants = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const contactVariants = {
  hidden: {
    scale: 2,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 2,
      type: 'spring',
      stiffness: 120,
    },
  },
};

export default function Contact() {
  const [input, setInput] = useState();
  function updateDetails(e) {
    const name = e.target.name;
    const value = e.target.value;
    setInput((input) => {
      return { ...input, [name]: value };
    });
  }
  function formSubmitHandler(e) {
    e.preventDefault();
    console.log(input);
  }
  return (
    <Fragment className="contact-full">
      <section className="top-background">
        <div className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={Row1Bg} className="carousel-imgs" alt="..." />
              <div className="carousel-caption d-block">
                <motion.h1
                  className="carousel-heading"
                  variants={topBackgroundVariants}
                  initial="hidden"
                  animate="visible">
                  Contact Us
                </motion.h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <main className="contact py-5">
        <div className="container-fluid">
          <div className="row contact-row-1 pb-5">
            <motion.div
              className="col-12  col-sm-12 col-md-12 d-flex flex-column flex-md-row justify-content-center align-items-center contact-col-2"
              variants={parentPVariants}
              initial="hidden"
              animate="visible">
              <motion.div
                className="d-flex flex-column gap-3 justify-content-center align-items-center contact-col-2-section"
                variants={contactVariants}>
                <div>
                  <MdOutlinePhoneIphone className="contact-icon" />
                </div>
                <p className="contact-col-2-p text-center">Phone : +91 123456789</p>
              </motion.div>
              <motion.div
                className="d-flex flex-column gap-3 justify-content-center align-items-center contact-col-2-section"
                variants={contactVariants}>
                <div>
                  <TfiEmail className="contact-icon" />
                </div>
                <p className="contact-col-2-p text-center">Rosan123@gmail.com</p>
              </motion.div>
              <motion.div
                className="d-flex flex-column gap-3 justify-content-center align-items-center contact-col-2-section"
                variants={contactVariants}>
                <div>
                  <GrLocation className="contact-icon" />
                </div>
                <address className="contact-col-2-p text-center">abc nagar.Chennai-60001</address>
              </motion.div>
            </motion.div>

            <div className="col-12 col-sm-12 col-md-12 d-grid flex-column justify-content-center align-content-center contact-col-1">
              <div className="contact-col1-video">
                <video src={ContactVideo} autoPlay loop muted />
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="col-12  d-flex justify-content-center align-items-center form-column">
              <form onSubmit={formSubmitHandler} className="">
                <motion.div className="input-group mb-4" variants={formVariants} initial="hidden" whileInView="visible">
                  <span className="input-group-text input-front-text">
                    <IoMdPerson className="contact-icons" />
                  </span>
                  <div className="form-floating">
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      className="form-control form-input"
                      onChange={updateDetails}
                    />
                    <label className="form-label form-text">Full Name</label>
                  </div>
                </motion.div>
                <motion.div className="input-group mb-4" variants={formVariants} initial="hidden" whileInView="visible">
                  <span className="input-group-text input-front-text">
                    <FaPhoneAlt className="contact-icons" />
                  </span>
                  <div className="form-floating">
                    <input
                      type="number"
                      name="phonenumber"
                      placeholder="Mobile"
                      id="floatingInput"
                      className="form-control form-input"
                      onChange={updateDetails}
                    />
                    <label for="floatingInput" className="form-label form-text">
                      Mobile
                    </label>
                  </div>
                </motion.div>
                <motion.div className="input-group mb-4" variants={formVariants} initial="hidden" whileInView="visible">
                  <span className="input-group-text input-front-text">
                    <MdEmail className="contact-icons" />
                  </span>
                  <div className="form-floating">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="form-control form-input"
                      onChange={updateDetails}
                    />
                    <label className="form-label form-text">Email</label>
                  </div>
                </motion.div>
                <motion.div
                  className="input-group mb-5 "
                  variants={formVariants}
                  initial="hidden"
                  whileInView="visible">
                  <span className="input-group-text input-front-text">
                    <RiMessage3Fill className="contact-icons" />
                  </span>
                  <div className="form-floating">
                    <textarea
                      className="form-control form-input"
                      aria-label="With textarea"
                      name="message"
                      placeholder="Message"
                      onChange={updateDetails}></textarea>
                    <label className="form-label form-text">Message</label>
                  </div>
                </motion.div>
                <motion.div
                  className="form-btn d-flex justify-content-center align-items-center"
                  variants={formVariants}
                  initial="hidden"
                  whileInView="visible">
                  <button className="btn">SEND MESSAGE</button>
                </motion.div>
              </form>
            </div>
            <div className="col-12 d-flex justify-content-center align-items-center map-column">
              <div className="loading-map mt-5">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.557496345707!2d78.77643607480826!3d10.996734989165727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baafb55c878a407%3A0x970c03c4c0d9bba1!2sM.A.M.%20School%20of%20Engineering!5e0!3m2!1sen!2sin!4v1719499447158!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
}
