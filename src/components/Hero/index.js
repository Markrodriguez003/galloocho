import { useState } from "react";

// COMPONENTS
import ThreeD from "../ThreeD/index";
import AniButton from "../AniButton"

import {
  HeroContainer,
  BrushStrokeBorder,
  HeaderText,

} from "./design";

// CSS
import "../Hero/styles.css";

function Hero() {
  return (
    <>
      <HeroContainer id="hero">
        <div>
          <HeaderText>
            Own a Unique <br />Piece of <span> Miami. </span>
          </HeaderText>
          <br />
          <AniButton btnTitle={"See Concept"} hrefTag={"#frontshop"} />
        </div>
        <ThreeD />
      </HeroContainer>
    </>
  );
}

export default Hero;
