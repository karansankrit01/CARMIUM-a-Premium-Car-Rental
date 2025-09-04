import React, { use } from 'react'
import VehicleFleet from '../pages/VehicleFleet'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const More = () => {
  useGSAP(() => {
    gsap.fromTo(".about img", { opacity: 0, y: 50 }, {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".about img",
        start: "top 80%",
        end: "bottom 60%",
        scrub: true,
      },
    });
  }, []);
  
  return (
    <>
    <div className='about'>
        <img src="red.png" alt="" />
    </div>
    </>
  )
}

export default More;
