import React from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


// import Navbar from './Components/Navbar'
// import './App.css'


const Home = () => {
    useGSAP(() => {
        ScrollTrigger.create({
            trigger: '.home-container',
            start: 'top top',
            end: 'bottom bottom',
            scrub: true,
        });
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
        // gsap.from('.img',{
        //     y:100,
        //     opacity: 0,
        //     duration: 1,

        // })
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
                        Premium
                        <br />
                        Car Rental <br />
                        in Delhi</h1>
                    <p className='home-description'>Don't deny yourself the pleasure of <br />
                        driving the best premium cars from <br />
                        around the world here and now</p>
                </div>
                <div className='image'>
                    <img className='img' src="car.png" alt="Image of a car" />
                </div>


            </div>

            <div className='more-cars '>
                <li>
                    <img className='car-image ' src="lambo.jpeg" alt="img1" />
                    <img className='car-image ' src="porsche.jpeg" alt="img2" />
                    <img className='car-image ' src="ferrari.jpeg" alt="img3" />
                    <img className='car-image ' src="audi.jpeg" alt="img4" />
                    <img className='car-image ' src="bmw.jpeg" alt="img5" />
                    <img className='car-image ' src="mercedes.jpeg" alt="img6" />
                    <img className='car-image ' src="porsche.jpeg" alt="img7" />

                </li>
            </div>
        </>
    )
}

export default Home
