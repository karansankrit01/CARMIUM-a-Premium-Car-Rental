import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const VehicleFleet = () => {
  useEffect(() => {
    // Set initial state to visible
    gsap.set('.fleet-section', { opacity: 1, y: 0 });
    
    gsap.from('.fleet-section', {
      scrollTrigger: {
        trigger: '.fleet-section',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
      y: 100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    });
  }, []);

  return (
    <section className="fleet-section" style={{ padding: '20px', maxWidth: '1200px', width: '100%' }}>
      <p className="fleet-subtitle">ONLY THE BEST CARS</p>
      <h2 className="fleet-title">Our Vehicle Fleet</h2>
      <p className="fleet-description">
        We provide our customers with the most incredible driving emotions.
        <br />
        That’s why we have only world-class cars in our fleet.
      </p>

      <div className="fleet-filters">
        <button className="fleet-tag">Premium</button>
        <button className="fleet-tag">Coupe</button>
        <button className="fleet-tag">Hypercars</button>
        <button className="fleet-tag">Sportcar</button>
        <button className="fleet-tag active">Cabriolet</button>
        <button className="fleet-tag">Limousines</button>
      </div>

      <div className="fleet-grid">
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
