import { useGSAP } from '@gsap/react'
import React from 'react'

const Footer = () => {
  useGSAP(()=>{
      
  });
  return (
    <>
      <div className="img-section">
        <div className="img-wrapper">
          <img className='drive-unique' src="red.png" alt="" />
        </div>
        <h1 className='drive-title'>Drive With Unique Today</h1>
      </div>
      <div className="sec">
        <p className='para-text'>
          Book now to explore the world of premium <br />
          cars and elevate your travel experience.
        </p>
        <button className='download-button'>Book Now</button>
      </div>
      <div className="footer-main">
        <div className="footer-links">
          <div>
            <p>About Us</p>
            <p>Cars</p>
            <p>Futures</p>
            <p>Help</p>
          </div>
          <div className="footer-bottom">
            <p>Terms</p>
            <p>Privacy</p>
           
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
