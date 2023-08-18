 import React from 'react';
 import './pricing.module.css';
  import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardTitle,
    MDBIcon,
    MDBBtn,
  } from "mdb-react-ui-kit";

  import pricing1 from "../../../img/pricing1.jpg";
  import pricing2 from "../../../img/pricing2.jpg";
  import pricing3 from "../../../img/pricing3.jpg";
  
  const Pricing = ()=> {
    return (
      <MDBContainer fluid className="my-5">
        <MDBRow>
          <MDBCol md="4" className="mb-4 mb-lg-0">
            <MDBCard className="text-black">
              <MDBCardImage
                src="pricing2.jpg"
                position="top"
                alt="iPhone"
              />
              <MDBCardBody>
                <div className="text-center mt-1">
                  <MDBCardTitle className="h4">Plan Básico</MDBCardTitle>
                  <h6 className="text-primary mb-1 pb-3">Solución Individual</h6>
                </div>
                <div className="text-center">
                  <div
                    className="p-3 mx-n3 mb-4"
                    style={{ backgroundColor: "#eff1f2" }}
                  >
                    <h5 className="mb-0">Precio: 49€ al mes</h5>
                  </div>
  
                  <div className="d-flex flex-column mb-4">
                   
                    <ul className="list-unstyled mb-0">
                      <li aria-hidden="true">—</li>
                      <li>1 cuenta de usuario</li>
                      <li>1 cuenta de correo asociada</li>
                      <li>Acceso completo a la plataforma</li>
                      <li>Respuestas inteligentes en tiempo real</li>
                      <li>Atención al cliente las 24 horas</li>
                      <li aria-hidden="true">—</li>
                    </ul>
                  </div>
                </div>
  
                <div className="d-flex flex-row">
                <a href="#" className="btn btn-primary disabled" tabindex="-1" role="button" aria-disabled="true">Contacto</a>

                  
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          
          <MDBCol md="4" className="mb-4 mb-lg-0">
          <MDBCard className="text-black">
              <MDBCardImage
                src="pricing1.jpg"
                position="top"
                alt="iPhone"
              />
              <MDBCardBody>
                <div className="text-center mt-1">
                  <MDBCardTitle className="h4">Plan Empresarial</MDBCardTitle>
                  <h6 className="text-primary mb-1 pb-3">Colaboración Eficiente</h6>
                </div>
                <div className="text-center">
                  <div
                    className="p-3 mx-n3 mb-4"
                    style={{ backgroundColor: "#eff1f2" }}
                  >
                    <h5 className="mb-0">Precio: 199€ al mes</h5>
                  </div>
  
                  <div className="d-flex flex-column mb-4">
                   
                    <ul className="list-unstyled mb-0">
                      <li aria-hidden="true">—</li>
                      <li>Hasta 3 cuentas de usuario</li>
                      <li>3 cuentas de correo asociadas (una por usuario)</li>
                      <li>Acceso jerárquico personalizado</li>
                      <li>Integración de inteligencia artificial</li>
                      <li>Respuestas instantáneas</li>
                      <li>Atención al cliente las 24 horas</li>
                      <li aria-hidden="true">—</li>
                    </ul>
                  </div>
                </div>
  
                <div className="d-flex flex-row">
                <a href="#" className="btn btn-primary disabled" tabindex="-1" role="button" aria-disabled="true">Primary link</a>
   
                  
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4" className="mb-4 mb-lg-0">
          <MDBCard className="text-black">
              <MDBCardImage
                src="pricing3.jpg"
                position="top"
                alt="iPhone"
              />
              <MDBCardBody>
                <div className="text-center mt-1">
                  <MDBCardTitle className="h4">Plan Personalizado</MDBCardTitle>
                  <h6 className="text-primary mb-1 pb-3">Escala con tu Éxito</h6>
                </div>
                <div className="text-center">
                  <div
                    className="p-3 mx-n3 mb-4"
                    style={{ backgroundColor: "#eff1f2" }}
                  >
                    <h5 className="mb-0">¡Consulta precios!</h5>
                  </div>
  
                  <div className="d-flex flex-column mb-4">
                   
                    <ul className="list-unstyled mb-0">
                      <li aria-hidden="true">—</li>
                      <li>Múltiples cuentas de usuario y correo</li>
                      <li>Acceso flexible y adaptado a tus necesidades</li>
                      <li>Funciones avanzadas de gestión</li>
                      <li>Integración completa de IA</li>
                      <li>Soluciones personalizadas</li>
                      <li>Atención al cliente dedicada</li>
                      <li aria-hidden="true">—</li>
                    </ul>
                  </div>
                </div>
  
                <div className="d-flex flex-row">
                <div className= "enlacecontacto">
           
                <a href="#" className="btn btn-primary disabled" tabindex="-1" role="button" aria-disabled="true">Primary link</a>
      
       
          </div>
                  
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }; 


 export default Pricing;
