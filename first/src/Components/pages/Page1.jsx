import { useGSAP } from "@gsap/react"
import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);


const Page1 = () => {
        useGSAP(() => {
                gsap.from('.page1-title', {
                        
                    y: -100,
                    opacity: 0,
                    duration: 1,
                    stagger: 0.2,
                })
                gsap.from('.page1-description', {
                        scrollTrigger: {
                                trigger: '.page1',
                                start: 'top top',
                                end: 'bottom bottom',
                                y:100,
                                opacity:0,
                                duration:1,
                                scrub: true,

                        },
                    y: 50,
                    opacity: 0,
                    duration: 1,
                    stagger: 0.2,
                })
        })                      
    return (
        <>
        <div className='page1'>
                <div className='img-container'>
                <img src="app.png" alt="app img" />
                </div>
                <div className='text-container'>
                        <h1 className='page1-title'>Welcome to Carmium</h1>
                        <p className='page1-description'>We developed a simple and functional car rental <br />
                         service.
                                it is built in such a way as simplify the process of <br />
                                 renting a car.
                                We have a wide range of cars to choose from, <br />
                                 including luxury and economy models.
                                view the location, statement <br />and  
                                other information about each of the vehiclel in one click.
                        </p>
                </div>
        </div>
        </>
    )
}

export default Page1
