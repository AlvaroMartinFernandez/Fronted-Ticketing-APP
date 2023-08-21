import React, { useState, useEffect, useRef, useContext } from "react";
import { BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { AiOutlineCheckCircle } from "react-icons/ai";
import styles from "./floatingMenu.css";



const FloatingMenu = ({
  store,
  isDashboardPage,
  handleScrollTo,
  actions,
  location,
}) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); // Referencia al menú desplegable

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsMenuVisible(true);
    } else {
      setIsMenuVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Función para cerrar el menú desplegable
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`${styles.floatingMenu} ${isMenuVisible ? styles.show : ""}`}
    >
      {/* Icono de menú */}
      <div className={styles["menu-icon"]} onClick={toggleMenu}>
        <BiMenu />
      </div>

      {/* Menú desplegable */}
      {isMenuOpen && (
        <nav className={styles.navbar}>
          {!store.isLoggedIn || !isDashboardPage ? (
            <ul className={styles["nav-links"]}>
              <li>
                <span
                  onClick={() => handleScrollTo("fortalezas")}
                  className={styles["nav-link"]}
                >
                  Empresa
                </span>
              </li>
              <li>
                <span
                  onClick={() => handleScrollTo("testimonials")}
                  className={styles["nav-link"]}
                >
                  Testimonios
                </span>
              </li>
              <li>
                <span
                  onClick={() => handleScrollTo("pricing")}
                  className={styles["nav-link"]}
                >
                  Precios
                </span>
              </li>
              <li>
                <span
                  onClick={() => handleScrollTo("features")}
                  className={styles["nav-link"]}
                >
                  Servicios
                </span>
              </li>
            </ul>
          ) : null}
          {store.isLoggedIn ? (
            // Mostrar elementos para usuarios autenticados
            <>
              <div className={styles["auth-buttons"]}>
                <span className={styles["user-name"]}> {store.name}</span>
                <button
                  onClick={() => actions.logout()}
                  className={`${styles["button"]} ${styles["logout-button"]}`}
                >
                  Cerrar sesión
                </button>
              </div>
            </>
          ) : (
            // Mostrar elementos para usuarios no autenticados
            <>
              <div className={styles["auth-buttons"]}>
                <Link to="/login" className={styles["login-button"]}>
                  <BiUser size={20} className={styles.userIcon} />
                  Iniciar sesión
                </Link>
              </div>
              <div className={styles["auth-buttons"]}>
                <Link
                  to="/signup"
                  className={`${styles["signup-button"]} ${styles["button"]}`}
                >
                  Registrarse{" "}
                  <AiOutlineCheckCircle
                    size={20}
                    className={styles.checkIcon}
                  />
                </Link>
              </div>
            </>
          )}
        </nav>
      )}
    </div>
  );
};

export default FloatingMenu;
