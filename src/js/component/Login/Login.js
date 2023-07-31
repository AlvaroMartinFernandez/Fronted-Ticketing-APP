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
    <div className={`container mt-2 ${styles["login-container"]}`}>
      <div className="row justify-content-center">
        <div className="col-xl-8 col-md-10 col-sm-12">
          <div className={`card-group mb-0 shadow p-3 mb-5 bg-body-tertiary rounded ${styles.loginForm}`}>
            <div className="card p-2 ">
             
              <form onSubmit={handleLogin}>
                <div className="card-body">
                  <h1 className={`text-center mb-4 ${styles.loginTitle}`}>Iniciar sesión</h1>
                  <div className="input-group mb-3">
                    <span className="input-group-text bg-white py-2 border border-radius-0">
                      <i className="fa fa-user"></i>
                    </span>
                    <input
                      type="email"
                      className={`form-control ${styles.loginInput}`}
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                  </div>
                  <div className="input-group mb-4">
                    <span className="input-group-text bg-white py-2 border border-radius-0">
                      <i className="fa fa-lock"></i>
                    </span>
                    <input
                      type="password"
                      className={`form-control ${styles.loginInput}`}
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
                    <div className="alert alert-danger" role="alert">
                      {errorMessage}
                    </div>
                  )}
                  <div className="d-flex justify-content-center">
                    <button type="submit" className={`btn btn-primary px-3 ${styles.loginButton}`}>
                      Ingresar
                    </button>
                  </div>
                  {showForgotPassword && (
                    <div className="d-flex">
                      <Link to="/PasswordRecoveryForm">
                        <span>Olvidé mi contraseña</span>
                      </Link>
                    </div>
                  )}
                </div>
              </form>
            </div>
            
              
                
              
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;