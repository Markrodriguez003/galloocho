import styled, { keyframes } from "styled-components";

// IMAGES
import rosterContactBG from "../../imgs/logo/borderart.PNG";
import bgTexture from "../../imgs/textures/pattern (1).png";
const scrollAnim = keyframes`
 
 from { 
        background-position: 0 0;
    } 
    to { 
        background-position: 0 -2200px;
    } 
}
`;
export const ContactContainer = styled("div")`
  position: relative;
  display: block;
  background-color: rgba(0, 0, 0, 1);
  background-image: url(${bgTexture});
  padding-top: 180px;
  padding-bottom: 280px;
  background-blend-mode: screen;
  background-position: center;

  animation: ${scrollAnim} 38s linear infinite;
`;

export const FormContainer = styled("div")`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: stretch;
  margin-left: 28%;
  margin-right: 28%;
  margin-top: 2px;
  color: black !important;
  padding: 20px;
  padding-bottom: 40px;
  color: white;
  border-radius: 1%;
  /*  border-top-left-radius: 8%; */
  /*   border-top-right-radius: 8%; */
  /*   border-bottom-right-radius: 8%; */
  background-color: rgba(250, 250, 250, 11);
  border: rgba(0, 0, 0, 0.72) 12px solid;
  -webkit-box-shadow: -1px 0px 36px -5px rgba(255, 255, 255, 0.26);
  box-shadow: -1px 0px 36px -5px rgba(255, 255, 255, 0.26);
  /* 
  normal | multiply | screen | overlay | darken | 
  lighten | color-dodge | color-burn |
   hard-light | soft-light | difference | exclusion | 
  hue | saturation | color | luminosity
  */

  @media (max-width: 1564px) {
    margin-left: 20%;
    margin-right: 20%;
    border-radius: 4%;
  }

  @media (max-width: 865px) {
    margin-left: 10%;
    margin-right: 10%;
    border-radius: 4%;
  }
`;

export const ContactFormHeader = styled("h1")`
  font-size: 55px;
  font-weight: bold;
  /* color: rgba(0, 0, 0, 0.85); */
  color:white;
  font-family: "menuFont";
text-align:center;
  @media (max-width: 825px) {
    font-size: 42px;
  }
  @media (max-width: 435px) {
    font-size: 28px;
  }
  @media (max-width: 290px) {
    font-size: 22px;
  }
`;
