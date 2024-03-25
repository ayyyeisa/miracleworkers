import React from "react";

export default function CarouselItem({ imgUrl, imgTitle, carouselText }) {
  return (
    <div className="carouselCard">
      <img src={imgUrl} alt={imgTitle}></img>
      <div className="carouselText">
        {carouselText}
      </div>
    </div>
  );
}