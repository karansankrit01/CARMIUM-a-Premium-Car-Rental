import React from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Navbar = () => {
  useGSAP(() => {
    gsap.set('.navbar-item, .download-button', { opacity: 1, visibility: 'visible' });

    const tl = gsap.timeline();

    tl.from('.navbar', {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });

    tl.from('.logo', {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: 'back.out(1.5)'
    }, '-=0.8');

    tl.from('.navbar-item', {
      y: -30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'back.out(1.5)'
    }, '-=0.6');

    tl.from('.download-button', {
      y: -30,
      opacity: 0,
      duration: 0.8,
      ease: 'back.out(1.5)'
    }, '-=0.4');

    tl.set('.navbar-item, .download-button', { opacity: 1, visibility: 'visible' });

    ScrollTrigger.create({
      trigger: '.navbar',
      start: 'top top',
      end: 'bottom top',
      toggleClass: { targets: '.navbar', className: 'active' }
    });
  }, []);

  return (
    <nav className='navbar'>
      <h1 className='logo'>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit', fontWeight: 600 }}>Carmium</Link>
      </h1>
      <ul className='navbar-list'>
        <li className='navbar-item'>
          <Link to="/about" style={{ textDecoration: 'none', color: 'inherit', fontWeight: 500 }}>About Us</Link>
        </li>
        <li className='navbar-item'>
          <Link to="/cars" style={{ textDecoration: 'none', color: 'inherit', fontWeight: 500 }}>Cars </Link>
        </li>
        {/* <li className='navbar-item'>Features</li> */}
        <li className='navbar-item'>Help</li>
      </ul>
      <button className='download-button'>
        <Link to="/BookNow" style={{ textDecoration: 'none', color: 'inherit', fontWeight: 500 }}>Book Now</Link>
      </button>
    </nav>
  )
}

export default Navbar
