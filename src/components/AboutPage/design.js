import styled, { css } from "styled-components";
import parallax1 from "../../imgs/splash/1.jpg"

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
  text-shadow: 8px 8px 0 black, 8px 8px 0 white;
  font-weight: bold;
  color: white;
  display: inline-block;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.48);
  top: 320px;
  z-index: 2;
  padding: 20px;
  border-radius: 25px;
  -webkit-box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0); 
box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
`;

export const MiamiText = styled("span")`
  font-family: "cursiveFont";
  color: hotpink;
  font-size: 135px;
`;

export const WhoAreWeContainer = styled("div")`
  width: 100%;
  height: auto;
  padding-top: 120px;
  padding: 120px;
  color: white;
  background-color: #1f1f1f;
  /*Free Mod Shapes I SVG provided by SVGeez.com - CC 4.0 License - © 2019 Megan Young */
  background-color: rgb(14, 14, 14);
  fill: rgb(0, 0, 0);
  background-size: 1000px 1000px;
  background-repeat: repeat;
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' x='0' y='0' viewBox='0 0 600 600' xml:space='preserve'%3E%3Cstyle%3E.st0{fill:rgb(0, 0, 0)}%3C/style%3E%3Cpath class='st0' d='M-.3 111.6H110v6H-.3zM-.3 99.9H110v6H-.3zM-.3 88.2H110v6H-.3zM-.3 76.5H110v6H-.3zM-.3 64.8H110v6H-.3zM-.3 53.1H110v6H-.3zM-.3 41.4H110v6H-.3zM-.3 18H110v6H-.3zM-.3 29.7H110v6H-.3zM-.3 6.3H110v6H-.3zM552.1 205h16.2v395h-16.2z'/%3E%3Cpath class='st0' d='M520.6 240.8H328.5v6h192.1v5.7H328.5v6h192.1v5.7H328.5v6h192.1v5.7H328.5v6h192.1v5.7H328.5v6h192.1v5.7H328.5v6h192.1v5.7H328.5v6h192.1v5.7H328.5v6h192.1v5.7H328.5v6h192.1v5.7H328.5v5h-.3v86.3H221.5V347h.2V240.6h106.8v-107H221.7v36.8h-.2V0h-6v170.4h-5.7V0h-6v170.4h-5.7V0h-6v170.4h-5.7V0h-6v170.4h-5.7V0h-6v170.4H163V0h-6v170.4h-5.7V0h-6v170.4h-5.7V0h-6v170.4H128V0h-6v170.4h-5.7V0h-6v122.9H.1v16.2h110.2v15.2H.1v16.2h110v5.9h111.6v17.4H110.3v-5.7h111v-6H109.7v3.6H.1V202h110.3v-2.1h111.3v5.7H110.1v6h111.6v5.7H.1v16.2h110v1.5h111.6v5.1H110v8.6H.1v16.2H110V280H.1v16.2H110v15.2H.1v16.2H110v15.2H.1V359h110.2v15.2H.1v16.2h110.2v15.2H.1V422h110.2v15.4H0v16.2h110.2v15.2H0V485h110.2v15.2H0v99.4h82v-83.2h28.2V599h6v-82.6h5.7V599h6v-82.6h5.7V599h6v-82.6h5.7V599h6v-82.6h5.7V599h6v-82.6h5.7V599h6v-82.6h5.7V599h6v-82.6h5.7V599h6v-82.6h5.7V599h6v-82.6h5.7V599h6v-82.6h25V599h82v-82.6H404V599h6v-82.6h5.7V599h6v-82.6h5.7V599h6v-82.6h5.7V599h6v-82.6h5.7V599h6v-82.6h5.7V599h6v-82.6h5.7V599h6v-82.6h5.7V599h6v-82.6h5.7V599h6v-82.6h5.7V599h6v-82.6h5.4V600h16.2V205h-16.2v35.8zm-410.3-11.9v-5.7h111.3v5.7H110.3zm387.2 208.5h-5.7v-85.3h5.7v85.3zm6.1-85.3h5.7v85.3h-5.7v-85.3zm-17.7 85.3h-5.7v-85.3h5.7v85.3zm-11.7 0h-5.7v-85.3h5.7v85.3zm-11.7 0h-5.7v-85.3h5.7v85.3zm-11.7 0h-5.7v-85.3h5.7v85.3zm-11.7 0h-5.7v-85.3h5.7v85.3zm-11.7 0h-5.7v-85.3h5.7v85.3zm-11.7 0h-5.5v-85.3h5.5v85.3zm0 16.2v15.2H410v-15.2h5.7zm6 0h5.7v15.2h-5.7v-15.2zm11.7 0h5.7v15.2h-5.7v-15.2zm11.7 0h5.7v15.2h-5.7v-15.2zm11.7 0h5.7v15.2h-5.7v-15.2zm11.7 0h5.7v15.2h-5.7v-15.2zm11.7 0h5.7v15.2h-5.7v-15.2zm11.7 0h5.7v15.2h-5.7v-15.2zm11.7 0h5.7v15.2h-5.7v-15.2zm11.7 0h5.4v15.2h-5.4v-15.2zm0-16.2v-85.3h5.4v85.3h-5.4zM404 453.6v15.2H221.5v-15.2H404zm-211.9-16.2h-5.7V347h5.7v90.4zm6-90.4h5.7v90.4h-5.7V347zm-17.7 90.4h-5.7V347h5.7v90.4zm-11.7 0H163V347h5.7v90.4zm-11.7 0h-5.7V347h5.7v90.4zm-11.7 0h-5.7V347h5.7v90.4zm-11.7 0H128V347h5.7v90.4zm0 16.2v15.2H128v-15.2h5.6zm6.1 0h5.7v15.2h-5.7v-15.2zm11.6 0h5.7v15.2h-5.7v-15.2zm11.7 0h5.7v15.2H163v-15.2zm11.7 0h5.7v15.2h-5.7v-15.2zm11.7 0h5.7v15.2h-5.7v-15.2zm11.7 0h5.7v15.2h-5.7v-15.2zm11.7 0h5.7v15.2h-5.7v-15.2zm5.7-16.2h-5.7V347h5.7v90.4zM116.3 347h5.7v90.4h-5.7V347zm0 106.6h5.7v15.2h-5.7v-15.2zm0 46.6V485h5.7v15.2h-5.7zm11.7 0V485h5.7v15.2H128zm11.7 0V485h5.7v15.2h-5.7zm11.6 0V485h5.7v15.2h-5.7zm11.7 0V485h5.7v15.2H163zm11.7 0V485h5.7v15.2h-5.7zm11.7 0V485h5.7v15.2h-5.7zm11.7 0V485h5.7v15.2h-5.7zm11.7 0V485h5.7v15.2h-5.7zm11.7 0V485H404v15.2H221.5zm188.5 0V485h5.7v15.2H410zm11.7 0V485h5.7v15.2h-5.7zm11.7 0V485h5.7v15.2h-5.7zm11.7 0V485h5.7v15.2h-5.7zm11.7 0V485h5.7v15.2h-5.7zm11.7 0V485h5.7v15.2h-5.7zm11.7 0V485h5.7v15.2h-5.7zm11.7 0V485h5.7v15.2h-5.7zm11.7 0V485h5.7v15.2h-5.7zm11.7 0V485h5.4v15.2h-5.4zM583.5 205h16.2v395h-16.2z'/%3E%3Cpath class='st0' d='M328.5 198.6h271.2v6H328.5zM328.5 186.9h271.2v6H328.5zM328.5 175.2h271.2v6H328.5zM328.5 163.5h271.2v6H328.5zM328.5 151.8h271.2v6H328.5zM328.5 140.2h271.2v6H328.5zM328.5 128.5h271.2v6H328.5zM328.5 105.1h271.2v6H328.5zM328.5 116.8h271.2v6H328.5zM328.5 93.4v6h271.2V-.4h-82.8v93.8z'/%3E%3Cpath class='st0' d='M328.2 0h84.4v93.2h-84.4z'/%3E%3C/svg%3E");

  text-align: center;

  & h1 {
    color: white;
    padding-bottom: 40px;
    font-family: "aboutFont";
    font-size: 112px;
    text-shadow: 4px 3px 0 #7a7a7a;
    font-weight: bold;
    letter-spacing: 8px;
    text-decoration:underline;
  }

  & p {
    padding-bottom: 40px;
    font-family: "aboutFont";

    font-size: 40px;
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
 font-size: 105px;
  text-shadow: 8px 8px 0 black, 8px 8px 0 slategrey;
  text-align:center;
  margin-left:auto;
  margin-right:auto;
  padding-top: 150px;
  /* background-color: rgba(0, 0, 0, 0.48);
  padding: 20px; */
 
  @keyframes waviy {
  0%,40%,100% {
    transform: translateY(0)
  }
  20% {
    transform: translateY(-20px)
  }
}
  text-transform: uppercase;
  animation: waviy 1s infinite;
  animation-delay: calc(.1s * var(--i));

  & p {
    padding-bottom: 40px;
    font-family: "aboutFont";
    font-size: 40px;
    text-shadow: 2px 2px 0 black, 2px 2px 0 slategrey;
  }
 `

