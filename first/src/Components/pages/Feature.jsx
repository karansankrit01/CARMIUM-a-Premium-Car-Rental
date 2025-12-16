import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Feature = () => {
    const featureRef = useRef(null)

    useGSAP(() => {
        gsap.from(featureRef.current, {
            scrollTrigger: {
                trigger: featureRef.current,
                start: 'top 100%',
                toggleActions: 'play none none reverse',
            },
            y: 100,
            opacity: 0,
            duration: .5,
            ease: 'power3.out',
        })
        gsap.set(featureRef.current, { opacity: 1, y: 0 })
            gsap.from('.co_card', {
            scrollTrigger: {    
                trigger: '.co_card',
                start: 'top 80%',
                toggleActions: 'play none none reverse',
            },
            y: 100,
            opacity: 0,
            duration: 1,
            ease: 'ease.inOut',
        })
        gsap.set('.co_card', { opacity: 1, y: 0 })

            
    }, [])

    return (
        <>
            <div className="feature-page" ref={featureRef}>
                <p className="feature_para">TAKING CARE OF EVERY CLIENT</p>
                <h1 className="feature_heading">
                    Key Features
                </h1>
                <h3 className='feature_heading1'>
                    We are all about client's comfort and safety. That's <br />
                    Why we provide the best services you can imagine.
                </h3>
            </div>
            <div className="card">
                <div className="co_card">
                    <img src="24hr.jpg" alt="" />
                    <p className='text'>24-hour car <br /> delivery</p>
                </div>
                <div className="co_card">
                    <img src="support.png" alt="" />
                    <p className='text'>24/7 Technical <br /> Support </p>
                </div>
                <div className="co_card">
                    <img src="flash.png" alt="" />
                    <p className='text'>All model have a<br /> premium package</p>
                </div>  
                <div className="co_card">
                    <img src="confidentiality.png" alt="" />
                    <p className='text'>Absolute <br />
                    confidentiality</p>
                </div>
            </div>
        </>
    )
}

export default Feature
