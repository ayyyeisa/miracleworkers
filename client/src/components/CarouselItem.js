/// <summary>
/// Author: Isa Luluquisin
/// Description: Script formats the different parts of each carousel item (photo and text)
///</summary> 

import React from "react";
import {Link} from 'react-router-dom'

export default function CarouselItem({ imgUrl, imgTitle, carouselText, productLink }) {
  return (
    <div className="carouselCard">
      <Link to= {productLink}>
        <img src={imgUrl} alt={imgTitle}></img>
      </Link>
      <div className="carouselText">
        {carouselText}
      </div>
    </div>
  );
}