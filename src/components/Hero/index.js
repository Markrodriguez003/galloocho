import { useState } from "react";

// COMPONENTS
import ThreeD from "../ThreeD/index";
import OutlinedText from "../OutlinedText"
import AniButton from "../AniButton"
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



      <HeroContainer id="hero">
        <ThreeD />
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px"

        }}>
          <HeaderText>
            Own a Unique <br />Piece of <span> Miami. </span>
          </HeaderText>
          <br />
          <AniButton btnTitle={"See Concept"} hrefTag={"#frontshop"}/>
          {/* <ShopNowButton href="#frontshop">
            See Concept <BsFillArrowDownCircleFill />
          </ShopNowButton>{" "} */}

         
     
        </div>
      
      </HeroContainer>

 
 
        <br/>
        <br/>
        <br/>
{/* {      <AniButton>See Concept </AniButton>} */}

      <br/>
        <br/>


    </>
  );
}

export default Hero;
