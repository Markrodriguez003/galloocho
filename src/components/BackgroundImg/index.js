import styled, { css } from "styled-components";

// import bg from "../../imgs/textures/splatter/ink-303240.png"
// import bg from "../../imgs/textures/splatter/d.jpg"
// import bg from "../../imgs/textures/splatter/i.jpg"
// import bg from "../../imgs/textures/splatter/e.jpg"
import bg from "../../imgs/textures/splatter/c.jpg"


// import bg from "../../imgs/textures/splatter/a.jpg"
// import bg from "../../imgs/textures/splatter/b.jpg"
// import bg from "../../imgs/textures/splatter/f.jpg"
// import bg from "../../imgs/textures/splatter/g.jpg"
// import bg from "../../imgs/textures/splatter/h.jpg"
// import bg from "../../imgs/textures/splatter/Green Tight Splatter.jpg"

export const BGImg = styled('img')`


/* Keyword values */
/* mix-blend-mode: normal;
mix-blend-mode: multiply;
mix-blend-mode: screen;
mix-blend-mode: overlay;
mix-blend-mode: darken;
mix-blend-mode: lighten;
mix-blend-mode: color-dodge;
mix-blend-mode: color-burn;
mix-blend-mode: hard-light;
mix-blend-mode: soft-light;
mix-blend-mode: difference;
mix-blend-mode: exclusion;
mix-blend-mode: hue;
mix-blend-mode: saturation;
mix-blend-mode: color;
mix-blend-mode: luminosity; */


background-color: white;
/* background: url() ; */
mix-blend-mode: luminosity;
/* mix-blend-mode: exclusion; */
background-size: cover;
 
min-height: 100%;
  min-width: 1024px;
	
  /* Set up proportionate scaling */
  width: 100%;
  height: auto;
	
  /* Set up positioning */
  position: fixed;
  top: 0;
  left: 0;
z-index: -2;
opacity: 0.04;
/* opacity: 0.1; */
`

function BackgroundImg() {
    return (
        <>
            <BGImg src={bg} />
        </>
    )
}

export default BackgroundImg;