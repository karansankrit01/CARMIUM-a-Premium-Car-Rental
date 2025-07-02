import React from 'react'
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
 
// Importing GSAP and ScrollTrigger
// Importing the Navbar CSS for styling 



import gsap from 'gsap';

const Navbar = () => {
    useGSAP(()=>{
        ScrollTrigger.create({
            trigger: '.navbar',
            start: 'top top',
        });
        gsap.from('.logo',{
            y: -100,
            opacity: 0,
            duration: 1
        })
        gsap.from('.navbar',{
            y: -100,
            opacity: 0,
            duration: 1

        })
        gsap.to('.navbar',{
            y:0,
            opacity: 1,
            duration:1,
            ease: 'back.out(1.5)'

        })
        gsap.from('.navbar-list li',{
          y: -50,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'back.out(1.5)'
      })
        gsap.from('.navbar-button',{
            y: -50,
            opacity: 0,
            duration: 1
        });
    },[]);

  return (
    <div>
      <nav className='navbar'>
        <h1 className='logo'>Carmium</h1>
        <ul className='navbar-list'>
            <li className='navbar-item'>Home</li>
          <li className='navbar-item'>About us</li>
          <li className='navbar-item'>Cars</li>
          <li className='navbar-item'>Futures</li>
          <li className='navbar-item'>Help</li>
        </ul>
        <button className='download-button'>Book Now</button>
      </nav>
    </div>
  )
}

export default Navbar
