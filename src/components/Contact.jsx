import React from 'react'
import img1 from "../assets/image/Group 2372.png"
import img2 from "../assets/image/Vector 186.png"
import { Email } from './email';
const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="right">
          <h1>
            Get in <span>Touch</span>
          </h1>
          <img src={img1} alt="error" className="img1" />
          <img src={img2} alt="error" className="img2" />
        </div>
        <Email />
      </div>
    </div>
  );
}

export default Contact