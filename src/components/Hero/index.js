import { useState } from "react";

// COMPONENTS
import ThreeD from "../ThreeD/index";
import OutlinedText from "../OutlinedText"
// ICONS
import { BsFillArrowDownCircleFill } from "react-icons/bs";
 
import {
  HeroContainer,
  MiamiText,
  ShopNowButton,
  BrushStrokeBorder,
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
          gap: "10px"

        }}>
          <HeaderText>
            Own a Unique <br />Piece of <span style={{ color: "hotpink" }}> Miami. </span>
          </HeaderText>
          <br />
          <ShopNowButton href="#frontshop">
            See Concept <BsFillArrowDownCircleFill />
          </ShopNowButton>{" "}
        </div>
      </HeroContainer>

 
 






    </>
  );
}

export default Hero;
