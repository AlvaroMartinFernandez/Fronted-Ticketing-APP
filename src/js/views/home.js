import React from 'react';

import "../../styles/home.css";
import DashboardEntry from "../component/DashboardEntry/DashboardEntry";
import Features from "../component/Features/Features";
import Testimonials from "../component/Testimonials/Testimonials";
import Pricing from "../component/Pricing/Pricing";
import Footer from "../component/Footer/footer";
import HeroSection from "../component/HeroSecction/HeroSecction";
import Fortalezas from "../component/Fortalezas/Fortalezas";
import VideoBackground from '../component/VideoBackground/VideoBackground';
import VideoBackground2 from '../component/VideoBackground2/VideoBackground2';



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
