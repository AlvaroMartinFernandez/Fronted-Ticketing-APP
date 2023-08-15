import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import injectContext, { Context } from "./store/appContext";

import Navbar from "./component/Navbar/Navbar";
import DashBoard from "./component/DashBoard/DashBoard";
import Login from "./component/Login/Login";
import Signup from "./component/Signup/Signup";
import Faq from "./component/Faqs/faq";
import PasswordRecoveryForm from "./component/PasswordRecoveryForm/PasswordRecoveryForm";
import FloatingMenu from "./component/FloatingMenu/FloatingMenu";

// Importa los componentes Home y Demo aquí
import { Home } from "./views/home";
import { Demo } from "./views/demo";

const Layout = () => {
  const basename = process.env.BASENAME || "";
  const { store, actions } = useContext(Context);

  return (
    <div>
      <BrowserRouter basename={basename}>
        <Navbar />
        <FloatingMenu store={store} actions={actions} />
        <Routes>
          {/* Agrega las rutas de Home y Demo aquí */}
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
