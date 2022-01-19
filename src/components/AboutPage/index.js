import React, { useState } from "react";
// COMPONENTS
import { Row, Col, Carousel } from "react-bootstrap";
import {
  AboutFirstSection,
  CarouselImage,
  AboutHeader,
  MiamiText,
  AboutHeaderContainer,
  WhoAreWeContainer,
  ParallaxImg,
  ParallaxHeader,
  WhoAreWeContainerFlex,
} from "./design";

// IMAGES
import splash1 from "../../imgs/splash/11.jpg";
import splash2 from "../../imgs/splash/6.jpg";
import splash3 from "../../imgs/splash/14.jpg";

import roosterImage from "../../imgs/gif/loading.gif";
import roosterSplash from "../../imgs/splash/10.png";

// SCRIPT
import "./script";

// CSS
 
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
          <br /> <span  >STRIAGHT TO YOU</span>
          <br /> <span  >FROM <span style={{ fontStyle: "italic" }}>US</span></span>
          <br />
        </AboutHeader>
      </AboutHeaderContainer>

      <WhoAreWeContainerFlex>

        <Row>

          <Col>
            <Row>
              <img src={roosterImage} style={{ width: "490px", height: "525px", paddingLeft: "40px", backgroundColor:"green" }}></img>
            </Row>
          </Col>

          <Col>
            <Row>
              <h1>ABOUT US</h1>
            </Row>
            <Row>
              <p>Hello this is text</p>
            </Row>
          </Col>
        </Row>

      </WhoAreWeContainerFlex>

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
 






    </>
  );
}

export default AboutPage;
