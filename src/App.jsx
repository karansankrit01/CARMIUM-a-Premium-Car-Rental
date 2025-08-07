import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar'
import './App.css'
import Home from './Components/Home';
import Page1 from './Components/pages/Page1';
import MouseFollower from './Components/MouseFollwer';
import Feature from './Components/pages/Feature';
import Footer from './Components/pages/Footer';
import ShowAll from './ShowAll';

gsap.registerPlugin(useGSAP);

const App = () => {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={
            <>
              <Home/>
              <Page1 />
              <MouseFollower/>
              <Feature/>
              <Footer/>
            </>
          } />
          <Route path="/show-all" element={<ShowAll />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
