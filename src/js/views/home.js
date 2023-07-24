// src/pages/Home.js
import React from 'react';

import "../../styles/home.css";
import DashboardEntry from "../component/DashboardEntry";
import Features from "../component/Features";
import Testimonials from "../component/Testimonials";
import Pricing from "../component/Pricing";
import Footer from "../component/footer";
import HeroSection from "../component/HeroSecction";
import Fortalezas from "../component/Fortalezas";
import VideoBackground from '../component/VideoBackground';
import VideoBackground2 from '../component/VideoBackground2';



export const Home = () => (
  <div className="text-center mt-5">
    <DashboardEntry />
    
    <HeroSection />
    <VideoBackground />
    <Fortalezas />
    <VideoBackground2 />
    <Features />
    <Testimonials />
    <Pricing />
	

    
  </div>
);
