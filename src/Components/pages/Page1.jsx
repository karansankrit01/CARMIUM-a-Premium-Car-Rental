import React from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Page1 = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".page1",
        start: "top 70%",  // Trigger when page1 hits 70% of viewport
        end: "bottom center",
        toggleActions: "play none none none",
        // markers: true, // Uncomment this for debugging
      },
      defaults: { ease: "power3.out", duration: 1 },
    });

    tl.from(".page1-title", {
      y: -80,
      opacity: 0,
    })
      .from(
        ".page1-description",
        {
          y: 40,
          opacity: 0,
        },
        "-=0.6"
      )
      
      
      .from(
        ".img-container img",
        {
          x: 100,
          opacity: 0,
          duration: 1,
        },
        "-=1"
      );
  }, []);

  return (
    <div className='page1'>
      <div className='img-container'>
        <img src="app.png" alt="app img" />
      </div>
      <div className='text-container'>
        <p className='small-heading'>CONVENIENT INTERACTION</p>
        <h1 className='page1-title'>Modern App</h1>
        <p className='page1-description'>
          We developed a simple and functional app.<br />
          It is built in such a way as to simplify the problem <br />
          of the car selection and rental process. View the <br />
          location, statement, and other information <br />
          about each of the vehicles in one click.
        </p>
        <button className="download-button">BOOK NOW</button>
      </div>
    </div>
  );
};

export default Page1;
