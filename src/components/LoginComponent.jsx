import React from 'react';
import { Button } from 'react-bootstrap';
import logo from '../assets/pngLogin/biceps.svg'


const LoginComponent = () => {
  return (
    <div id="formBody">
    <div className="container h-100">
      <div className="d-flex justify-content-center h-100">
        <div className="userLoginCard">
          <div className="d-flex justify-content-center">
            <div className="loginLogoContainer">
              <img src={logo} className="loginLogo" alt="Logo" />
            </div>
          </div>
          <div className="d-flex justify-content-center formContainer">
            <form>
              <h3 className="mt-0" id="registerFormTitle" name="registerFormTitle">
                COMPLETA PARA INICIAR
              </h3>
              <div className="input-group mb-3">
                <div className="input-group-append">
                  <span className="input-group-text"
                    ><i className="fas fa-user"></i
                  ></span>
                </div>
                <input
                  type="text"
                  id="userName"
                  name="userName"
                  className="form-control input_user"
                  placeholder="Nombre de Usuario"
                  required
                  minLength="8"
                  maxLength="12"
                  pattern="[A-Za-z0-9]+"
                />
              </div>
              <div className="input-group mb-2">
                <div className="input-group-append">
                  <span className="input-group-text">
                    <i className="fas fa-key"></i>
                  </span>
                </div>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control input_pass"
                  placeholder="Contraseña"
                  required
				          minLength="8"
                  maxLength="12"
                  pattern="[A-Za-z0-9]+"
                />
              </div>
              <div className="form-group">

              </div>
              <div className="d-flex justify-content-center mt-3 loginContainer">
                <Button
                  type="submit"
                  id="loginButton"
                  name="loginButton"
                  // onClick="login()"
                >
                  <a>INGRESAR</a>
                </Button>
              </div>
            </form>
          </div>

          <div className="mt-0">
            <div className="d-flex justify-content-center links">
              ¿No tienes cuenta?
              <a href="../register/register.html" className="ml-2">Regístrate</a>
            </div>
            <div className="d-flex justify-content-center links">
              <a href="#">¿Olvidaste tu contraseña?</a>
            </div>
            <div className="d-flex justify-content-center links">
              <a
                href=""
                className="ml-2"
                id="backToHome"
                name="backToHome"
                >VOLVER A INICIO</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)};

export default LoginComponent;
