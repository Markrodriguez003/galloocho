import styled, { css } from "styled-components";
import parallax1 from "../../imgs/splash/1.jpg"
// import aboutContainer from "../../imgs/textures/6F5401C9-77CF-40C6-9A2A-8C714B22FAA2.png"
// import aboutContainer from "../../imgs/textures/sheets-3392320_1920.jpg"




export const AboutFirstSection = styled("div")`
  display: block;
  position: relative;
  z-index: 1;
 
`;

/*  CAROUSEL SLIDE IMAGE  */
export const CarouselImage = styled("img")`
  width: 100%;
  max-width: 100%;
  height: 120vh;
  object-fit: cover;
  filter: grayscale(35%);
  opacity: 0.8;
`;

export const AboutHeaderContainer = styled("div")`
  display: flex;
  justify-content: center;
  text-align: center;
  
  
`;

export const AboutHeader = styled("h1")`
  font-size: 68px;
 
  font-weight: bold;
  color: white;
  display: inline-block;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.48);
  top: 280px;
  z-index: 2;
  padding: 30px;
  border: white solid 2px;
  border-radius: 25px;
  margin-left: 20px;
  margin-right: 20px;

  @media screen and (max-width: 400px) {
  font-size: 48px;
  top: 180px;
}
 
`;

export const MiamiText = styled("h1")`
  font-family: "cursiveFont";
  color: hotpink;
  font-size: 155px;
  background: -webkit-linear-gradient( yellow, #E01686, pink);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-attachment: fixed;
  margin-bottom: -70px;
 

  @media screen and (max-width: 400px) {
  font-size: 120px;
}
`;

export const WhoAreWeContainerFlex = styled('div')`
position: block;
/* display: flex; */
color:white;
  background-color: rgb(14, 14, 14);

`

export const WhoAreWeContainer = styled("div")`
  
  width: 100%;
  height: auto;
  padding-top: 80px;
  color: white;
 
  background-color: rgb(14, 14, 14);
 
 
  text-align: center;
  padding-bottom: 80px;

 

  & h1 {
    color: white;
    padding-bottom: 40px;
    font-family: "aboutFont";
    font-size: 100px;
    font-weight: bold;
    text-shadow: 4px 3px 0 rgba(255,122,122,0.5);
    /* font-weight: bold; */
    letter-spacing: 8px;
    text-decoration:underline;
    
  }

  & p {
    font-family: "aboutFont";
    font-size: 28px;
    margin-left: 50px;
    margin-right: 50px;
    margin-bottom: 10px;
  }
`;


export const ParallaxImg = styled('div')`
  /* background-color: yellowgreen; */
  /* The image used */
  background-image: url(${parallax1});

  /* Set a specific height */
  min-height: 800px;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  
`

export const ParallaxHeader = styled('div')`
  
 color:white;
 font-family: "aboutFont";
 font-weight: bold;
 font-size: 100px;

  text-shadow: 8px 8px 0 black, 8px 8px 0 slategrey;
  text-align:center;
  margin-left:auto;
  margin-right:auto;
  padding-top: 150px;
 
  margin-left: 50px;
    margin-right: 50px;

  & p {
    padding-bottom: 40px;
    font-family: "aboutFont";
    font-size: 28px;
    margin-left: 50px;
    margin-right: 50px;
    text-shadow: 2px 2px 0 black, 2px 2px 0 slategrey;
  }
 `

export const NavDiv = styled('div')`
 display:inline;
 position:absolute;
 z-index:2;
 background-color:rgba(0,0,0,0.2);
 top: 400px;
 left: 40px;
 padding: 10px;
 padding-top: 22px;
 `

export const NavigationPanel = styled('div')`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  z-index: 10;
  position: sticky;
  position: -webkit-sticky;
  top: 400px;
  z-index:2;
 `
export const NavCircle = styled('div')`
  width: 15px;
  height: 15px;
  background-color: rgba(0,0,0,0.2);
  border: black 2px solid;
  border-radius: 50%;
  cursor:pointer;
  margin-bottom: 22px;
  margin-left: 40px;
 
  &:hover {
    background: rgba(0,0,0,0.6);

  }

`

