import React from "react";

const CarouselText = (props) => {
  return (
    <div>
      <div className="CarouselTextbox">
        <h2 className="descriptionHeader">> Conocé RBD por dentro</h2>
        <h1 className="descriptionTitle">{props.descriptionTitle}</h1>
        <p className="descriptionBody">{props.descriptionBody}</p>
      </div>
    </div>
  );
};

export default CarouselText;
