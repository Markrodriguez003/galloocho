// import '../MainHeader/MainHeader.css'
import { useState } from "react";

// REACT-ROOSTER 3D MODEL import
import ThreeD from "../ThreeD/index";

// CSS
import { BsFillArrowDownCircleFill } from "react-icons/bs";

import {
  HeroContainer,
  HeroFlex,
  HeroTextContainer,
  HeroText,
  MiamiText,
  ShopNowButton,
} from "./style";


// CSS
import "../Hero/styles.css"

function Hero() {
  return (
    <>
  
      <HeroContainer>
        <HeroFlex>
          <div id="headerText">
            <MiamiText>
              Own a Unique <br /> Piece of Miami
              <br /> 
            <ShopNowButton href="#frontshop">See Concept <BsFillArrowDownCircleFill/></ShopNowButton>{" "}
            </MiamiText>
          </div>
          <div className="model">
            <ThreeD />
          </div>
        </HeroFlex>
      </HeroContainer>
    </>
  );
}

export default Hero;
