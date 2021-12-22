import styled from "styled-components";

// COMPONENTS
import { Button, Navbar, Offcanvas } from "react-bootstrap";

// ICONS
import {
  BsFillArrowRightCircleFill,
  BsFillCartFill,
  BsFacebook,
  BsInstagram,
  BsYoutube,
  BsFillEnvelopeFill,
  BsTwitter,
  BsFillQuestionCircleFill,
  BsFillBagXFill,
  BsFillBagCheckFill,
  BsXOctagonFill,
  BsFillBagPlusFill,
} from "react-icons/bs";
// CSS
export const Header = styled(Navbar)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #FAFAFA;
  padding: 13px;
  -webkit-box-shadow: 1px 7px 27px 3px rgba(0, 0, 0, 0.53);
  box-shadow: 1px 7px 27px 3px rgba(0, 0, 0, 0.53);

  & img:hover {
    /* transform: scale(1.07); */
    /* transform: rotateX(10deg); */
    transform: rotate(1turn);
    /* transform: translateX(10px);   */
    -webkit-transition: all 1s ease; /* Safari and Chrome */
    -moz-transition: all 1s ease; /* Firefox */
    -ms-transition: all 1s ease; /* IE 9 */
    -o-transition: all 1s ease; /* Opera */
    transition: all 1s ease;
  }

  /* & h1:hover {
 
 text-decoration: wavy;
 -webkit-transition: all 0.5s ease;  
    -moz-transition: all 0.5s ease;  
    -ms-transition: all 0.5s ease;  
    -o-transition: all 0.5s ease;  
    transition: all 0.5s ease;
  }
     */
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
`;
export const MenuHeaderIcon = styled("img")`
  width: 160px;
  height: 195px;
  background-color: transparent;
  color: black;
  padding: 4px;
  margin-top: 40px;
  margin-left: 68px;
  margin-bottom: 8px;
`;

export const BrandText = styled("h1")`
  font-family: "brandFont";
  color: black;
  letter-spacing: 2px;
  border: black 4.2px dotted;
  padding: 6px 6px 0px 6px;
  margin-right: 6px;
  margin-top: 8px;
  font-size: 52px;

  @media (max-width: 725px) {
    font-size: 38px;
  }

  @media (max-width: 675px) {
    font-size: 28px;
  }

  @media (max-width: 550px) {
    font-size: 24px;
  }

  @media (max-width: 455px) {
    font-size: 18px;
  }
`;

export const SlideMenuContainer = styled(Offcanvas)`
  background-color: black;
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
