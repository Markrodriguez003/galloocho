import styled, { css, keyframes } from "styled-components";

// IMAGES
import heroTextureBG from "../../imgs/textures/TextureA.jpg";
import borderBrush from "../../imgs/textures/WaterColorBrush-blue.png"
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
  padding-top: 130px;
  padding-bottom: 160px;


  & div{
    display: "flex",
          flex-direction: "column",
          gap: "10px",
  }

    @media (max-width: 1308px) {
      flex-direction: column-reverse;
  
  } 
`;

export const HeaderText = styled("h1")`
  padding: 10px;
  color: black;
  font-size: 66px;
  font-family: "heroFont", sans-serif;
  letter-spacing: 4.5px;
  text-align: center;
& span{
  color:hotpink;
}

  @media (max-width: 280px) {
    font-size: 14vw;
  } 
`;




/* Brushstroke border */
export const BrushStrokeBorder = styled('div')`
  /* background-color: red; */
  width: 100%;
  height: 80px;
  background-image: url(${borderBrush});
  background-size: cover;
  opacity: 0.35;
 
 
`;

