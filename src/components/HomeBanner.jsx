import React from "react";
import { Button } from "react-bootstrap";
import Banner from "../assets/HomeBanner1.png";
import BannerMobile from '../assets/HomeBannerMobile.png'

const HomeBanner = () => {
  return (
    <div>
      <div>
        <div className='bannerfull'>
          <img
            src={Banner}
            alt="bannerHome"
            class="img-fluid"
            style={{ position: "absolute", zIndex: 20 }}
          />
        </div>
        <div className='bannerMobile'>
          <img
            src={BannerMobile}
            alt="bannerHome"
            class="img-fluid"
            style={{ position: "absolute", zIndex: 20}}
          />
        </div>
        <div className="bannerContainer">
            <p className="bannerHeader">¡EMPEZÁ HOY!</p>
            <p className="bannerPrice">$3920*</p>
            <p className="bannerPriceMonth">MENSUAL</p>
            <p className="bannerBenefits">ACCEDÉ A TODOS NUESTROS BENEFICIOS</p>
            <div className="bannerList">
                <ul>
                <li>• Sector cardio</li>
                <li>• Sector musculación</li>
                <li>• Sector Funcional</li>
                <li >• Sector Yoga</li>
                <li>• Sector Estiramiento</li>
                <li>• Sector Sector sauna</li>
            </ul>
                </div>
        <div>
          <Button className="bannerbutton">ASOCIATE YA</Button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
