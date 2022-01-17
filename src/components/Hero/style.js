import styled,   { css, keyframes } from "styled-components";

// IMAGES
import heroTextureBG from "../../imgs/textures/TextureA.jpg";

// FONTS

//COMPONENTS
import { Button } from "react-bootstrap";

// COLOR PALLETTE
// GHOST WHITE --> #FAFAFA

// FLEX BOX THAT HOLDS TEXT CONTAINER + ROOSTER IMAGE
export const HeroFlex = styled("div")`
  display: inline-flex;
  position: relative;
  flex-direction: row;
  align-content: center;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  text-align: center;
  padding-bottom: 150px;
  padding-top: 250px;

  @media (max-width: 1028px) {
            margin-top: 80px;  
    }
  @media (max-width: 760px) {
            margin-top: 20px;  
    }
 

`;

// FLEX BOX CONTAINER THAT HOLDS ALL INDIVIDUAL HERO TEXT CONTAINER
export const HeroTextContainer = styled("div")`
  display: inline-flex;
  position: relative;
  flex-direction: column;
  align-content: center;
  align-items: center;
`;

// INDIVIDUAL HERO TEXT CONTAINER
export const HeroText = styled("span")`
  display: inline;
  position: relative;
  background-color: #fafafa;
  color: black;
  font-size: 3em;
  /* font-family: "heroFont"; */
  font-family: "Montserrat", sans-serif;
  text-align: center;
  margin-bottom: 20px;

  /* @media (max-width: 860px) {
    font-size: 2.2em;
  } */

  
`;

const slidingBackground = keyframes`
0%,
100% {
    background-position: 0 40%;
}

50% {
    background-position: 100% 40%;
}

`;

// MIAMI BACKGROUND
export const MiamiText = styled("span")`
  display: inline;
  position: relative;
 
  border-radius: 44px;
  padding: 2px;
  color:black;
 
  font-size: 96px;
  font-family: "menuFont", sans-serif;
  letter-spacing: 4.5px;


  animation: ${slidingBackground} 70s linear infinite;
    background: url("../../imgs/textures/TextureA.jpg") no-repeat left / 120%;
    /* background: url("../../imgs/textures/background-6793839_1920.jpg") no-repeat left / 120%; */
    height: 49vh;
    text-align: center;
    width: 100vw;
    margin-top: 0px;
    margin-bottom: -80px;

   

    @media (max-width: 1000px) {
      order: 2;

  }
  @media (max-width: 760px) {
            font-size: 55px;  
    }
 
 
`;

// ENTIRE HERO SPLASH PAGE CONTAINER (SPLATTER PAINT GRAPHIC)
export const HeroContainer = styled("div")`
  display: block;
  position: relative;
  width: 100%;
  height: 110vh;
  background-color: rgba(0,0,0,0.07)
`;

/* SHOP NOW BUTTON LOCATED AT THE BOTTOM */
export const ShopNowButton = styled(Button)`
  background-color: #fafafa;
  color: black;
  font-size: 26px;
  font-family: "menuFont";
  font-weight: bold;
  border: none;
  margin-top: -25px;

 /* @media (max-width: 860px) {
    font-size: 2.2em;
  } */
 
 
`;



/*
 
import styled, { css } from "styled-components";

// IMAGES
import heroTextureBG from "../../imgs/textures/TextureA.jpg";

import { Button } from "react-bootstrap";


export const HeroFlex = styled("div")`
 display: inline-flex;
 position: relative;
 flex-direction: row;
 align-content: center;
 align-items: center;
 justify-content: center;
 flex-wrap: wrap;
 width: 100%;
 height: 100%;
 text-align: center;
 padding-bottom: 150px;
 padding-top: 250px;

 @media (max-width: 1028px) {
           margin-top: 80px;  
   }
 @media (max-width: 760px) {
           margin-top: 20px;  
   }
 

`;

export const HeroTextContainer = styled("div")`
 display: inline-flex;
 position: relative;
 flex-direction: column;
 align-content: center;
 align-items: center;
`;

export const HeroText = styled("span")`
 display: inline;
 position: relative;
 background-color: #fafafa;
 color: black;
 font-size: 3em;
 font-family: "Montserrat", sans-serif;
 text-align: center;
 margin-bottom: 20px;
`;

// MIAMI BACKGROUND
export const MiamiText = styled("span")`
 display: inline;
 position: relative;
 background-color: rgba(0,0,0,0.28);
 border-radius: 44px;
 padding: 2px;
 color:transparent;
 font-size: 96px;

 font-family: "menuFont", sans-serif;
   -webkit-text-stroke: 4px white;
 letter-spacing: 4.5px;

   @media (max-width: 1000px) {
     order: 2;

 }
 @media (max-width: 760px) {
           font-size: 55px;  
   }
 
 
`;

// ENTIRE HERO SPLASH PAGE CONTAINER (SPLATTER PAINT GRAPHIC)
export const HeroContainer = styled("div")`
 display: block;
 position: relative;
 width: 100%;
 height: 110vh;
 background-image: url(${heroTextureBG});
 background-color: #041b42;
 background-blend-mode: screen;
 background-position: center;
 background-size: cover;
 background-blend-mode: exclusion;
`;

 
export const ShopNowButton = styled(Button)`
 background-color: #fafafa;
 color: black;
 font-size: 26px;
 font-family: "menuFont";
 font-weight: bold;
 border: none;
 margin-top: 35px;

 
 
`;

 
*/