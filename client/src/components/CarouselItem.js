import React from "react";

export default function CarouselItem({ imgUrl, imgTitle }) {
  return (
    <div className="carouselCard">
      <img src={imgUrl} alt={imgTitle}></img>
    </div>
  );
}