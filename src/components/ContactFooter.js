import React from 'react';
import './ContactFooter.css';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaRegCopyright } from 'react-icons/fa';
import { MdTouchApp } from 'react-icons/md';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row footer-row">
          <div className="col-6  col-md-6 col-lg-2 d-grid justify-content-center footer-col-1">
            <div>
              <h5>Get In Touch</h5>
              <p>1234567890@gmail.com</p>
              <p>(+91 0123456789)</p>
              <p>8779,Lorem st. Abc, NC 27526</p>
            </div>
          </div>
          <div className="col-6 col-md-6 col-lg-2 d-grid justify-content-center contact-footer-col-2">
            <div className="">
              <h5>Quick Link</h5>
              <div className="d-grid flex-column">
                <div className="d-flex gap-1 contact-quick-link-subdiv">
                  <p>Instagram</p>
                  <a
                    href=""
                    className="btn d-flex gap-1 justify-content-center align-items-center  contact-quick-link-button contact-quick-link-button-1">
                    Click here <FaInstagram className="contact-quick-link-button-icon" />
                  </a>
                </div>
                <div className="d-flex gap-1 contact-quick-link-subdiv">
                  <p>Twitter</p>
                  <a
                    href=""
                    className="btn d-flex gap-1 justify-content-center align-items-center  contact-quick-link-button contact-quick-link-button-2">
                    Click here <FaTwitter className="quick-link-button-icon" />
                  </a>
                </div>
                <div className="d-flex gap-1 contact-quick-link-subdiv">
                  <p>Facebook</p>
                  <a
                    href=""
                    className="btn d-flex gap-1 justify-content-center align-items-center contact-quick-link-button contact-quick-link-button-3">
                    Click here <FaFacebook className="quick-link-button-icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6  col-md-8 col-lg-5 d-grid justify-content-start justify-content-sm-center contact-footer-col-3">
            <div className="contact-footer-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.557496345707!2d78.77643607480826!3d10.996734989165727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baafb55c878a407%3A0x970c03c4c0d9bba1!2sM.A.M.%20School%20of%20Engineering!5e0!3m2!1sen!2sin!4v1719499447158!5m2!1sen!2sin"
                width="400"
                height="200"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
          <div className="col-6  col-md-4 col-lg-3 d-grid justify-content-start justify-content-sm-center justify-content-md-start align-content-center contact-footer-col-4">
            <div className="d-flex flex-column gap-2 justify-content-start">
              <div className="d-flex gap-2 copyrights-sub-div">
                <p className="text-center fw-0">
                  Designed and Developed by deecoders Copyrights <FaRegCopyright className="copyrights-icon me-1" />
                  2024
                </p>
              </div>
              <div className="d-flex justify-content-center footer-get-in-touch-div">
                <a href="" className="btn footer-get-in-touch">
                  Get In Touch <MdTouchApp className="footer-get-in-touch-icon mb-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
