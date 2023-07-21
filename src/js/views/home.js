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


export const Home = () => (
  <div className="text-center mt-5">
    <DashboardEntry />
   

    <HeroSection />
    <Fortalezas />
    <Features />
    <Testimonials />
    <Pricing />
	

    
  </div>
);
