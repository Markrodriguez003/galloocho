// import '../MainHeader/MainHeader.css'
import { useState } from "react";
import styled, { css } from "styled-components";


// REACT-FBER-THREE import
import ThreeD from "../ThreeD/index"

// CSS

import { Button, Container, Carousel, CarouselItem } from "react-bootstrap";
// FONTS

// IMAGES
import rosterLogo from "../../imgs/logo/roosterE.png";
import heroTextureBG from "../../imgs/textures/TextureA.jpg";
import rooster1 from "../../imgs/product/sculptures/A.png";

// CSS



// FLEX BOX THAT HOLDS TEXT CONTAINER + ROOSTER IMAGE
const HeroFlex = styled('div')`
display:inline-flex;
position: relative;
flex-direction: row;
align-content: center;
align-items: center;
/* background-color: limegreen; */
padding-top: 45px;
top: 300px;
left: 350px;
 
`
const HeroImgContainer = styled('div')`
/* background-color:tomato; */
/* margin-bottom: 600px; */
/* width: 450px;
height: 500px; */
 

`
// FLEX BOX CONTAINER THAT HOLDS ALL INDIVIDUAL HERO TEXT CONTAINER
const HeroTextContainer = styled('div')`
display:inline-flex;
position: relative;
flex-direction: column;
align-content: center;
align-items: center;
/* background-color: pink; */
 

`
// INDIVIDUAL HERO TEXT CONTAINER 
const HeroText = styled('span')`
display:inline;
position: relative;
background-color: #1e1e1e;
color: white;
/* width: 20vw;
height: 25vh; */
font-size: 42px;
font-family: "heroFont";
 

 
// ** STYLING FOR EACH INDIVIDUAL HERO SPLASH TEXT CONTAINER
${props =>
    props.first &&
    css`
      /* background: palevioletred; */
      /* transform: rotateZ(4deg); */
      border-radius: 5%;
      /* margin: 30px 0px 30px -90px; */
    `};

${props =>
    props.second &&
    css`
      /* background: palevioletred; */
      /* transform: rotateZ(4deg); */
      border-radius: 5%;
      margin: 30px 0px 30px -90px;
    `};
 

${props =>
    props.three &&
    css`
      /* background: palevioletred; */
      /* transform: rotateZ(-7deg); */
      border-radius: 5%;
      margin: 30px 0px 30px 125px;
    `};
 
 
`
// ENTIRE HERO SPLASH PAGE CONTAINER (SPLATTER PAINT GRAPHIC)
const HeroContainer = styled('div')`
display: block;
position: relative;
  width: 100%;
  height: 100vh;
  background-image: url(${heroTextureBG});
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

      {/* <HeroContainer fluid> */}
      <HeroContainer >


        {/* <ThreeD /> */}

        <HeroFlex>
          <HeroTextContainer>
            <HeroText first>Custom-Made</HeroText>
            <HeroText second>Limited-Edition</HeroText>
            <HeroText three>Artist Painted</HeroText>
            <HeroText>Own a Unique Piece of Miami</HeroText>
          </HeroTextContainer>

          <div>  <ThreeD /></div>
        </HeroFlex>

      </HeroContainer>
    </>
  );
}

export default Hero;

/* CAROUSEL


// COMPONENT FUNCTION
const CarouselContainer = styled(Container)`
  padding-top: 180px;
  padding-left: auto;
  padding-right: auto;
  text-align: center;
`;

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


