import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Navbar = () => {
  useGSAP(() => {
    // Set initial visibility to ensure elements are visible
    gsap.set('.navbar-item, .download-button', { opacity: 1, visibility: 'visible' });

    // Create a timeline for better control
    const tl = gsap.timeline();

    // Animate navbar on mount
    tl.from('.navbar', {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });

    // Animate logo
    tl.from('.logo', {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: 'back.out(1.5)'
    }, '-=0.8');

    // Animate nav items with stagger
    tl.from('.navbar-item', {
      y: -30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'back.out(1.5)'
    }, '-=0.6');

    // Animate Book Now button
    tl.from('.download-button', {
      y: -30,
      opacity: 0,
      duration: 0.8,
      ease: 'back.out(1.5)'
    }, '-=0.4');

    // Ensure all elements are visible after timeline completes
    tl.set('.navbar-item, .download-button', { opacity: 1, visibility: 'visible' });

    // Sticky effect on scroll
    ScrollTrigger.create({
      trigger: '.navbar',
      start: 'top top',
      end: 'bottom top',
      toggleClass: { targets: '.navbar', className: 'active' }
    });
  }, []);

  return (
    <nav className='navbar'>
      <h1 className='logo'>Carmium</h1>
      <ul className='navbar-list'>
        <li className='navbar-item'>About Us</li>
        <li className='navbar-item'>Cars</li>
        <li className='navbar-item'>Futures</li>
        <li className='navbar-item'>Help</li>
      </ul>
      <button className='download-button'>Book Now</button>
    </nav>
  )
}

export default Navbar
