import styled, { css } from "styled-components";

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

// MIAMI BACKGROUND
export const MiamiText = styled("span")`
  display: inline;
  position: relative;
  background-color: rgba(0,0,0,0.28);
  border-radius: 44px;
  padding: 2px;
  color:transparent;
  /* font-size: 5vw; */
  font-size: 96px;

  font-family: "menuFont", sans-serif;
    -webkit-text-stroke: 4px white;
  letter-spacing: 4.5px;

    @media (max-width: 1000px) {
      order: 2;

  }

 
`;

// ENTIRE HERO SPLASH PAGE CONTAINER (SPLATTER PAINT GRAPHIC)
export const HeroContainer = styled("div")`
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
 
/* SHOP NOW BUTTON LOCATED AT THE BOTTOM */
export const ShopNowButton = styled(Button)`
  background-color: #fafafa;
  color: black;
  font-size: 26px;
  font-family: "menuFont";
  font-weight: bold;
  border: none;
  margin-top: 35px;

 /* @media (max-width: 860px) {
    font-size: 2.2em;
  } */
 
 
`;
