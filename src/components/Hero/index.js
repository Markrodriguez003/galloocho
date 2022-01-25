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
  HeaderText,
  SpacerBlock,
} from "./design";

// CSS
import "../Hero/styles.css";

function Hero() {
  return (
    <>
      <HeroContainer>
        <HeroFlex>
          <div id="headerText">
            <HeaderText>
              Own a Unique <br /> Piece of <MiamiText>Miami</MiamiText>
              <br />
              <ShopNowButton href="#frontshop">
                See Concept <BsFillArrowDownCircleFill />
              </ShopNowButton>{" "}
              
            </HeaderText>
          </div>
          <div className="model">
            <ThreeD />
          </div>
          {/*     <SpacerBlock /> */}
        </HeroFlex>
      </HeroContainer>
    </>
  );
}

export default Hero;
