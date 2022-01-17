import styled from "styled-components";

// COMPONENTS
import { Button, Navbar, Offcanvas } from "react-bootstrap";

// SCRIPT TO SLIDE OUT HEADER WHEN SCROLLING
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-150px";
  }
  prevScrollpos = currentScrollPos;
}

// CSS COMPONENTS
export const Header = styled(Navbar)`
  display: flex;
  position: fixed; /* Make it stick/fixed */
  top: 0; /* Stay on top */
  flex-direction: row;
  justify-content: space-between;
  background-color:white;
  padding: 13px;
  border-bottom: solid rgba(0,0,0,0.3) 2px;
  /* border-width: 14px;
  border-bottom-style: solid;
  border-image: repeating-radial-gradient(
      circle at -12px,
      grey,
      transparent 2px,
      black 8px,
      grey 2px
    )
    26; */
 
  /* -webkit-box-shadow: 1px 2px 4px 3px rgba(0, 0, 0, 0.53); */
  box-shadow: 1px 2px 28px 2px rgba(0, 0, 0, 0.23);

  & img:hover {
    transform: rotate(1turn);
    -webkit-transition: all 1s ease; /* Safari and Chrome */
    -moz-transition: all 1s ease; /* Firefox */
    -ms-transition: all 1s ease; /* IE 9 */
    -o-transition: all 1s ease; /* Opera */
    transition: all 1s ease;
  }
  transition: top 0.4s;
`;

export const Menu = styled("h2")`
  color: black;
  background-color: transparent;
  cursor: pointer;
  text-decoration: none;
  font-family: "menuFont";
  font-size: 30px;
  margin-left: 6px;

  @media (max-width: 675px) {
    font-size: 22px;
  }

  @media (max-width: 455px) {
    font-size: 13.5px;
  }
`;

export const SubSideMenu = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: space-around;
`;

export const BrandLink = styled("a")`
  text-decoration: none;
`;

export const BrandIcon = styled("img")`
  width: 70px;
  height: 75px;
  background-color: transparent;
  border-radius: 50%;
  padding: 7px;
  margin-bottom: 8px;
  margin-right: 3px;
  @media (max-width: 675px) {
    width: 50px;
    height: 55px;
  }

  @media (max-width: 455px) {
    width: 40px;
    height: 45px;
  }
  @media (max-width: 290px) {
    width: 30px;
  height: 35px;
  }
`;
export const MenuHeaderIcon = styled("img")`
 
 /* FOR OLDER/BETTER ICON */
 /* width: 160px;
  height: 195px;
  background-color: transparent;
  color: black;
  padding: 4px;
  margin-top: 40px;
  margin-left: 68px;
  margin-bottom: 8px; */

/* FOR ERNIE LOGO */
  width: 195px;
  height: 205px;
  background-color: transparent;
  color: white;
  padding: 4px;
  margin-top: 40px;
  margin-left: 28px;
  margin-bottom: -22px; 
`;

export const BrandText = styled("h1")`
  font-family: "brandFont";
  color: black;
  letter-spacing: 2.5px;
  /* border: black 4.2px dotted; */
  padding: 6px 6px 0px 6px;
  margin-right: 6px;
  margin-top: 8px;
  font-size: 62px;

  @media (max-width: 725px) {
    font-size: 38px;
  }

  /* @media (max-width: 675px) {
    font-size: 28px;
  } */

  /* @media (max-width: 550px) {
    font-size: 24px;
  } */

  @media (max-width: 455px) {
    font-size: 26px;
    border: black 3.2px dotted;
  }
  @media (max-width: 290px) {
    font-size: 14px;
    border: black 3.2px dotted;
  }
`;

export const SlideMenuContainer = styled(Offcanvas)`
  background-color:#1f1f1f;
  color: #FAFAFA;

  &: * {
    color: white;
  }
`;

export const SiteButton = styled(Button)`
  background-color: #FAFAFA;
  color: #2f3030;
  border: none;
  display: "inline";
  /* margin-right:120px;
margin-left:120px;
margin-bottom:135px; */
  font-size: 20px;
  /* border-radius: 20px; */
  font-weight: bold;

  -webkit-transition: all 0.5s ease; /* Safari and Chrome */
  -moz-transition: all 0.5s ease; /* Firefox */
  -ms-transition: all 0.5s ease; /* IE 9 */
  -o-transition: all 0.5s ease; /* Opera */
  transition: all 0.5s ease;
  &:hover {
    /* background-color: lightpink; */
    background-color: #fc6a6a;
  }
`;

export const MenuFlex = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: stretch;
`;

export const MenuItem = styled("a")`
  text-decoration: none;
  color: #FAFAFA;
  font-size: 28px;
  padding-top: 10.5px;
  -webkit-transition: all 0.5s ease; /* Safari and Chrome */
  -moz-transition: all 0.5s ease; /* Firefox */
  -ms-transition: all 0.5s ease; /* IE 9 */
  -o-transition: all 0.5s ease; /* Opera */
  transition: all 0.5s ease;

  &:hover {
    /* color: lightpink; */
    color: #fc6a6a;
    font-size: 38px;
  }
`;

export const SocialMediaBar = styled("div")`
  color: #FAFAFA;
  /* background-color:red; */
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: space-around;
  margin-top: 16px;
`;

export const SocialMediaItem = styled("a")`
  text-decoration: none;
  padding: 12px;
  font-size: 30px;
  color: #FAFAFA;
  /* -webkit-transition: all 0.3s ease;  
    -moz-transition: all 0.3s ease;  
    -ms-transition: all 0.3s ease;  
    -o-transition: all 0.3s ease;  
    transition: all 0.3s ease; */
  &:hover {
    /* color: lightpink; */
    color: #fc6a6a;
    font-size: 38px;
  }
`;



 /*

import styled from "styled-components";

// COMPONENTS
import { Button, Navbar, Offcanvas } from "react-bootstrap";

// SCRIPT TO SLIDE OUT HEADER WHEN SCROLLING
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-150px";
  }
  prevScrollpos = currentScrollPos;
}

// CSS COMPONENTS
export const Header = styled(Navbar)`
  display: flex;
  position: fixed;  
  top: 0;  
  flex-direction: row;
  justify-content: space-between;
  background-color: #FAFAFA;
  padding: 13px;
  
  -webkit-box-shadow: 1px 7px 27px 3px rgba(0, 0, 0, 0.53);
  box-shadow: 1px 7px 27px 3px rgba(0, 0, 0, 0.53);

  & img:hover {
    transform: rotate(1turn);
    -webkit-transition: all 1s ease;  
    -moz-transition: all 1s ease;  
    -ms-transition: all 1s ease;  
    -o-transition: all 1s ease;  
    transition: all 1s ease;
  }
  transition: top 0.4s;
`;

export const Menu = styled("h2")`
  color: black;
  background-color: transparent;
  cursor: pointer;
  text-decoration: none;
  font-family: "menuFont";
  font-size: 30px;
  margin-left: 6px;

  @media (max-width: 675px) {
    font-size: 22px;
  }

  @media (max-width: 455px) {
    font-size: 13.5px;
  }
`;

export const SubSideMenu = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: space-around;
`;

export const BrandLink = styled("a")`
  text-decoration: none;
`;

export const BrandIcon = styled("img")`
  width: 70px;
  height: 75px;
  background-color: transparent;
  border-radius: 50%;
  padding: 7px;
  margin-bottom: 8px;
  margin-right: 3px;
  @media (max-width: 675px) {
    width: 50px;
    height: 55px;
  }

  @media (max-width: 455px) {
    width: 40px;
    height: 45px;
  }
  @media (max-width: 290px) {
    width: 30px;
  height: 35px;
  }
`;
export const MenuHeaderIcon = styled("img")`
 
 
  width: 195px;
  height: 205px;
  background-color: transparent;
  color: white;
  padding: 4px;
  margin-top: 40px;
  margin-left: 28px;
  margin-bottom: -22px; 
`;

export const BrandText = styled("h1")`
  font-family: "brandFont";
  color: black;
  letter-spacing: 2.5px;
  border: black 4.2px dotted;
  padding: 6px 6px 0px 6px;
  margin-right: 6px;
  margin-top: 8px;
  font-size: 62px;

  @media (max-width: 725px) {
    font-size: 38px;
  }

 
  @media (max-width: 455px) {
    font-size: 26px;
    border: black 3.2px dotted;
  }
  @media (max-width: 290px) {
    font-size: 14px;
    border: black 3.2px dotted;
  }
`;

export const SlideMenuContainer = styled(Offcanvas)`
  background-color:#1f1f1f;
  color: #FAFAFA;

  &: * {
    color: white;
  }
`;

export const SiteButton = styled(Button)`
  background-color: #FAFAFA;
  color: #2f3030;
  border: none;
  display: "inline";
 
  font-size: 20px;
 
  font-weight: bold;

  -webkit-transition: all 0.5s ease; 
  -moz-transition: all 0.5s ease;  
  -ms-transition: all 0.5s ease;  
  -o-transition: all 0.5s ease; 
  transition: all 0.5s ease;
  &:hover {
 
    background-color: #fc6a6a;
  }
`;

export const MenuFlex = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: stretch;
`;

export const MenuItem = styled("a")`
  text-decoration: none;
  color: #FAFAFA;
  font-size: 28px;
  padding-top: 10.5px;
  -webkit-transition: all 0.5s ease;  
  -moz-transition: all 0.5s ease;  
  -ms-transition: all 0.5s ease; 
  -o-transition: all 0.5s ease;  
  transition: all 0.5s ease;

  &:hover {
 
    color: #fc6a6a;
    font-size: 38px;
  }
`;

export const SocialMediaBar = styled("div")`
  color: #FAFAFA;
 
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: space-around;
  margin-top: 16px;
`;

export const SocialMediaItem = styled("a")`
  text-decoration: none;
  padding: 12px;
  font-size: 30px;
  color: #FAFAFA;
 
  &:hover {
  
    color: #fc6a6a;
    font-size: 38px;
  }
`;


 


 */