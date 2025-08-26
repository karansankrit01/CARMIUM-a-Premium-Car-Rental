import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Aboutpage1 = () => {
  useGSAP(() => {
    gsap.from(".About-container img", {
      duration: 1,
      y: -50,
      opacity: 0,
      scrollTrigger: {
        trigger: ".About-container img",
        start: "center center",
        end: "center top",
        scrub: true,
        scale: 2
      }
    });

    gsap.from(".About-container h1", {
      duration: 1,
      y: -50,
      opacity: 0,
      delay: 0.5,
      scrollTrigger: {
        trigger: ".About-container h1",
        start: "center center",
        end: "center top",
        scrub: true,
        scale: 5
      }
    });
    gsap.fromTo(
      ".About-container h3",
      { opacity: 1, y: 0 },
      {
        opacity: 0,
        y: -30,
        scrollTrigger: {
          trigger: ".About-container h3",
          start: "top center",
          end: "bottom top",
          scrub: true,
        }
      }
    );
    gsap.fromTo(".about img", {
      height: "250px",
      width: "300px",
      opacity: 0,
      x: -0
    }, {
      duration: 1,
      opacity: 1,
      x: 10,
      delay: 0.3,
      scrollTrigger: {
        trigger: ".about",
        start: "center center",
        end: "top bottom ",
        scrub: true,
        scale: 2,
        borderRadius: "20%"
        
      }
    });

    gsap.from(".about-text", {
      duration: 1,
      x: -50,
      opacity: 0,
      delay: 0.6,
      scrollTrigger: {
        trigger: ".about",
        start: "top center",
        end: "bottom center",
        scrub: true,
        scale: 20,
      }
    });
  }, []);

  return (
    <div className="About-container">
      <img src="ownlane.png" alt="" />
      <h3>Scroll Down for More &darr;</h3>
      <h1>Redefining the way you experience luxury travel.</h1>
        
      <div className="about">
        <img src="6.jpg" alt="" />
        <div className="about-text">
          “Carmium was born from a simple idea — to make luxury cars accessible for everyone who seeks elegance, comfort, and unforgettable journeys. From business trips to weekend getaways, we provide premium vehicles that match your lifestyle.”
        </div>
      </div>
      <p className='mission-title'>Our Mission</p>
      <div className="mission">
  <h1 className="mission-statement">
    <span>
      “To provide seamless, reliable, and premium car rental experiences tailored for modern travelers.”
    </span>
  </h1>
</div>
      <p className='mission-title'>Our Vision</p>
  <div className="mission">
  <h1 className="vision-statement">
    <span>
      “To become the most trusted luxury car rental platform worldwide.” 
    </span>
  </h1>
  <div className="info">
    <h2>Why choose us?</h2>
    <ul>
      
    </ul>
  </div>
</div>

    </div>
  )
}

export default Aboutpage1
