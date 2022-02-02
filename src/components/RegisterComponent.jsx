import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/pngLogin/biceps.svg';
const RegisterComponent = () => {
  return <>
  
  <div id="formBody">
    <div className="container h-100">
      <div className="d-flex justify-content-center h-100">
        <div className="userLoginCardRegister">
          <div className="d-flex justify-content-center">
            <div className="loginLogoContainerRegister">
              <img src={logo} className="loginLogoRegister" alt="Logo" />
            </div>
          </div>
          <div className="d-flex justify-content-center formContainerRegister">
            <form>
              <h4 className="mt-0" id="registerFormTitle" name="registerFormTitle">
                COMPLETA PARA REGISTRARSE
              </h4>
             
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
                  placeholder="Nombre y Apellido"
                  required
                  minLength="8"
                  maxLength="12"
                  pattern="[A-Za-z0-9]+"
                />
              </div>
              <div className="contenedor ">
           
              <div className="input-group mb-3">
                <div className="input-group-append">
                  <span className="input-group-text"
                    ><i className="fas fa-user"></i
                  ></span>
                </div>
                <input
                  className="form-control input_user"
                  type="date" id="start" name="trip-start"
                  min="1932-01-01" max="2007-01-01"
                />
              </div>
                            <div className="input-group mb-3">
                <div className="input-group-append">
                  <span className="input-group-text"
                    ><i className="fas fa-user"></i
                  ></span>
                </div>
                <input
                  type="tel"
                  className="form-control input_user"
                  placeholder="Tel ej: 3813046960"
                  required

                  
                />
              </div>
              <div className="input-group mb-3">
                <div className="input-group-append">
                  <span className="input-group-text"
                    ><i className="fas fa-user"></i
                  ></span>
                </div>
                <input
                  type="text"
                  id="Domicilio"
                  name="Domicilio"
                  className="form-control input_user"
                  placeholder="Domicilio"
                  required
                  minLength="8"
                  maxLength="12"
                  pattern="[A-Za-z0-9]+"
                />
              </div>
              <div className="input-group mb-3">
                <div className="input-group-append">
                  <span className="input-group-text"
                    ><i className="fas fa-user"></i
                  ></span>
                </div>
                <input
                  type="text"
                  id="Localidad"
                  name="Localidad"
                  className="form-control input_user"
                  placeholder="Localidad"
                  required
                  maxLength="25"
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
              <div className="input-group mb-2">
                <div className="input-group-append">
                  <span className="input-group-text">
                    <i className="fas fa-key"></i>
                  </span>
                </div>
                <input
                  type="password"
                  id="password2"
                  name="password"
                  className="form-control input_pass"
                  placeholder="Repite contraseña"
                  required
				          minLength="8"
                  maxLength="12"
                  pattern="[A-Za-z0-9]+"
                />
              </div>
              </div>
              <div className="form-group">
              </div>
              <div className="d-flex justify-content-center mt-3 loginContainerRegister">
                <Button
                  type="submit"
                  id="loginButton"
                  name="loginButton"
                  // onClick="login()"
                >
                  <Link to="/register">Registrarse</Link>
                </Button>
              </div>
            </form>
          </div>
          <div className="mt-0">
            <div className="d-flex justify-content-center links">
              ¿Ya tienes cuenta?
              
            </div>
            <div className="d-flex justify-content-center links">
             <Link to="/login"> Inicia sesión</Link>
            </div>
            <div className="d-flex justify-content-center links">
              <Link to="/"  className="ml-2"
                id="backToHome"
                name="backToHome">
               VOLVER A INICIO
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>;
};

export default RegisterComponent;
