import React, { useState } from "react";
import {BrushContainer} from "./design";
import brushBorderImg from "../../imgs/textures/border/borderA.png";
function BrushBorder() {

    return (
        <>
       <BrushContainer>
       <img src={brushBorderImg}></img>
       </BrushContainer>
        </>
    )

}

export default BrushBorder;
