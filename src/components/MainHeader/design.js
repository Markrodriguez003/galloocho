import styled, { css } from "styled-components";

// COMPONENTS
import { Button, Navbar, Offcanvas } from "react-bootstrap";

// IMAGES
import border from "../../imgs/logo/borderart.PNG";
import roosterCursor from "../../cursor/Rooster Cursor.png";

// SCRIPT TO SLIDE OUT HEADER WHEN SCROLLING
let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-150px";
  }
  prevScrollpos = currentScrollPos;
};

// CSS COMPONENTS
export const Header = styled(Navbar)`
  display: flex;
  position: fixed; /* Make it stick/fixed */
  flex-wrap: wrap;
  top: 0; /* Stay on top */
  flex-direction: row;
  justify-content: space-between;
  background-color: white;
  padding: 13px;
  transition: top 0.4s; 
  z-index:1;
  -webkit-box-shadow: 1px 2px 4px 3px rgba(0, 0, 0, 0.53);
  box-shadow: 1px 2px 28px 2px rgba(0, 0, 0, 0.23);
`;

export const BlackLip = styled("div")`

background-color:rgba(0,0,0,0.68);
width: 100%;
height: 126px;
z-index:-2;
  -webkit-box-shadow: 1px 2px 4px 3px rgba(0, 0, 0, 0.53);
  box-shadow: 1px 2px 28px 2px rgba(0, 0, 0, 0.23);
  margin-bottom:-126px;

`

export const Menu = styled("a")`
  color: black;
  background-color: transparent;
  cursor: pointer;
  text-decoration: none;
  font-family: "menuFont";
  font-size: 28px;
  margin-left: 20px;
  padding: 3px;
  /*   transition:  2s linear 1s; */

  &:link {
    color: black;
    text-decoration: none;
  }
  &:visited {
    color: black;
    text-decoration: none;
  }
  &:hover {
    color: black;
    background-color:rgba(0,0,0,0.065);
    border-radius: 15px;
    text-decoration: none;
    cursor: url(${roosterCursor})  -52 -52, auto;
    transition:  0.5s linear ;
  
  }
  &:active {
    color: black;
    text-decoration: none;
  }

  @media (max-width: 975px) {
    font-size: 22px;
  }

  @media (max-width: 840px) {
    font-size: 18.5px;
  }

  @media (max-width: 695px) {
    font-size: 15.5px;
  }

  @media (max-width: 290px) {
    font-size: 12px;
    margin-left:auto;
    margin-right:auto;
  }
`;

 

export const SubSideMenu = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: space-around;
  @media (max-width: 555px) {
    order:2;
    flex-grow: 12;
  }

  
`;

export const BrandLink = styled("a")`
  text-decoration: none;
  margin-right: 10px;
  @media (max-width: 555px) {
    order:1;
    margin-left:auto;
    margin-right: auto;
    
    
  }
`;

export const Brand = styled("img")`
    width: 158px;
    height: 132px;
  /* @media (max-width: 845px) {
    width: 110px;
  }
  @media (max-width: 745px) {
    width: 95px;
  }

  @media (max-width: 625px) {
    width: 75px;
  }

  @media (max-width: 585px) {
    width: 65px;
  }

  @media (max-width: 585px) {
    width: 95px;
  } */

 
`;

 
 
 

 
 