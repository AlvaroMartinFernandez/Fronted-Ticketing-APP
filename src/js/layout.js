import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./views/home";
import { Demo } from "./views/demo";
import injectContext from "./store/appContext";

import Navbar from "./component/Navbar/Navbar";

import DashBoard from "./component/DashBoard/DashBoard";
import Login from "./component/Login/Login";
import Signup from "./component/Signup/Signup";
import Faq from "./component/Faqs/faq";
import PasswordRecoveryForm from "./component/PasswordRecoveryForm/PasswordRecoveryForm";



const Layout = () => {
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>

        <Navbar />
        <Routes>
        PasswordRecoveryForm

          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/login" element={<Login />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/passwordRecoveryForm" element={<PasswordRecoveryForm />} />

          <Route path="*" element={<h1>Not found!</h1>} />
        </Routes>
        
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
