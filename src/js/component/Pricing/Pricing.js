
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
  
  const Pricing = ()=> {
    return (
      <MDBContainer fluid className="my-5">
        <MDBRow>
          <MDBCol md="4" className="mb-4 mb-lg-0">
            <MDBCard className="text-black">
              <MDBCardImage
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-product-cards/img1.webp"
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
                    <h5 className="mb-0">Precio: 15€ al mes</h5>
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
                  <MDBBtn
                    color="primary"
                    rippleColor="dark"
                    className="flex-fill ms-1"
                  >
                    Learn more
                  </MDBBtn>
                  
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          
          <MDBCol md="4" className="mb-4 mb-lg-0">
          <MDBCard className="text-black">
              <MDBCardImage
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-product-cards/img1.webp"
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
                    <h5 className="mb-0">Precio: 15€ al mes</h5>
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
                  <MDBBtn
                    color="primary"
                    rippleColor="dark"
                    className="flex-fill ms-1"
                  >
                    Learn more
                  </MDBBtn>
                  
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4" className="mb-4 mb-lg-0">
          <MDBCard className="text-black">
              <MDBCardImage
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-product-cards/img1.webp"
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
                    <h5 className="mb-0">Precio: 15€ al mes</h5>
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
                  <MDBBtn
                    color="primary"
                    rippleColor="dark"
                    className="flex-fill ms-1"
                  >
                    Learn more
                  </MDBBtn>
                  
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }; 



//  const Pricing = () => {
//    return (
//      <section id="pricing" className={`${styles.pricing} ${styles.blueBackground}`}>
//        <h2 className={styles['section-title']}>Planes de precios</h2>
//        <div className={styles['pricing-plan']}>
//          <h3 className={styles['plan-title']}>Plan Básico</h3>
//          <p className={styles['plan-description']}>
//            Respuestas automáticas básicas para la gestión de correos de clientes.
//          </p>
//          <p className={styles['plan-benefit']}>
//            Beneficios clave:
//          </p>
//          <ul className={styles['plan-benefits-list']}>
//            <li>Respuestas rápidas y automáticas.</li>
//            <li>Mejora de la eficiencia en la atención al cliente.</li>
//          </ul>
//          <p className={styles['plan-price']}>Precio: $X/mes</p>
//          <button className={styles['plan-button']}>Seleccionar</button>
//        </div>
//        <div className={styles['pricing-plan']}>
//          <h3 className={styles['plan-title']}>Plan Premium</h3>
//          <p className={styles['plan-description']}>
//            Respuestas personalizadas y adaptadas a las necesidades de cada cliente.
//          </p>
//          <p className={styles['plan-benefit']}>
//            Beneficios clave:
//          </p>
//          <ul className={styles['plan-benefits-list']}>
//            <li>Respuestas personalizadas con inteligencia artificial avanzada.</li>
//            <li>Análisis de datos para mejorar la comunicación con los clientes.</li>
//          </ul>
//         <p className={styles['plan-price']}>Precio: $Y/mes</p>
//          <button className={styles['plan-button']}>Seleccionar</button>
//        </div>
//        <div className={`${styles['pricing-plan']} ${styles['business-plan']}`}>
//          <h3 className={`${styles['plan-title']} ${styles['business-plan-title']}`}>Plan Business Ilimitado</h3>
//          <p className={`${styles['plan-description']} ${styles['business-plan-description']}`}>
//            Todas las características del plan Empresarial con uso ilimitado.
//          </p>
//          <p className={`${styles['plan-benefit']} ${styles['business-plan-benefit']}`}>
//            Beneficios clave:
//          </p>
//          <ul className={styles['plan-benefits-list']}>
//            <li>Uso ilimitado de la plataforma para todos tus usuarios y departamentos.</li>
//            <li>Soporte prioritario y atención personalizada.</li>
//          </ul>
//          <p className={`${styles['plan-price']} ${styles['business-plan-price']}`}>Precio: Contáctanos</p>
//          <button className={`${styles['plan-button']} ${styles['business-plan-button']}`}>Seleccionar</button>
//        </div>
//      </section>
//    );
//  };

 export default Pricing;
