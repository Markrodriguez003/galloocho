import styled, { css } from "styled-components";

// IMAGES
import heroTextureBG from "../../imgs/textures/TextureA.jpg";

//COMPONENTS
import { Button } from "react-bootstrap";

// COLOR PALLETTE
// GHOST WHITE --> #FAFAFA

// FLEX BOX THAT HOLDS TEXT CONTAINER + ROOSTER IMAGE
export const HeroFlex = styled("div")`
  display: inline-flex;
  position: relative;
  flex-direction: row;
  align-content: center;
  align-items: center;
  justify-content:center;
  padding-top: 45px;
 /*  top: 5vh;
  left: 20vw; */
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  /* background-color: green; */
  text-align: center;

  /* border-width: 14px;
  border-bottom-style: solid;
  border-image: repeating-radial-gradient(
      circle at -12px,
      white,
      black 2px,
      white 8px,
      white 2px
    )
    26; */
  
/* 
  & * {
    margin: 12px;

  } */

`;

// FLEX BOX CONTAINER THAT HOLDS ALL INDIVIDUAL HERO TEXT CONTAINER
export const HeroTextContainer = styled("div")`
  display: inline-flex;
  position: relative;
  flex-direction: column;
  align-content: center;
  align-items: center;
 

 
`;

// INDIVIDUAL HERO TEXT CONTAINER
export const HeroText = styled("span")`
  display: inline;
  position: relative;
  background-color: #fafafa;
  color: black;
  font-size: 3em;
  font-family: "heroFont";
  text-align: center;


  @media (max-width: 860px) {
    font-size: 2.2em;
  }

  @media (max-width: 775px) {
    font-size: 1.4em;
  }

  @media (max-width: 480px) {
    font-size: 1.2em;
  }

  @media (max-width: 290px) {
    font-size: 0.8em;
  }


  // ** STYLING FOR EACH INDIVIDUAL HERO SPLASH TEXT CONTAINER
/*   ${(props) =>
    props.first &&
    css`
      border-radius: 5%;
      -webkit-animation: shake-horizontal 12.8s
        cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite both;
      animation: shake-horizontal 12.8s cubic-bezier(0.455, 0.03, 0.515, 0.955)
        infinite both;
      @-webkit-keyframes shake-horizontal {
        0%,
        100% {
          -webkit-transform: translateX(0);
          transform: translateX(0);
        }
        10%,
        30%,
        50%,
        70% {
          -webkit-transform: translateX(-10px);
          transform: translateX(-10px);
        }
        20%,
        40%,
        60% {
          -webkit-transform: translateX(10px);
          transform: translateX(10px);
        }
        80% {
          -webkit-transform: translateX(8px);
          transform: translateX(8px);
        }
        90% {
          -webkit-transform: translateX(-8px);
          transform: translateX(-8px);
        }
      }
      @keyframes shake-horizontal {
        0%,
        100% {
          -webkit-transform: translateX(0);
          transform: translateX(0);
        }
        10%,
        30%,
        50%,
        70% {
          -webkit-transform: translateX(-10px);
          transform: translateX(-10px);
        }
        20%,
        40%,
        60% {
          -webkit-transform: translateX(10px);
          transform: translateX(10px);
        }
        80% {
          -webkit-transform: translateX(8px);
          transform: translateX(8px);
        }
        90% {
          -webkit-transform: translateX(-8px);
          transform: translateX(-8px);
        }
      }
    `}; */

  /* ${(props) =>
    props.second &&
    css`
      border-radius: 5%;
      margin: 30px 0px 30px -90px;
      -webkit-animation: shake-horizontal 12.8s
        cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite reverse both;
      animation: shake-horizontal 12.8s cubic-bezier(0.455, 0.03, 0.515, 0.955)
        infinite reverse both;

      @-webkit-keyframes shake-horizontal {
        0%,
        100% {
          -webkit-transform: translateX(0);
          transform: translateX(0);
        }
        10%,
        30%,
        50%,
        70% {
          -webkit-transform: translateX(-10px);
          transform: translateX(-10px);
        }
        20%,
        40%,
        60% {
          -webkit-transform: translateX(10px);
          transform: translateX(10px);
        }
        80% {
          -webkit-transform: translateX(8px);
          transform: translateX(8px);
        }
        90% {
          -webkit-transform: translateX(-8px);
          transform: translateX(-8px);
        }
      }
      @keyframes shake-horizontal {
        0%,
        100% {
          -webkit-transform: translateX(0);
          transform: translateX(0);
        }
        10%,
        30%,
        50%,
        70% {
          -webkit-transform: translateX(-10px);
          transform: translateX(-10px);
        }
        20%,
        40%,
        60% {
          -webkit-transform: translateX(10px);
          transform: translateX(10px);
        }
        80% {
          -webkit-transform: translateX(8px);
          transform: translateX(8px);
        }
        90% {
          -webkit-transform: translateX(-8px);
          transform: translateX(-8px);
        }
      }
    `}; */

 /*  ${(props) =>
    props.three &&
    css`
      border-radius: 5%;
      margin: 30px 0px 30px 125px;

      -webkit-animation: shake-vertical 8.8s
        cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite both;
      animation: shake-vertical 8.8s cubic-bezier(0.455, 0.03, 0.515, 0.955)
        infinite both;

      @-webkit-keyframes shake-vertical {
        0%,
        100% {
          -webkit-transform: translateY(0);
          transform: translateY(0);
        }
        10%,
        30%,
        50%,
        70% {
          -webkit-transform: translateY(-8px);
          transform: translateY(-8px);
        }
        20%,
        40%,
        60% {
          -webkit-transform: translateY(8px);
          transform: translateY(8px);
        }
        80% {
          -webkit-transform: translateY(6.4px);
          transform: translateY(6.4px);
        }
        90% {
          -webkit-transform: translateY(-6.4px);
          transform: translateY(-6.4px);
        }
      }
      @keyframes shake-vertical {
        0%,
        100% {
          -webkit-transform: translateY(0);
          transform: translateY(0);
        }
        10%,
        30%,
        50%,
        70% {
          -webkit-transform: translateY(-8px);
          transform: translateY(-8px);
        }
        20%,
        40%,
        60% {
          -webkit-transform: translateY(8px);
          transform: translateY(8px);
        }
        80% {
          -webkit-transform: translateY(6.4px);
          transform: translateY(6.4px);
        }
        90% {
          -webkit-transform: translateY(-6.4px);
          transform: translateY(-6.4px);
        }
      }
    `}; */
`;

// MIAMI BACKGROUND
export const MiamiText = styled("span")`
  display: inline;
  position: relative;
  background-color: #fafafa;
  color: black;
  font-size: 64px;
  font-family: "heroFont";
  -webkit-animation: vibrate-2 2.3s linear infinite both;
  animation: vibrate-2 2.3s linear infinite both;
  -webkit-animation: vibrate-2 2.3s linear infinite both;
  animation: vibrate-2 2.3s linear infinite both;

/*   @media (max-width: 860px) {
    font-size: 3.15em;
  }
 */
  @media (max-width: 1240px) {
    font-size: 3.15em;
  }



  @media (max-width: 775px) {
    font-size: 1.4em;
  }

  @media (max-width: 480px) {
    font-size: 1.2em;
  }

  @media (max-width: 290px) {
    font-size: 0.8em;
  }

 /*  @-webkit-keyframes vibrate-2 {
    0% {
      -webkit-transform: translate(0);
      transform: translate(0);
    }
    20% {
      -webkit-transform: translate(2px, -2px);
      transform: translate(2px, -2px);
    }
    40% {
      -webkit-transform: translate(2px, 2px);
      transform: translate(2px, 2px);
    }
    60% {
      -webkit-transform: translate(-2px, 2px);
      transform: translate(-2px, 2px);
    }
    80% {
      -webkit-transform: translate(-2px, -2px);
      transform: translate(-2px, -2px);
    }
    100% {
      -webkit-transform: translate(0);
      transform: translate(0);
    }
  }
  @keyframes vibrate-2 {
    0% {
      -webkit-transform: translate(0);
      transform: translate(0);
    }
    20% {
      -webkit-transform: translate(2px, -2px);
      transform: translate(2px, -2px);
    }
    40% {
      -webkit-transform: translate(2px, 2px);
      transform: translate(2px, 2px);
    }
    60% {
      -webkit-transform: translate(-2px, 2px);
      transform: translate(-2px, 2px);
    }
    80% {
      -webkit-transform: translate(-2px, -2px);
      transform: translate(-2px, -2px);
    }
    100% {
      -webkit-transform: translate(0);
      transform: translate(0);
    }
  } */
`;

 

// ENTIRE HERO SPLASH PAGE CONTAINER (SPLATTER PAINT GRAPHIC)
export const HeroContainer = styled("div")`
  display: block;
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url(${heroTextureBG});
  background-color: #041b42;
  background-blend-mode: screen;
  background-position: center;
  background-size: cover;
  background-blend-mode: exclusion;
  /* INFO --> https://css-tricks.com/almanac/properties/b/background-blend-mode/ */
`;

/* SHOP NOW BUTTON LOCATED AT THE BOTTOM */
export const ShopNowButton = styled(Button)`
  /* position: absolute; */
  background-color: #fafafa;
  color: black;
  font-size: 36px;
  font-family: "heroFont";
  border: none;
  margin-top: 35px;


  @media (max-width: 860px) {
    font-size: 2.2em;
  }

  @media (max-width: 775px) {
    font-size: 1.4em;
  }

  @media (max-width: 480px) {
    font-size: 1.2em;
  }


  /* margin-top: 900px;
margin-left: 700px; */

  /* -webkit-animation: heartbeat 8.5s ease-in-out infinite both;
	        animation: heartbeat 8.5s ease-in-out infinite both;

@-webkit-keyframes heartbeat {
  from {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transform-origin: center center;
            transform-origin: center center;
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  10% {
    -webkit-transform: scale(0.91);
            transform: scale(0.91);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  17% {
    -webkit-transform: scale(0.98);
            transform: scale(0.98);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  33% {
    -webkit-transform: scale(0.87);
            transform: scale(0.87);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  45% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
}
@keyframes heartbeat {
  from {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transform-origin: center center;
            transform-origin: center center;
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  10% {
    -webkit-transform: scale(0.91);
            transform: scale(0.91);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  17% {
    -webkit-transform: scale(0.98);
            transform: scale(0.98);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  33% {
    -webkit-transform: scale(0.87);
            transform: scale(0.87);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  45% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
} */
`;
