import React from 'react';
import './Nav.css';

export default function Nav() {
  return (
    <nav>
      <ul className="list-inline nav-ul ">
        <li className="list-inline-item">Home</li>
        <li className="list-inline-item">Services</li>
        <li className="list-inline-item">Gallery</li>
        <li className="list-inline-item">Contact us</li>
      </ul>
    </nav>
  );
}
