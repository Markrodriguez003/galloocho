// import '../MainHeader/MainHeader.css'
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

// DESIGN
import {
  Header,
  Menu,
  Brand,
  BrandLink,
  SubSideMenu,
  BlackLip
} from "./design";

// COMPONENTS
 

import brand from "../../imgs/main/Gallo Ocho Logo.png";
 


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
      <Header fixed="top" id="navbar">
        <SubSideMenu>
          <Menu href="#hero">Home</Menu>
          <Menu href="#frontshop">Concept</Menu>
          <Menu href="#about">About</Menu>
          <Menu href="#contact">Contact</Menu>
        </SubSideMenu>
        <BrandLink href="/">
          <Brand src={brand} />
        </BrandLink>
      </Header>
      {/* <BlackLip /> */}
    </>
  );
}

export default MainHeader;
