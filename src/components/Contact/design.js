import styled from "styled-components";

// IMAGES
import rosterContactBG from "../../imgs/logo/borderart.PNG";

export const ContactContainer = styled("div")`
  display: block;
  position: relative;
  margin: 150px 420px 100px 420px;
  padding: 40px;
  color: white;
  border-radius: 40px;
  background-color: rgba(0, 0, 0, 0.88);
  background-image: url(${rosterContactBG});
  /* 
  normal | multiply | screen | overlay | darken | 
  lighten | color-dodge | color-burn |
   hard-light | soft-light | difference | exclusion | 
  hue | saturation | color | luminosity
  */
  background-blend-mode: multiply;
  background-position: center;
  background-size: cover;
`;

export const ContactFormHeader = styled("h1")`
  font-size: 58px;
  font-weight: bold;
`;

