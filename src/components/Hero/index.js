import { useState } from "react";

// COMPONENTS
import ThreeD from "../ThreeD/index";
import OutlinedText from "../OutlinedText"
// ICONS
import { BsFillArrowDownCircleFill } from "react-icons/bs";

import {
  HeroContainer,
  HeroFlex,
  MiamiText,
  ShopNowButton,
  HeaderText,
} from "./design";

// CSS
import "../Hero/styles.css";

function Hero() {
  return (
    <>



      <HeroContainer>
        <ThreeD />
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap:"10px"

        }}>
          <HeaderText>
            Own a Unique <br />Piece of Miami
          </HeaderText>
          <br/>
          <ShopNowButton href="#frontshop">
                See Concept <BsFillArrowDownCircleFill />
              </ShopNowButton>{" "}
        </div>
      </HeroContainer>

      {/* <OutlinedText texture={3} size="96px" stroke="0.1px">Miami</OutlinedText> */}





    </>
  );
}

export default Hero;
