import React, { useState } from "react";
// COMPONENTS
import { Row, Col, Carousel, Container } from "react-bootstrap";
import AniButtonWhite from "../AniButtonWhite";
import {
  AboutContainer,
  RotatedH1,
  SocialMediaBar,
  SocialMediaItem,
} from "./design";

// ICONS
import { BsFacebook, BsInstagram } from "react-icons/bs";
// IMAGES
import splash1 from "../../imgs/splash/11.jpg";
import splash2 from "../../imgs/splash/6.jpg";
import splash3 from "../../imgs/splash/14.jpg";

import roosterImage from "../../imgs/gif/loading.gif";
import roosterSplash from "../../imgs/splash/10.png";
import rosterLogo from "../../imgs/logo/RosterLogoAInverted.png";

// SCRIPT
import "./script";

// CSS

/* import "./styles.css"; */

function AboutPage() {
  return (
    <>


      <AboutContainer id="about">
        <Container>
          <Row>
            <Col lg={2} xs={6}>
              <RotatedH1>About The </RotatedH1>
              <RotatedH1 rotatedR>Rooster</RotatedH1>
            </Col>

            <Col lg={2} xs={6}>
              <Row>
                <img
                  style={{
                    maxWidth: "none",
                    width: "320px",
                    height: "480px",
                    backgroundColor: "transparent",
                    padding: "0px",
                    marginLeft: "-70px",

                  }}
                  src={roosterImage}
                ></img>
              </Row>
            </Col>
            <Col lg={8} sm={12} md={12}>
              <Row className="mt-2">
                <h1
                  className="pt-4 font-weight-bold"
                  style={{
                    fontFamily: "menuFont",
                    textDecoration: "none",
                    letterSpacing: "1.2px",
                    // backgroundColor: "rgba(255,255,255,0.065)",
                    borderRadius: "10px",
                    textAlign: "center",
                    textTransform: "uppercase",
                    textShadow: "4px 3px 0 rgba(0,0,0,0.9)",
                    fontSize: "55px"
                  }}
                >
                  History Of The Cuban Rooster
                </h1>

                <p
                  style={{
                    // fontFamily: "aboutFont",
                    fontFamily: "menuFont",

            
                fontSize: "22px",
                letterSpacing: "1.1px",
                padding: "4px",
                borderRadius: "10px",
                backgroundColor: "transparent",
                    // 1245px change font size to a smaller size
                  }}
                >
                Gallo Ocho is the “rehatching” of the famed Miami art project
                that gave us the Roosters of Calle Ocho, also known as
                RoosterWalk. It is a platform made to highlight and exhibit
                the tremendous artistry in Miami, through exclusive original
                art handcrafted exclusively by resident contemporary artists
                and creatives, using the city’s iconic mascot as a canvas.
                Every Gallo Ocho artwork is one of a kind and will not be
                replicated.
              </p>
              <SocialMediaBar>
                <SocialMediaItem href="#">
                  <BsFacebook />
                </SocialMediaItem>
                <SocialMediaItem href="#">
                  {" "}
                  <BsInstagram />
                </SocialMediaItem>
                <SocialMediaItem href="https://calleochonews.com/whats-up-with-the-calle-ocho-roosters/">
                  {" "}
                  <img
                    src={rosterLogo}
                    style={{ width: "24px", height: "32px" }}
                  ></img>
                </SocialMediaItem>
              </SocialMediaBar>
              <AniButtonWhite btnTitle="See Our Social Media"/>
          </Row>
        </Col>
      </Row>
 
    </Container>
      </AboutContainer >

      <br />
      <br />
      <br />


    </>
  );
}

export default AboutPage;


// PARRALLAX HERO
{/* 

import {
  AboutFirstSection,
  AboutHeader,
  AboutHeaderContainer,
 
} from "./design";

<ParallaxImg>
        <ParallaxHeader>
          FUTURE CONCEPTS
          <p>
            Gallo Ocho is part of an Miami based art collective called SMITHEREENS &trade;.{" "}
            <br></br>
            We are currently planning on installing art exhibits in the near future.  
            <br></br>
            Each rooster sculpture will be individually painted, batched with a
            serial number and certificate of authenticity. <br />
            We will be expanding our art offerings in the near future so stay
            tuned and subscribe <br />
            for more news!
          </p>
        </ParallaxHeader>
      </ParallaxImg> */}



// SCROLLING - CAROUSEL HERO PAGE

/*
  <Container fluid>
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
            <br /> <span>STRIAGHT TO YOU</span>
            <br />{" "}
            <span>
              FROM <span style={{ fontStyle: "italic" }}>US</span>
            </span>
            <br />
          </AboutHeader>
        </AboutHeaderContainer>
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
            <br /> <span>STRIAGHT TO YOU</span>
            <br />{" "}
            <span>
              FROM <span style={{ fontStyle: "italic" }}>US</span>
            </span>
            <br />
          </AboutHeader>
        </AboutHeaderContainer>
      </Container>
*/