import React from "react";
import { Children } from "react";
// COMPONENTS
import { TextContainer } from "./design";

function OutlinedText(props) {
  return (
    <>
      <TextContainer 
      texture={props.texture} 
      size ={props.size}
      stroke ={props.stroke}
      >
        {props.children}
      </TextContainer>
    </>
  );
}

export default OutlinedText;
