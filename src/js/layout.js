import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./views/home";
import { Demo } from "./views/demo";
//import {Login} from "./views/Login/login"
import injectContext from "./store/appContext";

import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/footer";
import DashBoard from "./component/DashBoard/DashBoard";
import Login from "./component/Login/Login";
import Signup from "./component/Signup/Signup";
import Faq from "./component/Faqs/faq";



const Layout = () => {
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>

        <Navbar />
        <Routes>


          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/login" element={<Login />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<h1>Not found!</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
