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


// CSS
import "../Hero/styles.css"

function Hero() {
  return (
    <>
      {/* ENTIRE CONTAINER FOR HERO-SPLASH PAGE - ABSTRACT ART BG */}
      <HeroContainer>
        {/* FLEX (ROW) CONTAINER - HOLDS TEXT CONTAINER (L) + 3D MODEL (R)*/}
        <HeroFlex>
          {/* FLEX TEXT CONTAINER - COLUMN  */}
    {      <HeroTextContainer>
            <HeroText className="wordCarousel">
            <div >
              <ul className="flip4">
                <li>Artist Painted</li>
                <li>Limited Edition</li>
                <li>Cuban-Styled</li>
                <li>Ceramic-Sculpture</li>
              </ul>
            </div>
            </HeroText>
            <MiamiText>
              Own a Unique <br /> Piece of Miami
            </MiamiText>
             
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
