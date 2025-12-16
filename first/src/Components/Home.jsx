import React from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);


// import Navbar from './Components/Navbar'
// import './App.css'


const Home = () => {
    useGSAP(() => {
        // const tl = gsap.timeline({
        //     scrollTrigger: {
        //         trigger: ".car-scroll-section",
        //         start: "top top",
        //         end: "bottom top",
        //         scrub: true,
        //         pin: true, // Keeps the section fixed during animation
        //     },
        // });

        // tl.set("#front-img", { opacity: 1, zIndex: 3 })
        //     .set("#side-img", { opacity: 0, zIndex: 2 })
        //     .set("#rear-img", { opacity: 0, zIndex: 1 })

        //     .to("#front-img", { opacity: 0, duration: .5 }, 0)
        //     .to("#side-img", { opacity: 1, duration: .6 }, 0)

        //     .to("#side-img", { opacity: 0, duration: 1 }, 0.1)  // hide side
        //     .to("#rear-img", { opacity: 1, duration: 1 }, 0.2);  // show rear

        // ScrollTrigger.create({
        //     trigger: '.home-container',
        //     start: 'top top',
        //     end: 'bottom bottom',
        //     scrub: true,
        // });
        gsap.from('.home-title', {

            y: -100,
            opacity: 0,
            duration: 1,
            stagger: 0.2,


        })
        gsap.from('.home-description', {
            scrollTrigger: {
                trigger: '.home-description',
                start: 'top 80%',
                end: 'bottom 20%',
                scrub: true,
            },
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
        })
        gsap.from('.img', {
            y: 100,
            opacity: 0,
            duration: 1,

        })
        gsap.from('.more-cars', {
            y: 100,
            opacity: 0,
            duration: 1,
            // stagger: 0.2,
        })
        gsap.from('.car-image', {
            scale: 0.9,
            opacity: 0,
            duration: 1.5,
            stagger: 0.2,
        })
        gsap.from('.home-container', {
            y: 100,
            opacity: 0,
            duration: 1,
        })
        gsap.from('.image', {
            scale: 0.9,
            opacity: 0,
            duration: 2.5,
        })

    }, [])
    return (
        <>
            <div className='home-container'>
                <div className='container'>
                    <h1 className='home-title'>
                        Premium<br />
                        Car Rental <br />
                        in New Delhi
                    </h1>
                    <p className='home-description'>
                        Don't deny yourself the pleasure of <br />
                        driving the best premium cars from <br />
                        around the world here and now
                    </p>
                </div>

                <div className='image'>
                    <img className='img-1' src="getshit.png" alt="quote" />
                    <img className='img' src='car.png' alt='Convertible car' />
                </div>
            </div>

            <div className='more-cars'>
                <ul>
                    <li><img className='car-logo' src='lambo.jpeg' alt='Lamborghini' /></li>
                    <li><img className='car-logo' src='tesla.jpeg' alt='Tesla' /></li>
                    <li><img className='car-logo' src='rolls.jpeg' alt='Rolls Royce' /></li>
                    <li><img className='car-logo' src='maserati.jpeg' alt='Maserati' /></li>
                    <li><img className='car-logo' src='jaguar.jpeg' alt='Jaguar' /></li>
                    <li><img className='car-logo' src='aston.jpeg' alt='Aston Martin' /></li>
                    <li><img className='car-logo' src='mclaren.jpeg' alt='McLaren' /></li>
                    <li><img className='car-logo' src='porsche.jpeg' alt='Porsche' /></li>
                    <li><img className='car-logo' src='mercedes.jpeg' alt='Mercedes' /></li>
                    <li><img className='car-logo' src='bmw.jpeg' alt='BMW' /></li>
                    <li><img className='car-logo' src='audi.jpeg' alt='
Audi' /></li>
                    <li><img className='car-logo' src='ferrari.jpeg' alt='Ferrari' /></li>
                    <li><img className='car-logo' src='bugatti.jpeg' alt='Bugatti' /></li>
                </ul>
            </div>
            {/* <div className="car-scroll-section">
                <div>
                    <img className="car-image" id="front-img" src="front.png" alt="Porsche Front" />
                    <img className="car-image" id="side-img" src="side.png" alt="Porsche Side" />
                    <img className="car-image" id="rear-img" src="rear.png" alt="Porsche Rear" />
                </div>
            </div> */}
        </>
    )
}

export default Home
