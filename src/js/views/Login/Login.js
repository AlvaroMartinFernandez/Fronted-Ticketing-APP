import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext.js";
import { Link, useNavigate } from "react-router-dom";
import styles from './login.module.css';

const Login = () => {
  const { actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (email && password) {
      try {
        const loginSuccess = await actions.login(email, password);
        if (loginSuccess) {
          setEmail("");
          setPassword("");
          navigate("/dashboard");
        } else {
          setPassword("");
          setErrorMessage("Usuario o contraseña incorrecta");
          setShowForgotPassword(true);
        }
      } catch (error) {
        console.error("Error al iniciar sesión:", error);
        setErrorMessage("Error al iniciar sesión. Por favor, inténtalo nuevamente más tarde.");
      }
    }
  }

  return (
    <div className={styles["login-container"]}>
      <div className={styles["login-form"]}>
        <form onSubmit={handleLogin}>
          <div className={styles["login-card"]}>
            <h1 className={styles["login-title"]}>Iniciar sesión</h1>
            <div className={styles["input-group"]}>
              <span className={styles["input-group-text"]}>
                <i className="fa fa-user"></i>
              </span>
              <input
                type="email"
                className={styles["form-control"]}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className={styles["input-group"]}>
              <span className={styles["input-group-text"]}>
                <i className="fa fa-lock"></i>
              </span>
              <input
                type="password"
                className={styles["form-control"]}
                placeholder="Contraseña"
                inputMode="numeric"
                minLength="8"
                maxLength="12"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
            </div>
            {errorMessage && (
              <div className={styles["alert-danger"]} role="alert">
                {errorMessage}
              </div>
            )}
            <div className={styles["login-button"]}>
              <button type="submit" className={styles["btn-primary"]}>
                Ingresar
              </button>
            </div>
            {showForgotPassword && (
              <div className={styles["forgot-password-link"]}>
                <Link to="/PasswordRecoveryForm">
                  <span>Olvidé mi contraseña</span>
                </Link>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
