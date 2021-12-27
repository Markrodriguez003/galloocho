// import '../MainHeader/MainHeader.css'
import { useState } from "react";

// DESIGN
import {
  Header,
  Menu,
  SlideMenuContainer,
  MenuFlex,
  MenuItem,
  SocialMediaBar,
  SocialMediaItem,
  SiteButton,
  BrandText,
  BrandIcon,
  BrandLink,
  SubSideMenu,
  MenuHeaderIcon,
} from "./design";

// COMPONENTS
import { Button, Offcanvas } from "react-bootstrap";

// LOGO CHOICES
import rosterLogo2 from "../../imgs/logo/roosterE.png";
import rosterLogo from "../../imgs/logo/roosterG-BLK.png";

// ICONS

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
          <SiteButton>
            Need Help{" "}
            <BsFillQuestionCircleFill style={{ marginBottom: "4.5px" }} />{" "}
          </SiteButton>
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
                  <BsFillCartFill style={{ marginTop: "-13px" }} /> SHOPPING
                  CART
                </Offcanvas.Title>
              </Offcanvas.Header>
              <p>__________</p>
              <MenuItem href="#" style={{ fontSize: "22px" }}>
                ITEMS:
              </MenuItem>
            </MenuFlex>
            <BsFillBagXFill
              style={{
                display: "block",
                color: "grey",
                fontStyle: "italic",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "170px",
                transform: "scale(3.5)",
                opacity: "0.35",
                textAlign: "center",
              }}
            />

            <small
              style={{
                display: "block",
                color: "grey",
                fontStyle: "italic",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "50px",
                textAlign: "center",
              }}
            >
              Your cart is empty
            </small>
          </Offcanvas.Body>
          <div
            style={{
              display: "flex",
              marginBottom: "20px",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            <Button
              variant="success"
              style={{ fontSize: "15px", marginLeft: "10px" }}
            >
              <BsFillBagCheckFill
                style={{ marginBottom: "4.5px", paddingRight: "3px" }}
              />
              Checkout
            </Button>{" "}
      {/*       <Button
              variant="primary"
              style={{ fontSize: "15px", marginLeft: "10px" }}
            >
              <BsFillBagPlusFill
                style={{ marginBottom: "4.5px", paddingRight: "3px" }}
              />
              Add More Items
            </Button>{" "} */}
            <Button
              variant="outline-danger"
              style={{ fontSize: "15px", marginLeft: "10px" }}
            >
              <BsXOctagonFill
                style={{ marginBottom: "4.5px", paddingRight: "3px" }}
              />
              Clear Cart
            </Button>{" "}
          </div>
          <SiteButton>
            Need Help{" "}
            <BsFillQuestionCircleFill style={{ marginBottom: "4.5px" }} />{" "}
          </SiteButton>
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
