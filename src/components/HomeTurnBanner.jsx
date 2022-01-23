import React from "react";
import { Button } from "react-bootstrap";

const HomeTurnBanner = () => {
  return (

    <div className="turnContainer container-fluid">
      <div className="row justify-content-center">
        <div className=" textContainer text-center">
          <p
            className="turnTitle"
            >
            ¡SIGAMOS ENTRENANDO!
          </p>
          <p
            className="turnSubtitle"
            >
            Fitness como la gente, para toda la gente.
          </p>
      <Button className='turnButton'>SACAR TURNO</Button>
        </div>
      </div>
    </div>
  );
};

export default HomeTurnBanner;
