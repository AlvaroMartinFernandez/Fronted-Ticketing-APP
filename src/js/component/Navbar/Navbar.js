import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BiRocket, BiUser } from 'react-icons/bi';
import styles from './navbar.module.css';
import { AiOutlineRobot, AiOutlineCheckCircle } from 'react-icons/ai';
import { Context } from '../../store/appContext';
import logo2 from "../../../img/logo2.png";

const Navbar = () => {
  const { store, actions } = useContext(Context);
  const location = useLocation();

 const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

const isDashboardPage = location.pathname === '/dashboard';

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">
          <img src={logo2} alt="Logo" className={styles.icon} />
        </Link>
      </div>
      {!store.isLoggedIn || !isDashboardPage ? ( 
        <ul className={styles['nav-links']}>
            <li>
            <span onClick={() => handleScrollTo('fortalezas')} className={styles['nav-link']}>
              Empresa
            </span>
          </li>
          <li>
            <span onClick={() => handleScrollTo('testimonials')} className={styles['nav-link']}>
              Testimonios
            </span>
          </li>
          <li>
            <span onClick={() => handleScrollTo('pricing')} className={styles['nav-link']}>
              Precios
            </span>
          </li>
        
          <li>
            <span onClick={() => handleScrollTo('features')} className={styles['nav-link']}>
              Servicios
            </span>
          </li>
          
        </ul>
      ) : null}
      {store.isLoggedIn ? (
        // Mostrar elementos para usuarios autenticados
        <>
          <div className={styles['auth-buttons']}>
            <span className={styles['user-name']}>  {store.name}</span>
            <button onClick={() => actions.logout()} className={`${styles['button']} ${styles['logout-button']}`}>
              Cerrar sesión
            </button>
          </div>
        </>
      ) : (
        // Mostrar elementos para usuarios no autenticados
        <>
          <div className={styles['auth-buttons']}>
            <Link to="/login" className={styles['login-button']}>
              <BiUser size={20} className={styles.userIcon} />
              Iniciar sesión
            </Link>
          </div>
          <div className={styles['auth-buttons']}>
            <Link to="/signup" className={`${styles['signup-button']} ${styles['button']}`}>
              Registrarse  <AiOutlineCheckCircle size={20} className={styles.checkIcon} />
            </Link>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;



// import React, { useContext } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { BiRocket, BiUser } from 'react-icons/bi';
// import styles from './navbar.module.css';
// import { AiOutlineRobot, AiOutlineCheckCircle } from 'react-icons/ai';
// import { Context } from '../../store/appContext';
// import logo2 from "../../../img/logo2.png";

// const Navbar = () => {
//   const { store, actions } = useContext(Context);
//   const location = useLocation();

//  const handleScrollTo = (id) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

// const isDashboardPage = location.pathname === '/dashboard';

//   return (
//     <nav className={styles.navbar}>
//       <div className={styles.logo}>
//         <Link to="/">
//           <img src={logo2} alt="Logo" className={styles.icon} />
//         </Link>
//       </div>
//       {!store.isLoggedIn || !isDashboardPage ? ( 
//         <ul className={styles['nav-links']}>
//             <li>
//             <span onClick={() => handleScrollTo('fortalezas')} className={styles['nav-link']}>
//               Empresa
//             </span>
//           </li>
//           <li>
//             <span onClick={() => handleScrollTo('testimonials')} className={styles['nav-link']}>
//               Testimonios
//             </span>
//           </li>
//           <li>
//             <span onClick={() => handleScrollTo('pricing')} className={styles['nav-link']}>
//               Precios
//             </span>
//           </li>
        
//           <li>
//             <span onClick={() => handleScrollTo('features')} className={styles['nav-link']}>
//               Servicios
//             </span>
//           </li>
          
//         </ul>
//       ) : null}
//       {store.isLoggedIn ? (
//         // Mostrar elementos para usuarios autenticados
//         <>
//           <div className={styles['auth-buttons']}>
//             <span className={styles['user-name']}>  {store.name}</span>
//             <button onClick={() => actions.logout()} className={`${styles['button']} ${styles['logout-button']}`}>
//               Cerrar sesión
//             </button>
//           </div>
//         </>
//       ) : (
//         // Mostrar elementos para usuarios no autenticados
//         <>
//           <div className={styles['auth-buttons']}>
//             <Link to="/login" className={styles['login-button']}>
//               <BiUser size={20} className={styles.userIcon} />
//               Iniciar sesión
//             </Link>
//           </div>
//           <div className={styles['auth-buttons']}>
//             <Link to="/signup" className={`${styles['signup-button']} ${styles['button']}`}>
//               Registrarse <AiOutlineCheckCircle size={20} className={styles.checkIcon} />
//             </Link>
//           </div>
//         </>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
