// import '../MainHeader/MainHeader.css'
import { useState } from "react";
import styled from "styled-components";


// REACT-FBER-THREE import
 import ShowRooster from "../ThreeD"
 
// CSS

import { Button, Container, Carousel, CarouselItem } from "react-bootstrap";
// FONTS

// IMAGES
import rosterLogo from "../../imgs/logo/roosterE.png";
import heroTextureBG from "../../imgs/textures/TextureA.jpg";
import rooster1 from "../../imgs/product/sculptures/Rooster-1-Large.jpg";

// CSS
const CarouselContainer = styled(Container)`
  padding-top: 180px;
  padding-left: auto;
  padding-right: auto;
  text-align: center;
`;

const SplashBackground = styled("div")`
  background: white;
  width: 48vw;
  height: 100vh;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  /* border: 10px royalblue dotted; */
  outline: 5px dotted white;
  outline-offset: 2px;
`;

const HeroContainer = styled(Container)`
  width: 100%;
  height: 100%;
  background-image: url(${heroTextureBG});
  /* background-color: darkblue; */
  /* background-color: #07204a; */
  background-color: #041b42;
  background-blend-mode: screen;
  background-position: center;
  background-size: cover;
  background-blend-mode: exclusion;
  /* INFO --> https://css-tricks.com/almanac/properties/b/background-blend-mode/ */
`;

const CarouselImg = styled("img")`
  width: 548px;
  height: 625px;
`;

function Hero() {
  return (
    <>
      <HeroContainer fluid>
        <SplashBackground>
        {/* <ShowRooster/> */}
        </SplashBackground>
      </HeroContainer>
    </>
  );
}

export default Hero;

/* CAROUSEL


   {/* <CarouselContainer>
            <Carousel>
              <Carousel.Item>
                <CarouselImg src={rooster1} alt="First slide" />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <CarouselImg src={rooster1} alt="Second slide" />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <CarouselImg src={rooster1} alt="Third slide" />

                <Carousel.Caption>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </CarouselContainer> */
 
 
