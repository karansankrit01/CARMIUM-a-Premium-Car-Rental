import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import './App.css';
import Home from './Components/Home';
import Page1 from './Components/pages/Page1';
import MouseFollower from './Components/MouseFollwer';
import Feature from './Components/pages/Feature';
import Footer from './Components/pages/Footer';
import ShowAll from './ShowAll';
import Aboutpage1 from './Components/Aboutus/Aboutpage1'; // Make sure this import exists
import ShowVehicle from './Components/cars/ShowVehicle';
import BookNow from './Components/BookNow';

gsap.registerPlugin(useGSAP);

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Page1 />
              <MouseFollower />
              <Feature />
              <Footer />
            </>
          }
        />
        <Route path="/about" element={<Aboutpage1 />} />
        <Route path="/cars" element={<ShowVehicle/>} />
        <Route path="/show-all" element={<ShowAll />} />
        <Route path="/BookNow" element={<BookNow />} />
      </Routes>
    </Router>
  );
};

export default App;
