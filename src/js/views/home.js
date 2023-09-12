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
import NewVideoComponent from '../component/NewVideoComponent/NewVideoComponent';



export const Home = () => (
  <div >



    <HeroSection id="herosection" />
    <Fortalezas />
    <NewVideoComponent id="nevvideocomponent" />
    <Testimonials id="testimonials" />
    <Pricing id="pricing" />
    <Footer />




  </div>
);