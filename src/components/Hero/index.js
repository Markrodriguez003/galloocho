// import '../MainHeader/MainHeader.css'
import { useState } from "react";

// REACT-ROOSTER 3D MODEL import
import ThreeD from "../ThreeD/index";

// CSS
import { BsCaretRight } from "react-icons/bs";

import {
  HeroContainer,
  HeroFlex,
  HeroTextContainer,
  HeroText,
  MiamiText,
  ShopNowButton,
} from "./style";

function Hero() {
  return (
    <>
      {/* ENTIRE CONTAINER FOR HERO-SPLASH PAGE - ABSTRACT ART BG */}
      <HeroContainer>
        {/* FLEX (ROW) CONTAINER - HOLDS TEXT CONTAINER (L) + 3D MODEL (R)*/}
        <HeroFlex>
          {/* FLEX TEXT CONTAINER - COLUMN  */}
    {      <HeroTextContainer>
            <HeroText second>
              Limited-Edition 
            </HeroText>
            <MiamiText>
              Own a Unique <br /> Piece of Miami
            </MiamiText>
            <HeroText three>
              Artist Painted  
            </HeroText>
            <ShopNowButton>Shop Now</ShopNowButton>{" "}
          </HeroTextContainer>}

          {/* 3D MODEL */}
          <div>
            {" "}
            <ThreeD />
          </div>
        </HeroFlex>
      </HeroContainer>
    </>
  );
}

export default Hero;
