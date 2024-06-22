import React from 'react';
import './Footer.css';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row footer-row">
          <div className="col-6 col-sm-8 col-md-6">
            <h5>About Us</h5>
            <p className="para">
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Aliquam Nec Luctus Arcu, Ut Sagittis Risus. In
              Consectetur Luctus Metus, Eu Aliquam Nulla Ultrices Ut. Donec Sit Amet Ipsum Semper, Cursus Velit Ut,
              Dictum Dolor. Nulla Risus Dui, Luctus Vitae Consequat Feugiat, Viverra Et Elit. Curabitur Vel Nisi Et
              Felis Tempus Ultrices Id At Quam. Donec Id Dictum Velit, At Pretium Ex.
            </p>
          </div>
          <div className="col-6 col-sm-4 col-md-2">
            <h5>Get In Touch</h5>
            <p>1234567890@gmail.com</p>
            <p>(+91 0123456789)</p>
            <p>8779,Lorem st. Abc, NC 27526</p>
          </div>
          <div className="col-6 col-sm-6 col-md-2">
            <h5>Quick Link</h5>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Blog</p>
            <p>Portfolio</p>
          </div>
          <div className="col-6 col-sm-6 col-md-2">
            <h5>Studio</h5>
            <p>Terms & Condition</p>
            <p>Privacy Policy</p>
            <div className="d-flex gap-3">
              <a href="" target="blank">
                <FaTwitter />
              </a>
              <a href="" target="blank">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
