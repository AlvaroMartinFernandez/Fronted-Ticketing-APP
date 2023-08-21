import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./views/home";
import { Demo } from "./views/demo";
import injectContext from "./store/appContext";
import Navbar from "./component/Navbar/Navbar";
import DashBoard from "./views/DashBoard/DashBoard";
import Login from "./views/Login/Login";
import Signup from "./views/Signup/Signup";
import Faq from "./component/Faqs/faq";
import PasswordRecoveryForm from "./views/PasswordRecoveryForm/PasswordRecoveryForm";
import TicketDetailView from "./views/TicketDetailView/TicketDetailView";
import PasswordConfirmation from "./views/PasswordRecoveryForm/PasswordConfirm";


const Layout = () => {
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <Navbar />

        <Routes>
          {/* Agrega las rutas de Home y Demo aquí */}
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/login" element={<Login />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/passwordRecoveryForm" element={<PasswordRecoveryForm />} />
          <Route path="/TicketDetailView/:id" element={<TicketDetailView />} />
          <Route path="/PasswordConfirmation/:id" element={<PasswordConfirmation />} />

          <Route path="*" element={<h1>Not found!</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
