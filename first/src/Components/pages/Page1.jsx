import LocomotiveScroll from 'locomotive-scroll';
import React from 'react';
import { useNavigate } from 'react-router-dom';


const Page1 = () => {
  const navigate = useNavigate();

  const handleShowAllClick = () => {
    navigate('/show-all');
  };

  return (
    <>
      <div className="page1">
        <p className='para'>only the best cars</p>
        <h1 className="page1_heading">Our Vehicle Fleet</h1>
        <p className='paragraph'>
          We provide our customer with most incredible driving emotions. <br />
          That's why we have only world-class cars in our fleet.
        </p>

        <div className="button-wrapper">
          <div className="button-group">
            <button className="fleet-btn">Premium</button>
            <button className="fleet-btn">Coupe</button>
            <button className="fleet-btn active">Hypercars</button>
            <button className="fleet-btn">Sportcar</button>
            <button className="fleet-btn">Cabriolet</button>
            <button className="fleet-btn">Limousines</button>
          </div>
        </div>
        <div className="vehicles">
          <div className="vehicle">
            <img src="/hyper2.jpeg" alt="Vehicle 1" />
          </div>
          <div className="vehicle">
            <img src="/hyper1.jpeg" alt="Vehicle 2" />
          </div>
          <div className="vehicle">
            <img src="/hyper3.jpeg" alt="Vehicle 3" />
          </div>
          <div className="vehicle">
            <img src="/hyper4.jpeg" alt="Vehicle 4" />
          </div>
          <div className="vehicle">
            <img src="/hyper5.jpeg" alt="Vehicle 5" />
          </div>
          <div className="vehicle">
            <img src="/hyper6.jpeg" alt="Vehicle 6" />
          </div>
        </div>
        <div className="show-all-button" onClick={handleShowAllClick}>
          Show All (83 Models) &rarr;
        </div>
      </div>
    </>
  );
};

export default Page1;
