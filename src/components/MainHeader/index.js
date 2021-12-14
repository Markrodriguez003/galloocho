// import '../MainHeader/MainHeader.css'
import { useState } from 'react';
import styled from 'styled-components'

// COMPONENTS 
import { Button, Navbar, Container, Offcanvas } from 'react-bootstrap';

// IMAGES

// LOGO CHOICES
import rosterLogo2 from "../../imgs/logo/roosterE.png";
import rosterLogo from "../../imgs/logo/roosterG.png";


// ICONS
import { BsFillArrowRightCircleFill, BsFillCartFill, BsFacebook, BsInstagram, BsYoutube, BsFillEnvelopeFill, BsTwitter } from "react-icons/bs";

// CSS
const Header = styled(Navbar)`
 display: flex;
 justify-content: space-between;
  /* background-color:#4a4a4a;  */
  background-color:#2f3030;
  /* background-color: #2e80d1;  */
  /* margin: 10px; */
  padding: 13px;
  -webkit-box-shadow: 1px 7px 27px 3px rgba(0,0,0,0.53); 
box-shadow: 1px 7px 27px 3px rgba(0,0,0,0.53);

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

const Menu = styled('h2')`
  color: white;
  background-color:transparent; 
  cursor: pointer;
  text-decoration:none;   
  font-family:"menuFont";
  font-size: 30px;
  margin-left: 6px;
`;

const BrandLink = styled('a')`
text-decoration: none;
`

const BrandIcon = styled('img')`
width:70px;
height: 75px;
background-color:transparent;
/* border: white 4px dotted; */
/* border: white 4px transparent; */
border-radius: 50%;
padding: 7px;
margin-bottom:8px;
margin-right: 3px;
`
const MenuHeaderIcon = styled('img')`
width:160px;
height: 195px;
background-color:transparent;
color:white;
padding: 4px;
margin-top: 40px;
margin-left: 50px;
margin-bottom:8px;

`

const MenuDivider = styled('hr')`
color:white;
font-size: 40px;

`
const BrandText = styled('h1')`
    font-family:"brandFont";
    color:white;
    letter-spacing: 2px;
    border: white 4.2px dotted;  
    padding: 6px 6px 0px 6px;
    margin-right: 6px;
    margin-top: 4px;
    font-size: 48px;
`

const SlideMenuContainer = styled(Offcanvas)`
background-color:#2f3030;
color: white;

`

const MenuFlex = styled('div')`
display: flex;
flex-direction: column;
justify-content:center;
align-items: center;
align-content: stretch;

`

const MenuItem = styled('a')`
text-decoration: none;
color: white;
font-size: 28px;
padding-top: 10.5px;


`

const SocialMediaBar = styled('div')`
color:white;
/* background-color:red; */
display:flex;
justify-content:center;
align-items: center;
align-content: space-around;
margin-top: 10px;
`

const SocialMediaItem = styled('a')`
text-decoration: none;
padding: 12px;
font-size: 30px;
color:white;

`

function MainHeader() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Header fixed="top" >
                {/* Maybe put a menu Icon - Roster's Head at the end of the "Menu" Left btton */}
                <div>
                    <Menu onClick={handleShow}>Menu < BsFillArrowRightCircleFill /> | Cart <BsFillCartFill /></Menu>

                </div>
                {/* <Menu onClick={handleShow}>Menu < BrandIcon src={rosterLogo} /> </Menu> */}
                <SlideMenuContainer show={show} onHide={handleClose}>

                    <Offcanvas.Body>
                        <MenuFlex>
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title><MenuHeaderIcon src={rosterLogo2} /></Offcanvas.Title>
                            </Offcanvas.Header>
                            <p>__________</p>
                            <MenuItem href="">SHOP</MenuItem>
                            <MenuItem href="#">ARTISTS</MenuItem>
                            <MenuItem href="#">CART</MenuItem>
                            <MenuItem href="#">ABOUT</MenuItem>
                            <MenuItem href="#">SUPPORT</MenuItem>
                        </MenuFlex>
                        <SocialMediaBar>
                            <SocialMediaItem href="#"><BsFacebook /></SocialMediaItem>
                                <SocialMediaItem href="#">  <BsInstagram /></SocialMediaItem>
                                    <SocialMediaItem href="#">  <BsYoutube /></SocialMediaItem>
                                        <SocialMediaItem href="#">  <BsFillEnvelopeFill /></SocialMediaItem>
                                            <SocialMediaItem href="#">   <BsTwitter /></SocialMediaItem >

                                        

                                            </SocialMediaBar>
                                        </Offcanvas.Body>
                                    </SlideMenuContainer>

                                    {/*** DIFFERENT LOGO IDEAS */}
                                    {/* <BrandLink href="https://www.nhl.com/"><BrandText>GALLO-OCHO</BrandText></BrandLink> */}
                                    <BrandLink href="https://www.nhl.com/"><BrandText>GALLO<BrandIcon src={rosterLogo} />OCHO</BrandText></BrandLink>
                                </Header>

                            </>


                            );
}

                            export default MainHeader;

