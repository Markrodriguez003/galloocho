import React, { useState } from "react";
// COMPONENTS
import { Carousel } from "react-bootstrap";
import {
  AboutFirstSection,
  CarouselImage,
  AboutHeader,
  MiamiText,
  AboutHeaderContainer,
  WhoAreWeContainer,
  ParallaxImg,
  ParallaxHeader
} from "./design";

// IMAGES
import splash1 from "../../imgs/splash/11.jpg";
import splash2 from "../../imgs/splash/6.jpg";
import splash3 from "../../imgs/splash/14.jpg";
import roosterImage from "../../imgs/misc/black.png";

// CSS
import 'animate.css';
/* import "./styles.css"; */

function AboutPage() {
  return (
    <>
      <AboutFirstSection>
        <Carousel controls={false} indicators={false} fade={true}>
          <Carousel.Item>
            <CarouselImage
              className="d-block w-100"
              src={splash1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <CarouselImage
              className="d-block w-100"
              src={splash2}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <CarouselImage
              className="d-block w-100"
              src={splash3}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </AboutFirstSection>
      <AboutHeaderContainer>
        <AboutHeader>
          <MiamiText> Miami </MiamiText>
          <br /> <span className="animate__animated animate__bounce">STRIAGHT TO YOU</span>
          <br /> <span className="animate__animated animate__bounce">FROM <span style={{ fontStyle: "italic" }}>US</span></span>
          <br />
        </AboutHeader>

      </AboutHeaderContainer>

      <WhoAreWeContainer>

        <h1> WHO ARE WE?</h1>
        <p>Gallo Ocho is part of an art movement called SMITHEREENS &trade;. <br></br>
          We are a Miami based art collective that offers unique, rooster sculptures for grabs. <br></br>
          Each rooster sculpture will be individually painted, batched with a serial number and certificate of
          authenticity.  <br />We will be expanding our art offerings in the near future so stay tuned and subscribe <br />
          for more news!
        </p>
        <img src={roosterImage} style={{ width: "240px", height: "325px", paddingLeft: "40px" }}></img>

      </WhoAreWeContainer>


      <ParallaxImg>
        <ParallaxHeader>ART FROM THE STREETS & BEYOND
          <p>Gallo Ocho is part of an art movement called SMITHEREENS &trade;. <br></br>
            We are a Miami based art collective that offers unique, rooster sculptures for grabs. <br></br>
            Each rooster sculpture will be individually painted, batched with a serial number and certificate of
            authenticity.  <br />We will be expanding our art offerings in the near future so stay tuned and subscribe <br />
            for more news!
          </p>

        </ParallaxHeader>

      </ParallaxImg>


      <WhoAreWeContainer>

        <h1> Our CURRENT & FUTURE PROJECTS</h1>
        <p>Gallo Ocho is part of an art movement called SMITHEREENS &trade;. <br></br>
          We are a Miami based art collective that offers unique, rooster sculptures for grabs. <br></br>
          Each rooster sculpture will be individually painted, batched with a serial number and certificate of
          authenticity.  <br />We will be expanding our art offerings in the near future so stay tuned and subscribe <br />
          for more news!
        </p>
        <img src={roosterImage} style={{ width: "240px", height: "325px", paddingLeft: "40px" }}></img>

      </WhoAreWeContainer>


    </>
  );
}

export default AboutPage;
