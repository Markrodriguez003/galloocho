import React, { useState } from "react";
// COMPONENTS
import { Row, Col, Carousel, Container } from "react-bootstrap";
import {
  AboutFirstSection,
  CarouselImage,
  AboutHeader,
  MiamiText,
  AboutHeaderContainer,
  ParallaxImg,
  ParallaxHeader,
  RotatedH1,
  SocialMediaBar,
  SocialMediaItem
} from "./design";

// ICONS
import {
  BsFacebook,
  BsInstagram,
} from "react-icons/bs";
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
      </Container>













      <div style={{
        color: "white",
        backgroundColor: "rgba(0,0,0,0.92)",
        backgroundImage: "radial-gradient(circle at center center, #444cf7, #e5e5f7), repeating-radial-gradient(circle at center center, #444cf7, #444cf7, 10px, transparent 20px, transparent 10px)",
        backgroundBlendMode: "multiply",
        padding: "40px",
        // border:"solid rgba(255,255,255,1) 10px",
        // borderRadius: "20px"
        // borderBottom:"solid rgba(255,255,255,0.92) 4px",
        // borderTop:"solid rgba(255,255,255,0.92) 4px",
      }}>
        <Container >
          <Row>

            <Col lg={2} xs={6} >

              <RotatedH1 >About The </RotatedH1>
              <RotatedH1 rotatedR>Rooster</RotatedH1>

            </Col>

            <Col lg={2} xs={6}  >
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

                <h1 className="pt-4 font-weight-bold"
                  style={{
                    fontFamily: "aboutFont",
                    textDecoration: "underline",
                    fontWeight:"bold",
                    letterSpacing: "1.2px",
                    // backgroundColor: "rgba(255,255,255,0.065)",
                    borderRadius:"10px",
                    textAlign: "center",
                    textTransform:"uppercase",
                    textShadow: "4px 3px 0 rgba(0,255,255,0.3)"
                  }}>History Of The Cuban Rooster</h1>

                <p
                  style={{
                    fontFamily: "aboutFont",
                    fontWeight:"bold",
                    fontSize: "20px",
                    letterSpacing: "1.1px",
                    padding: "4px",
                    borderRadius:"10px",
                    backgroundColor: "rgba(0,255,255,0.07)",
                    // 1245px change font size to a smaller size

                  }}>The original, a “traditional proud gallo,” was sculpted by the late Tony Lopez,
                  who had a 70-year career between Cuba and Miami.
                  His rooster figures were inspired by his pet rooster Pepe.

                  The fiberglass birds began appearing along Calle Ocho and surrounding streets in 2002
                  as part of "Rooster Walk," a project that aimed to build on efforts to celebrate the
                  neighborhood's culture.

                  The decision on a rooster theme came after neighboring Coral Gables placed huge flamingo
                  statues on its streets, according to Rooster Walk creator, the late artist Pedro Damián.

                  We wanted to share the cuban rooster to anyone! So we decided to reach out to local and international
                  artists to paint their own version of our ceramic roosters. Each rooster sculpture is one of a kind
                  and will not be replicated. 

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
                    <img src={rosterLogo} style={{ width: "24px", height: "32px" }}></img>
                  </SocialMediaItem>
                </SocialMediaBar>
              </Row>

            </Col>
            <Col>

            </Col>
          </Row>

        </Container>

      </div>



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
      </ParallaxImg>
    </>
  );
}

export default AboutPage;
