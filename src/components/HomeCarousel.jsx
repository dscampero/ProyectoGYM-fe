import React from "react";
import Carousel from "react-bootstrap/Carousel";
import CarouselText from "./CarouselText";
import Carousel1 from "../assets/carousel1.png";
import Carousel2 from "../assets/carousel2.png";
import Carousel3 from "../assets/carousel3.png";
import Carousel4 from "../assets/carousel4.png";

const HomeCarousel = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item style={{ zIndex: 20 }}>
          <CarouselText
            descriptionTitle="Sector Funcional"
            descriptionBody="Equipado con la mayor variedad y calidad, en musculación podés entrenar tu fuerza cada vez que quieras con nuestras más de 30 máquinas y 20 estaciones de peso libre. Buscá nuestros planes de entrenamiento para que trabajes en tus objetivos, desafiándote con sus niveles de intensidad y dificultad."
          />
          <div className="carouselPhoto">
            <img className="d-block w-100" src={Carousel1} alt="First slide" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <CarouselText
            descriptionTitle="Sector Cardio"
            descriptionBody="¡Nunca viste tantas cintas juntas! Corré, entrá en calor con una bici, preparate para una carrera con los 75 equipos que tenemos en cada sucursal. Todo lo que necesitás para transpirar con tu mejor playlist."
          />
          <div className="carouselPhoto">
            <img className="d-block w-100" src={Carousel2} alt="Second slide" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <CarouselText
            descriptionTitle="Salones aeróbicos"
            descriptionBody="¿Viste cuando querés desconectar por completo? Cuando entrás al salón ocurre eso. Vení a hacer una de nuestras clases con onda. Bailá en la clase de Ritmos, transpirá con una sesión de Aero Local o funcional, relajá practicando Yoga."
          />
          <div className="carouselPhoto">
            <img className="d-block w-100" src={Carousel3} alt="Third slide" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <CarouselText
            descriptionTitle="Sala de musculación"
            descriptionBody="Equipado con la mayor variedad y calidad, en musculación podés entrenar tu fuerza cada vez que quieras con nuestras más de 30 máquinas y 20 estaciones de peso libre. Buscá nuestros planes de entrenamiento para que trabajes en tus objetivos, desafiándote con sus niveles de intensidad y dificultad."
          />
          <div className="carouselPhoto">
            <img className="d-block w-100" src={Carousel4} alt="Third slide" />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
