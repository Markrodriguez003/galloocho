import styled, { css, keyframes } from "styled-components";


/* ANIMATION */
const brushanimation = keyframes `
   from {
    -webkit-mask-position: 100% 0;
    mask-position: 100% 0;
   }
  
   to {
    -webkit-mask-position: 0 0;
    mask-position: 0 0;
   }
   `
   
/* MAIN SITE BUTTON*/
export const SiteButton = styled("Button")`
  background-color: green;
  color: black;
  font-size: 16px;
  font-family: "menuFont";
  font-weight: bold;
  letter-spacing: 1.5px;
  border: none;
  margin-top: -25px;
 
  width: 101%;
  height: 100%;
  font-family: "Lato", sans-serif;
  font-weight: bold;
  -webkit-mask: url("https://raw.githubusercontent.com/robin-dela/css-mask-animation/master/img/urban-sprite.png");
  mask: url("https://raw.githubusercontent.com/robin-dela/css-mask-animation/master/img/urban-sprite.png");
  -webkit-mask-size: 200%, 100%;
  mask-size: 200% 100%;
  border: none;
 
  cursor: pointer;
/*   -webkit-animation: ani2 0.7s steps(29) forwards; */
  animation: ${brushanimation} 0.7s steps(29) forwards;

  &:link {
    color: black !important;
  }

  &:visited {
    color: none;
  }

  &:hover {
    /*     background-color: black !important; */
    -webkit-animation: ${brushanimation} 0.7s steps(29) forwards;
    animation: ${brushanimation} 0.7s steps(29) forwards;
  }

  &:active {
    color: none;
  }

  @media (max-width: 600px) {
    margin-top: 60px;
  }
`;

export const BtnContainer = styled("div")`
  position: relative;
  width: 100px;
  height: 50px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 7vh;
  overflow: hidden;
  border: 1px solid #000;
  font-family: "Lato", sans-serif;
  font-weight: 300;
  transition: 0.5s;
  letter-spacing: 1px;
  border-radius: 8px;
`;

export const WordMask = styled("span")`
  position: absolute;
  color: #000;
  text-align: center;
  width: 101%;
  font-family: "Lato", sans-serif;
  font-weight: 300;
  position: absolute;
  font-size: 11px;
  margin-top: 17px;
  overflow: hidden;
  font-weight: bold;
`;

 
 
   
    
  /*  @keyframes ani2 {
    from {
     -webkit-mask-position: 100% 0;
     mask-position: 100% 0;
    }
   
    to {
     -webkit-mask-position: 0 0;
     mask-position: 0 0;
    }
   } */
   
    
    