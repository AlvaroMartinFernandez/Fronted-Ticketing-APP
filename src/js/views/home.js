import React from 'react';

import "../../styles/home.css";
import DashboardEntry from "../component/DashboardEntry/DashboardEntry";
import Features from "../component/Features/Features";
import Testimonials from "../component/Testimonials/Testimonials";
import Pricing from "../component/Pricing/Pricing";
import Footer from "../component/Footer/footer";
import HeroSection from "../component/HeroSecction/HeroSecction";
import Fortalezas from "../component/Fortalezas/Fortalezas";
import VideoBackground2 from '../component/VideoBackground2/VideoBackground2';
import NevVideoComponent from '../component/NevVideoComponent/NevVideoComponent'; 



export const Home = () => (
  <div >

<DashboardEntry />
  
  <HeroSection />
  <Fortalezas />
  <NevVideoComponent />
  <Testimonials />
  <Pricing />
  <Footer />
  
    


  </div>
);
