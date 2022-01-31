import React from "react";
import HomeNavbar from "../components/HomeNavbar";
import Footer from "../components/Footer";
import { Button } from "react-bootstrap";

const AppointmentScreen = () => {
  return (
    <div>
      <HomeNavbar />
      <div className="apoointmentContainer py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-lg-5 mt-2 mb-3 ">
              <p className="apoointmentHeader">¡TU PRIMERA CLASE ES GRATIS!</p>
              <p className="apoointmentSubHeader">
                Completa el siguiente formulario y nos pondremos en contacto
                contigo
              </p>
              <div
                className="coso shadow p-3"
                style={{ borderRadius: "17px" }}
              >
                <div className="form-row">
                  <div className="p-3 left border-right">
                    <label
                      className=" inputText mb-2"
                    >
                      Nombre y apellido
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Ingrese aquí nombre y apellido"
                      maxlength="30"
                      required
                    />
                  </div>
                </div>
                <div className="form-rowm"></div>
                <div className="row p-3">
                  <div className="form-group col-md-6">
                    <label
                      className="inputText mb-2"
                    >
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Por ej: 3815033262"
                      maxlength="10"
                      required
                    />
                  </div>
                  <div
                    className="form-group col-md-6"
                  >
                    <label
                      className="inputText mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="usuario@ejemplo.com"
                      required
                    />
                  </div>
                </div>
                <div className="form-row p-3 position-relative">
                  <label
                    className="inputText mb-2"
                  >
                    Escribenos un mensaje
                  </label>
                  <div className="form-group">
                    <textarea
                      class="form-control"
                      placeholder="Escriba aquí su consulta"
                      rows="3"
                      id="bigInputContact"
                      maxLength="450"
                      required
                    ></textarea>
                  </div>
                  <p
                    style={{
                      color: "yellow",
                      fontStyle: "italic",
                      fontSize: "small",
                      marginTop: "10px",
                    }}
                  >
                    *Campos obligatorios
                  </p>
                  <div className="text-center">
                    <Button className='navbarButton' variant="danger">ENVIAR</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AppointmentScreen;
