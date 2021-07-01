import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Item.css";

//mandatory variable for Carousel
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 0 },
    items: 1,
  },
};

function Item({ data }) {
  return (
    <div className="item">
      <div className="carousel-wrapper">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlaySpeed={1000}
          transitionDuration={500}
          containerClass="carousel-container"
        >
          {data.images.map((image) => (
            <img src={image} alt="" className="carousel-image" />
          ))}
        </Carousel>
      </div>
      <div className="title">
        <p>{data.name}</p>
      </div>
      <div className="address">
        <p>{data.address}</p>
      </div>
    </div>
  );
}

export default Item;
