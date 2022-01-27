import styled, { keyframes } from "styled-components";
import react, { props } from "react";

// IMAGES
import textureA from "../../imgs/textures/outline-text/Miami-A.jpg";
import textureB from "../../imgs/textures/outline-text/Miami-B.jpg";
import textureC from "../../imgs/textures/outline-text/Miami-C.jpg";
import textureD from "../../imgs/textures/outline-text/Miami-D.jpg";
import textureE from "../../imgs/textures/outline-text/Miami-E.jpg";
import textureF from "../../imgs/textures/outline-text/Miami-F.jpg";

const textureArray = [
  textureA,
  textureB,
  textureC,
  textureD,
  textureE,
  textureF,
];


const textureObj = {
    'MiamiPink-A': textureA,  
    'MiamiPink-B': textureB,  
    'MiamiPink-C': textureC,  
    'MiamiPink-D': textureD,  
    'MiamiPink-E': textureE,  
    'MiamiPink-F': textureF,  
}

// ANIMATION
const slidingBG = keyframes`
 
    100% {
        background-position: 0% 20%;
    }

    50% {
        background-position: 0% 35%;
    }
`;

export const TextContainer = styled("div")`
animation: ${slidingBG} 8s ease-in-out infinite;
animation-direction: alternate;
display: inline-block
position:absolute;
/* width: 350px;
height: auto; */
background-color:blue;
 
background-image: url(${textureArray[0]});
${(props) => {
  if (props.texture > -1 && props.texture < 6 )
    return `
        background-image: url(${textureArray[props.texture]});
        `;
}}


 
background-repeat: no-repeat;
background-position: center;
background-size: cover;
background-blend-mode: lighten ;

// REMOVE AFTER TESTING
margin: 200px;
padding: 35px;

color:white;
    text-align:center;
    letter-spacing: 2px; 
    -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-stroke: 2.5px rgba(0,0,0,0.5);
    
 
/* 
&:before,
&:after{
    position:absolute;
    width: 350px;
    height: 350px;
    content:''
} */

&:before{
    z-index: -2;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: inherit;
}

&:after{
    position: absolute;
    z-index: -1;
    top: 0em;
    right: 0em;
    bottom: 0em;
    left: 0em;
    background-color: transparent;
}


& h1 {
    font-weight:bold;
  font-size: 120px;
}
 
`;
