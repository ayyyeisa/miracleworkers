import React from "react";
import "../styles/Carousel.css";
import { cardDetails } from "./CarouselCardDet";
import CarouselItem from "./CarouselItem";

function AutoplayCarousel() {
  return (
    <div className="carousel">
      <div className="carouselTrack">
        {Object.keys(cardDetails).map((detailKey) => {
          return (
            <CarouselItem
              imgUrl={cardDetails[detailKey].imgUrl}
              imgTitle={cardDetails[detailKey].title}
              carouselText={cardDetails[detailKey].carouselText}
            ></CarouselItem>
          );
        })}
        {Object.keys(cardDetails).map((detailKey) => {
          return (
            <CarouselItem
              imgUrl={cardDetails[detailKey].imgUrl}
              imgTitle={cardDetails[detailKey].title}
              carouselText={cardDetails[detailKey].carouselText}
            ></CarouselItem>
          );
        })}
        {Object.keys(cardDetails).map((detailKey) => {
          return (
            <CarouselItem
              imgUrl={cardDetails[detailKey].imgUrl}
              imgTitle={cardDetails[detailKey].title}
              carouselText={cardDetails[detailKey].carouselText}
            ></CarouselItem>
          );
        })}
        {Object.keys(cardDetails).map((detailKey) => {
          return (
            <CarouselItem
              imgUrl={cardDetails[detailKey].imgUrl}
              imgTitle={cardDetails[detailKey].title}
              carouselText={cardDetails[detailKey].carouselText}
            ></CarouselItem>
          );
        })}
      </div>
    </div>
  );
}

export default AutoplayCarousel;