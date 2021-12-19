// import '../MainHeader/MainHeader.css'
import { useState } from "react";
import styled from "styled-components";

// COMPONENTS
import { Button, Navbar, Container, Offcanvas } from "react-bootstrap";

// IMAGES

// LOGO CHOICES
import rosterLogo2 from "../../imgs/logo/roosterE.png";
import rosterLogo from "../../imgs/logo/roosterG.png";

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
  BsFillBagPlusFill
} from "react-icons/bs";

// CSS
const Header = styled(Navbar)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* background-color:#4a4a4a;  */
  background-color: #2f3030;
  /* background-color: #2e80d1;  */
  /* margin: 10px; */
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

const Menu = styled("h2")`
  color: white;
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

const SubSideMenu = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: space-around;
`;

const BrandLink = styled("a")`
  text-decoration: none;
`;

const BrandIcon = styled("img")`
  width: 70px;
  height: 75px;
  background-color: transparent;
  /* border: white 4px dotted; */
  /* border: white 4px transparent; */
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
const MenuHeaderIcon = styled("img")`
  width: 160px;
  height: 195px;
  background-color: transparent;
  color: white;
  padding: 4px;
  margin-top: 40px;
  margin-left: 68px;
  margin-bottom: 8px;
`;

const BrandText = styled("h1")`
  font-family: "brandFont";
  color: white;
  letter-spacing: 2px;
  border: white 4.2px dotted;
  padding: 6px 6px 0px 6px;
  margin-right: 6px;
  margin-top: 4px;
  font-size: 48px;

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

const SlideMenuContainer = styled(Offcanvas)`
  background-color: #2f3030;
  color: white;

  &:* {
    color:white;
  }

 
`;

const SiteButton = styled(Button)`
/* background-color: white; */
background-color: #f5f5f5;
color: #2f3030;
border:none;
display:"inline";
/* margin-right:120px;
margin-left:120px;
margin-bottom:135px; */
font-size:20px;
/* border-radius: 20px; */
font-weight:bold;
 
-webkit-transition: all 0.5s ease; /* Safari and Chrome */
    -moz-transition: all 0.5s ease; /* Firefox */
    -ms-transition: all 0.5s ease; /* IE 9 */
    -o-transition: all 0.5s ease; /* Opera */
    transition: all 0.5s ease;
&:hover {
  /* background-color: lightpink; */
  background-color: #fc6a6a;
 
 
}
`

const MenuFlex = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: stretch;
`;

const MenuItem = styled("a")`
  text-decoration: none;
  color: white;
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

const SocialMediaBar = styled("div")`
  color: white;
  /* background-color:red; */
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: space-around;
  margin-top: 16px;
`;

const SocialMediaItem = styled("a")`
  text-decoration: none;
  padding: 12px;
  font-size: 30px;
  color: white;
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

function MainHeader() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showB, setShowB] = useState(false);

  const handleCloseB = () => setShowB(false);
  const handleShowB = () => setShowB(true);

  return (
    <>
      <Header fixed="top">
        {/* Maybe put a menu Icon - Roster's Head at the end of the "Menu" Left btton */}
        <SubSideMenu>
          <Menu onClick={handleShow}>
            Menu <BsFillArrowRightCircleFill style={{ marginRight: "2px" }} />
          </Menu>

          <Menu onClick={handleShowB}>
            | Cart <BsFillCartFill />
          </Menu>
        </SubSideMenu>

        {/* OFFSIDE-LEFT-SLIDE-MENU */}
        <SlideMenuContainer show={show} onHide={handleClose}>
          <Offcanvas.Body>
            <MenuFlex>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                  <MenuHeaderIcon src={rosterLogo2} />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <p>__________</p>
              <MenuItem href="">SHOP</MenuItem>
              <MenuItem href="#">ARTISTS</MenuItem>
              <MenuItem href="#">CART</MenuItem>
              <MenuItem href="#">ABOUT</MenuItem>
              <MenuItem href="#">SUPPORT</MenuItem>
            </MenuFlex>
            <SocialMediaBar>
              <SocialMediaItem href="#">
                <BsFacebook />
              </SocialMediaItem>
              <SocialMediaItem href="#">
                {" "}
                <BsInstagram />
              </SocialMediaItem>
              <SocialMediaItem href="#">
                {" "}
                <BsYoutube />
              </SocialMediaItem>
              <SocialMediaItem href="#">
                {" "}
                <BsFillEnvelopeFill />
              </SocialMediaItem>
              <SocialMediaItem href="#">
                {" "}
                <BsTwitter />
              </SocialMediaItem>
            </SocialMediaBar>
          </Offcanvas.Body>
          <SiteButton >Need Help <BsFillQuestionCircleFill style={{ marginBottom: "4.5px" }} /> </SiteButton>
        </SlideMenuContainer>

        {/* OFFSIDE-RIGHT-SLIDE-MENU */}
        <SlideMenuContainer
          placement={"end"}
          show={showB}
          onHide={handleCloseB}
        >
          <Offcanvas.Body>
            <MenuFlex>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title style={{ fontSize: "30px" }}>
                  <BsFillCartFill style={{ marginTop: "-13px" }} /> {" "}
                  SHOPPING CART
                </Offcanvas.Title>
              </Offcanvas.Header>
              <p>__________</p>
              <MenuItem href="#" style={{ fontSize: "22px" }}>ITEMS:</MenuItem>
            </MenuFlex>
            <BsFillBagXFill style={{
              display: "block",
              color: "grey",
              fontStyle: "italic",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "170px",
              transform: "scale(3.5)",
              opacity: "0.35",
              textAlign: "center"
            }} />

            <small style={{
              display: "block",
              color: "grey",
              fontStyle: "italic",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "50px",
              textAlign: "center"


            }}>Your cart is empty</small>

          </Offcanvas.Body>
          <div style={{ display: "flex", marginBottom:"20px", textAlign:"center", justifyContent:"center" }}>
            <Button variant="success" style={{fontSize:"15px", marginLeft:"10px"}}><BsFillBagCheckFill style={{marginBottom:"4.5px", paddingRight:"3px"}}/>Checkout</Button>{' '}
           
            <Button variant="primary" style={{fontSize:"15px", marginLeft:"10px"}}><BsFillBagPlusFill style={{marginBottom:"4.5px", paddingRight:"3px"}}/>Add More Items</Button>{' '}
            <Button variant="outline-danger" style={{fontSize:"15px", marginLeft:"10px"}}><BsXOctagonFill style={{marginBottom:"4.5px", paddingRight:"3px"}}/>Clear Cart</Button>{' '}
          </div>
          <SiteButton >Need Help <BsFillQuestionCircleFill style={{ marginBottom: "4.5px" }} /> </SiteButton>
        </SlideMenuContainer>

        {/*** DIFFERENT LOGO IDEAS */}
        {/* <BrandLink href="https://www.nhl.com/"><BrandText>GALLO-OCHO</BrandText></BrandLink> */}
        <BrandLink href="https://www.nhl.com/">
          <BrandText>
            GALLO
            <BrandIcon src={rosterLogo} />
            OCHO
          </BrandText>
        </BrandLink>
      </Header>
    </>
  );
}

export default MainHeader;
