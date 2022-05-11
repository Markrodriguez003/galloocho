import styled, { css, keyframes } from "styled-components";

// IMAGES
import heroTextureBG from "../../imgs/textures/TextureA.jpg";

//COMPONENTS
import { Button } from "react-bootstrap";

// ENTIRE HERO SPLASH PAGE CONTAINER (SPLATTER PAINT GRAPHIC)
export const HeroContainer = styled("div")`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 5px;
  width: 100%;
  height: 100%;
  padding-top: 40px;
  /* BG COLOR */
  background-color: rgba(0, 0, 0, 0.05);
  background: -moz-linear-gradient(top, rgba(0, 0, 0, 0.05) 0%, #ffffff 100%);
  background: -webkit-linear-gradient(
    top,
    rgba(0, 0, 0, 0.05) 0%,
    #ffffff 100%
  );
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.05) ; 0%,
    #ffffff 100%
  );

  /* background-color: rgba(0,255,255,0.2); */

`;


// MIAMI BACKGROUND
export const HeaderText = styled("h1")`
  /* display: inline;
  position: relative; */
  padding: 10px;
  color: black;
  font-size: 66px;
  font-family: "menuFont", sans-serif;
  letter-spacing: 4.5px;
  /* background: url("../../imgs/textures/TextureA.jpg") no-repeat left / 120%; */
  background: url("../../imgs/textures/background-6793839_1920.jpg") no-repeat left / 120%;
  /* height: 49vh; */
  text-align: center;
  @media (max-width: 280px) {
    font-size: 14vw;
  } */
`;

// export const MiamiText = styled("span")`
//   background-color: hotpink;
//   color: white;
//   border: pink 2px solid;
//   /* padding: 12px; */
//   padding-bottom: 18px;
//   padding-right: 16px;
//   padding-left: 15px;
//   /* font-style:italic; */
//   /* -webkit-text-fill-color: transparent; */
//   -webkit-text-stroke-width: 3px;
//   -webkit-text-stroke-color: white;
//   text-shadow: 6px 6px #ff1f8f, /* 7px 7px rgba(0,0,0,0.22); */ 7px 7px white;
//   border-bottom-right-radius: 25px;
// `;

/* SHOP NOW BUTTON LOCATED AT THE BOTTOM */
export const ShopNowButton = styled(Button)`
  background-color: #fafafa;
  color: black;
  font-size: 26px;
  font-family: "menuFont";
  font-weight: bold;
  border: none;
  margin-top: -25px;

  &:hover {
    background-color: black !important;
  }

  @media (max-width: 600px) {
    margin-top: 60px;
  }
`;

 
 
 