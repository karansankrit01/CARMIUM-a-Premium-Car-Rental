import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const VehicleFleet = () => {
  const sectionRef = useRef(null);
  const filtersRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    gsap.from(sectionRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
      y: 100,
      opacity: 0,
      duration: 0.5,
      ease: 'power3.out',
    });
    gsap.set(sectionRef.current, { opacity: 1, y: 0 });
    gsap.from(filtersRef.current, {
      scrollTrigger: {
        trigger: filtersRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
      y: 100,
      opacity: 0,
      duration: 0.5,
      ease: 'power3.out',
    });
    gsap.set(filtersRef.current, { opacity: 1, y: 0 });
    gsap.from(gridRef.current, {
      scrollTrigger: {
        trigger: gridRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
      y: 100,
      opacity: 0,
      duration: 0.5,
      ease: 'power3.out',
    });
    gsap.set(gridRef.current, { opacity: 1, y: 0 });  
  }, []);
    useEffect(() => {
        gsap.utils.toArray('.fleet-car-img').forEach((img) => {
            gsap.from(img, {
                scrollTrigger: {
                    trigger: img,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                },
                y: 100,
                opacity: 0,
                duration: 0.5,
                ease: 'power3.out',
            });
            gsap.set(img, { opacity: 1, y: 0 });
        });
  }, []);

  return (
    <section
      className="fleet-section"
      ref={sectionRef}
      style={{ padding: '20px', maxWidth: '1200px', width: '100%' }}
    >
      <p className="fleet-subtitle">ONLY THE BEST CARS</p>
      <h2 className="fleet-title">Our Vehicle Fleet</h2>
      <p className="fleet-description">
        We provide our customers with the most incredible driving emotions.
        <br />
        That's why we have only world-class cars in our fleet.
      </p>

      <div className="fleet-filters" ref={filtersRef}>
        <button className="fleet-tag">Premium</button>
        <button className="fleet-tag">Coupe</button>
        <button className="fleet-tag">Hypercars</button>
        <button className="fleet-tag">Sportcar</button>
        <button className="fleet-tag active">Cabriolet</button>
        <button className="fleet-tag">Limousines</button>
      </div>

      <div className="fleet-grid" ref={gridRef}>
        <img src="/porsche.jpeg" alt="Silver Porsche sports car parked in a modern showroom with bright lighting and a clean, luxurious atmosphere" className="fleet-car-img" />
        <img src="/ferrari.jpeg" alt="Red Ferrari coupe displayed in a sleek indoor environment with polished floors and an upscale, energetic mood" className="fleet-car-img" />
        <img src="/lambo.jpeg" alt="White Lamborghini hypercar positioned under spotlights in a high-end garage setting, evoking excitement and exclusivity" className="fleet-car-img" />
        <img src="/mercedes.jpeg" alt="Black Mercedes limousine with tinted windows, showcased in a spacious, elegant showroom with a calm and sophisticated tone" className="fleet-car-img" />
        <img src="/bmw.jpeg" alt="Blue BMW convertible with the top down, set against a backdrop of luxury vehicles in a bright, inviting space" className="fleet-car-img" />
        <img src="/mclaren.jpeg" alt="Yellow McLaren sports car angled for display in a contemporary showroom, highlighting its aerodynamic design and dynamic presence" className="fleet-car-img" />
        <img src="/aston.jpeg" alt="Green Aston Martin coupe parked among other high-end cars in a well-lit, modern environment, conveying exclusivity and excitement" className="fleet-car-img" />
      </div>

      <button className="fleet-showall">Show All (83 models) →</button>
    </section>
  );
};

export default VehicleFleet;
