import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
<<<<<<< HEAD
import injectContext, { Context } from "./store/appContext";

=======
import { Home } from "./views/home";
import { Demo } from "./views/demo";
import injectContext from "./store/appContext";
>>>>>>> d20555bd4df83068b4c16ab0caf0ba1273e2031c
import Navbar from "./component/Navbar/Navbar";
import DashBoard from "./views/DashBoard/DashBoard";
import Login from "./views/Login/Login";
import Signup from "./views/Signup/Signup";
import Faq from "./component/Faqs/faq";
<<<<<<< HEAD
import PasswordRecoveryForm from "./component/PasswordRecoveryForm/PasswordRecoveryForm";
import FloatingMenu from "./component/FloatingMenu/floatingMenu";
import Contacto from "./component/contacto/contacto";
=======
import PasswordRecoveryForm from "./views/PasswordRecoveryForm/PasswordRecoveryForm";
import TicketDetailView from "./views/TicketDetailView/TicketDetailView";
import PasswordConfirmation from "./views/PasswordRecoveryForm/PasswordConfirm";
>>>>>>> d20555bd4df83068b4c16ab0caf0ba1273e2031c

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
<<<<<<< HEAD
          <Route path="/contact" element={<Contacto />} />
=======
          <Route path="/TicketDetailView/:id" element={<TicketDetailView />} />
          <Route path="/PasswordConfirmation/:id" element={<PasswordConfirmation />} />

>>>>>>> d20555bd4df83068b4c16ab0caf0ba1273e2031c
          <Route path="*" element={<h1>Not found!</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
