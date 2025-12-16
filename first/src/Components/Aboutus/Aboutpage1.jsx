import React from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Aboutus1 from './Aboutus1';
import Mission from './mission';
import More from './more';
import Pic from './Pic';

gsap.registerPlugin(ScrollTrigger);

const Aboutpage1 = () => {
  useGSAP(() => {
    gsap.from(".About-container .imagee img", {
      duration: 1,
      y: -50,
      opacity: 0,
      scrollTrigger: {
        trigger: ".About-container .imagee img",
        start: "center center",
        end: "center top",
      },
    });

    gsap.from(".About-container > img", {
      duration: 1,
      y: -50,
      opacity: 0,
      delay: 0.5,
      scrollTrigger: {
        trigger: ".About-container > img",
        start: "center center",
        end: "center top",
      },
    });

    gsap.fromTo(".About-container h1", { opacity: 0, y: 30 }, {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".About-container h1",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
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
        },
      }
    );
    gsap.fromTo(".About-container .highlight", { opacity: 0, y: 30 }, {
      opacity: 1,
      y: 0,
      x: 0,
      duration: 2,
      scrollTrigger: {
        trigger: ".About-container .highlight", 
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  }, []);
  
  return (
    <>
      <div className="About-container">
      <h1>Redefining the way you experience luxury travel.</h1>
      <h3>Scroll Down for More &darr;</h3>
        <div className="imagee">
          <img src="/car.png" alt="" />
        </div>
        <img src="/ownlane.png" alt="" />

        <h1 className='highlight'>It doesn't matter if you win by an inch or a mile,
         winning is winning.
        </h1>

      <More />
      <Aboutus1 />
      <Pic />
      <Mission/>
    
    </div>
      </>
    );
}

export default Aboutpage1

