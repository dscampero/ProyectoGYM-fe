import React from "react";
import HomeNavbar from "../components/HomeNavbar";
import Footer from "../components/Footer";
import Bolt from "../assets/bolt.svg";
import Piggy from "../assets/piggy-bank.png";
import Wink from "../assets/wink.png";
import TreadMill from "../assets/treadmill.png";
import Kettlebell from "../assets/kettlebell.png";
import { Button } from "react-bootstrap";
import InstitutionalLogos from "../components/InstitutionalLogos";

const InstitutionalScreen = () => {
  return (
    <div>
      <HomeNavbar />
      <div
        className="container-fluid py-5 firstContainer"
        style={{ backgroundColor: "#10c3d9" }}
      >
        <p className="institutionalHeader1">¿Por qué elegir RBD GYM?</p>
        <img className="boltIcon" src={Bolt} alt="boltIcons"></img>
      </div>
      <div className="container-fluid orangeSection">
        <div className="institutionalHeader2">
          <p>
            Fitness
            <br />
            para la gente
            <br />a un precio
            <br />
            para la gente
          </p>
          <Button className="institutionalButton">¡ASOCIATE YA!</Button>
        </div>
      </div>
      <div
        className="container-fluid py-5"
        style={{ backgroundColor: "#10c3d9" }}
      >
        <div className="logosContainer">
          <InstitutionalLogos logo={TreadMill} footerText="El mejor equipamiento" />
          <InstitutionalLogos logo={Kettlebell} footerText="Clases todos los días" />
          <InstitutionalLogos logo={Wink} footerText="Buena onda y energía" />
          <InstitutionalLogos logo={Piggy} footerText="Cuidamos tu bolsillo" />
        </div>
      </div>
      <div className="container-fluid orangeSection2">
        <div className="institutionalHeader3">
          <p>
            Modo RBD = 
            <br />
            buena onda +
            <br />energía +
            <br />
            color
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default InstitutionalScreen;
