import styled, { css } from "styled-components";


export const AboutHeaderContainer = styled("div")`
  display: flex;
  justify-content: center;
  text-align: center;
 
`;

export const AboutHeader = styled("h1")`
  font-size: 68px;
  font-weight: bold;
  color: black;
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



export const AboutContainer = styled('div')`
padding: 40px;
color: white;
/* background-color: rgba(0,0,0,0.92); */
background-color: transparent;
/* background-image:radial-gradient(circle at center center, lightgrey, white), 
repeating-radial-gradient(circle at center center, #444cf7, #444cf7, 10px, 
transparent 40px, transparent 40px);
background-blend-mode: multiply; */
margin-bottom:180px;

 
`

export const RotatedH1 = styled('h1')`
  display: inline;
  font-size: 50px;
  margin: 0;
  writing-mode: vertical-lr;
  line-height: 1.2;
  text-align: center;
  margin-top:35px;
  font-family: "heroFont";
  color:black;
  /* text-shadow: 4px 3px 0 rgba(0,0,0,0.9); */
  ${props => props.rotatedR && css`
  transform: rotate(180deg);
  
  `}

  ${props => props.rotatedL && css`
 
  `}

`

export const SocialMediaBar = styled("div")`
  color: white;
  /* background-color:red; */
  display: flex;
  flex-direction:row;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin-bottom:15px;
  /* background-color:rgba(0,255,255,0.15) */
 
`;

export const SocialMediaItem = styled("a")`
  text-decoration: none;
  padding:8px;
  font-size: 30px;
  color: white;
  &:hover {
    color: #fc6a6a;
  }
`;



//  CSS FOR PARALLAX & CAROUSEL SECTIONS
/*


import parallax1 from "../../imgs/splash/1.jpg";

export const AboutFirstSection = styled("div")`
  display: block;
  position: relative;
  z-index: 1;
`;

export const CarouselImage = styled("img")`
  width: 100%;
  max-width: 100%;
  height: 120vh;
  object-fit: cover;
  filter: grayscale(35%);
  opacity: 0.8;
`;

export const ParallaxImg = styled("div")`
  background-color: rgba(0,0,0,0.2 );
 
  background-image: url(${parallax1});
  background-blend-mode:multiply;
 
  min-height: 800px;

 
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const ParallaxHeader = styled("div")`
  color: white;
  font-family: "aboutFont";
  font-weight: bold;
  font-size: 100px;

  text-shadow: 8px 8px 0 black, 8px 8px 0 slategrey;
  text-align: center;
 
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
`;


*/