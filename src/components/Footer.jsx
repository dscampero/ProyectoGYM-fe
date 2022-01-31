import React from "react";
import Logo from "../assets/FooterLogo2.png";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const Footer = () => {
  return (
    <div>
      <footer
        className="footer font-small blue"
        style={{ backgroundColor: "#2b2b2b" }}
      >
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            <div className="col-md-4 mt-md-0 mt-3">
              <img src={Logo} alt="footerLogo" className="footerLogo"></img>
              <p className="sloganLogo">LA MEJOR MANERA DE ENTRENAR</p>
            </div>
            <hr className="footerDivider" style={{ color: "white" }}></hr>
            <div className="col-md-4 mb-md-0 mb-3 mt-2">
              <h5 className="footerTextHeader">Encuéntranos en:</h5>
              <a className="me-1" href="http://facebook.com">
                <FacebookOutlinedIcon id="footerSocialMedia" />
              </a>
              <a className="me-1" href="http://twitter.com">
                <TwitterIcon id="footerSocialMedia" />
              </a>
              <a className="me-1" href="http://instagram.com">
                <InstagramIcon id="footerSocialMedia" />
              </a>
              <a className="me-1" href="http://youtube.com">
                <YouTubeIcon id="footerSocialMedia" />
              </a>
            </div>
            <hr className="footerDivider" style={{ color: "white" }}></hr>
            <div className="col-md-4 mb-md-0 mt-2" style={{ color: "white" }}>
              <h5 className="footerTextHeader">Comunícate con nosotros</h5>
              <div className="mt-2" style={{textAlign:'center'}}>
                <WhatsAppIcon className="me-2" id="footerSocialMedia"/>
                <a className="footerLink" href="https://walink.co/6fd287">
                  {"¡Click acá para escribirnos!"}
                </a>
              </div>
              <div style={{textAlign:'center'}}>
                <MailOutlineIcon className="me-2" id="footerSocialMedia" />
                <a
                  className="footerLink"
                  href="mailto:rbdtucuman@gmail.com? subject=Quiero saber más de RBD GYM"
                >
                  {"¡Clickeá para enviarnos un mail!"}
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr className="footerDivider" style={{ color: "white" }}></hr>
        <div
          className="footer-copyright text-center"
          style={{ color: "white", paddingLeft: "15px", paddingRight: "15px", paddingBottom:'10px'}}
        >
          {"© 2022 Copyright | RBY GYM | Las Heras 14 - San Miguel de Tucumán"}
        </div>
      </footer>
    </div>
  );
};

export default Footer;
