import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
// import React from 'react'
import Navbar from './Components/Navbar'
import './App.css'
import Home from './Components/Home';
import Page1 from './Components/pages/Page1';
import MouseFollower from './Components/MouseFollwer';


gsap.registerPlugin(useGSAP);


const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Page1 />
      <MouseFollower/>
    </div>
  )
}

export default App
