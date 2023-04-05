import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
// import AnimeList from "./AnimeList";
import {  Carousel } from "react-bootstrap";
import "../App.css";

function Slider() {
  return (
    <>
    <div className="hero-container">
    <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images4.alphacoders.com/126/126438.png"
            alt="First slide"
          />
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.alphacoders.com/705/705086.png"
            alt="Second slide"
          />

          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images3.alphacoders.com/654/654247.jpg"
            alt="Third slide"
          />

          
        </Carousel.Item>
      </Carousel>
     
    </div>
    <div>
      
    </div></>
  );
}

export default Slider;