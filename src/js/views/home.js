import React from "react";
import { Link } from 'react-router-dom';

import "../../styles/home.css";

import Features from "../component/Features";
import Testimonials from "../component/Testimonials";
import Pricing from "../component/Pricing";
import Footer from "../component/footer";
import HeroSection from "../component/HeroSecction";



export const Home = () => (
	<div className="text-center mt-5">
		<Link to="/dashboard" className="cta-link">
  Acceder al Dashboard
</Link>

		<HeroSection />

		<Features />
		<Testimonials />

		<Pricing />


	</div>
);
