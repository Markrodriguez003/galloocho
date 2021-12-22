// import '../MainHeader/MainHeader.css'
import { useState } from "react";
import styled, { css } from "styled-components";


// REACT-FBER-THREE import
import ThreeD from "../ThreeD/index"

// CSS
import { BsCaretRight, BsCaretRightFill } from "react-icons/bs"

import { Button, Container, Carousel, CarouselItem } from "react-bootstrap";
// FONTS

// IMAGES
import rosterLogo from "../../imgs/logo/roosterE.png";
import heroTextureBG from "../../imgs/textures/TextureA.jpg";
// import rooster1 from "../../imgs/product/sculptures/A.png";
// import miamiTexture from "../../imgs/textures/033-p-1080.png";
// import miamiTexture from "../../imgs/textures/background-3048876_1920.jpg";

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
top: 210px;
left: 540px;
 
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
// MIAMI BACKGROUND
const MiamiText = styled('span')`
display:inline;
position: relative;
background-color: #1e1e1e;
color: white;
font-size:78px;
font-family: "heroFont";
/* text-shadow: 2px 3px 2px lightgrey; */

-webkit-animation: vibrate-2 2.3s linear infinite both;
	        animation: vibrate-2 2.3s linear infinite both;-webkit-animation: vibrate-2 2.3s linear infinite both;
	        animation: vibrate-2 2.3s linear infinite both;

  @-webkit-keyframes vibrate-2 {
  0% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
  20% {
    -webkit-transform: translate(2px, -2px);
            transform: translate(2px, -2px);
  }
  40% {
    -webkit-transform: translate(2px, 2px);
            transform: translate(2px, 2px);
  }
  60% {
    -webkit-transform: translate(-2px, 2px);
            transform: translate(-2px, 2px);
  }
  80% {
    -webkit-transform: translate(-2px, -2px);
            transform: translate(-2px, -2px);
  }
  100% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
}
@keyframes vibrate-2 {
  0% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
  20% {
    -webkit-transform: translate(2px, -2px);
            transform: translate(2px, -2px);
  }
  40% {
    -webkit-transform: translate(2px, 2px);
            transform: translate(2px, 2px);
  }
  60% {
    -webkit-transform: translate(-2px, 2px);
            transform: translate(-2px, 2px);
  }
  80% {
    -webkit-transform: translate(-2px, -2px);
            transform: translate(-2px, -2px);
  }
  100% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
}

`


// INDIVIDUAL HERO TEXT CONTAINER 
const HeroText = styled('span')`
display:inline;
position: relative;
background-color: #1e1e1e;
color: white;
/* width: 20vw;
height: 25vh; */
font-size: 52px;
font-family: "heroFont";
 
// ** STYLING FOR EACH INDIVIDUAL HERO SPLASH TEXT CONTAINER
${props =>
    props.first &&
    css`
      /* background: palevioletred; */
      /* transform: rotateZ(4deg); */
      border-radius: 5%;
      /* margin: 30px 0px 30px -90px; */

      -webkit-animation: shake-horizontal 12.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) infinite both;
	        animation: shake-horizontal 12.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) infinite both;
          @-webkit-keyframes shake-horizontal {
  0%,
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  10%,
  30%,
  50%,
  70% {
    -webkit-transform: translateX(-10px);
            transform: translateX(-10px);
  }
  20%,
  40%,
  60% {
    -webkit-transform: translateX(10px);
            transform: translateX(10px);
  }
  80% {
    -webkit-transform: translateX(8px);
            transform: translateX(8px);
  }
  90% {
    -webkit-transform: translateX(-8px);
            transform: translateX(-8px);
  }
}
@keyframes shake-horizontal {
  0%,
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  10%,
  30%,
  50%,
  70% {
    -webkit-transform: translateX(-10px);
            transform: translateX(-10px);
  }
  20%,
  40%,
  60% {
    -webkit-transform: translateX(10px);
            transform: translateX(10px);
  }
  80% {
    -webkit-transform: translateX(8px);
            transform: translateX(8px);
  }
  90% {
    -webkit-transform: translateX(-8px);
            transform: translateX(-8px);
  }
}

    `};

${props =>
    props.second &&
    css`
      /* background: palevioletred; */
      /* transform: rotateZ(4deg); */
      border-radius: 5%;
      margin: 30px 0px 30px -90px;


      -webkit-animation: shake-horizontal 12.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) infinite reverse both;
	        animation: shake-horizontal 12.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) infinite reverse both;


      @-webkit-keyframes shake-horizontal {
  0%,
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  10%,
  30%,
  50%,
  70% {
    -webkit-transform: translateX(-10px);
            transform: translateX(-10px);
  }
  20%,
  40%,
  60% {
    -webkit-transform: translateX(10px);
            transform: translateX(10px);
  }
  80% {
    -webkit-transform: translateX(8px);
            transform: translateX(8px);
  }
  90% {
    -webkit-transform: translateX(-8px);
            transform: translateX(-8px);
  }
}
@keyframes shake-horizontal {
  0%,
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  10%,
  30%,
  50%,
  70% {
    -webkit-transform: translateX(-10px);
            transform: translateX(-10px);
  }
  20%,
  40%,
  60% {
    -webkit-transform: translateX(10px);
            transform: translateX(10px);
  }
  80% {
    -webkit-transform: translateX(8px);
            transform: translateX(8px);
  }
  90% {
    -webkit-transform: translateX(-8px);
            transform: translateX(-8px);
  }
}


      
    `};
 

${props =>
    props.three &&
    css`
      /* background: palevioletred; */
      /* transform: rotateZ(-7deg); */
      border-radius: 5%;
      margin: 30px 0px 30px 125px;

      -webkit-animation: shake-vertical 8.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) infinite both;
	        animation: shake-vertical 8.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) infinite both;

          @-webkit-keyframes shake-vertical {
  0%,
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
  10%,
  30%,
  50%,
  70% {
    -webkit-transform: translateY(-8px);
            transform: translateY(-8px);
  }
  20%,
  40%,
  60% {
    -webkit-transform: translateY(8px);
            transform: translateY(8px);
  }
  80% {
    -webkit-transform: translateY(6.4px);
            transform: translateY(6.4px);
  }
  90% {
    -webkit-transform: translateY(-6.4px);
            transform: translateY(-6.4px);
  }
}
@keyframes shake-vertical {
  0%,
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
  10%,
  30%,
  50%,
  70% {
    -webkit-transform: translateY(-8px);
            transform: translateY(-8px);
  }
  20%,
  40%,
  60% {
    -webkit-transform: translateY(8px);
            transform: translateY(8px);
  }
  80% {
    -webkit-transform: translateY(6.4px);
            transform: translateY(6.4px);
  }
  90% {
    -webkit-transform: translateY(-6.4px);
            transform: translateY(-6.4px);
  }
}



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

const ShopNowButton = styled(Button)`
/* position: absolute; */
background-color: white;
color: #4e4e4e;
font-size: 36px;
font-family: "heroFont";
border: none;
margin-top: 35px;
/* margin-top: 900px;
margin-left: 700px; */

/* -webkit-animation: heartbeat 8.5s ease-in-out infinite both;
	        animation: heartbeat 8.5s ease-in-out infinite both;

@-webkit-keyframes heartbeat {
  from {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transform-origin: center center;
            transform-origin: center center;
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  10% {
    -webkit-transform: scale(0.91);
            transform: scale(0.91);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  17% {
    -webkit-transform: scale(0.98);
            transform: scale(0.98);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  33% {
    -webkit-transform: scale(0.87);
            transform: scale(0.87);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  45% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
}
@keyframes heartbeat {
  from {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transform-origin: center center;
            transform-origin: center center;
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  10% {
    -webkit-transform: scale(0.91);
            transform: scale(0.91);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  17% {
    -webkit-transform: scale(0.98);
            transform: scale(0.98);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  33% {
    -webkit-transform: scale(0.87);
            transform: scale(0.87);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  45% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
} */


`

function Hero() {
  return (
    <>
      <HeroContainer >
        <HeroFlex>
          <HeroTextContainer>
            {/* <HeroText first>Custom-Made <BsCaretRight /></HeroText>
            <HeroText second>Limited-Edition <BsCaretRight /></HeroText>
            <MiamiText>Own a Unique <br /> Piece of Miami <BsCaretRight /></MiamiText>  
            <HeroText three>Artist Painted <BsCaretRight /></HeroText> 
            <ShopNowButton>Shop Now</ShopNowButton>{' '} */}
          </HeroTextContainer>
          {/* <div>  <ThreeD /></div> */}
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


