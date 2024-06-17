import './Header.css';
import React from 'react';
import Nav from './Nav';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <img src="Assets/logo.png" className="logo" />
        </div>
        <div className="col-6 d-flex justify-content-center align-items-center">
          <Nav />
        </div>
        <div className="col-3 d-flex justify-content-end align-items-center">
          <button className="btn fw-bold border Header-col3-button">Sign In</button>
        </div>
      </div>
    </div>
  );
}
