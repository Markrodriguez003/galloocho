import styled from "styled-components";
import { Card, Button } from "react-bootstrap";

// ENTIRE CONTAINER THAT WILL HOLD PRODUCT CARDS
export const ProductCardsContainer = styled("div")`
  display: block;
  margin-top: 20px;
 
/*  background-color: yellow;
 margin-left: auto;
 margin-right: auto; */
 
/*  text-align:center; */

 
`;

// INDIVIDUAL PRODUCT CARD
export const ProductCardElement = styled(Card)`
  position: relative;
  display: block;
  /*  width: 550px; */
 /*  margin-left: auto;
  margin-right: auto;  */
  margin-top: 20px;
  height: auto;
  text-align: center;
  
  border-width: 14px;
  border-style: solid;
  border-image: repeating-radial-gradient(
      circle at -12px,
      grey,
      transparent 2px,
      #454545 8px,
      gainsboro 2px
    )
    26;
/*   -webkit-box-shadow: 0px 5px 35px 9px rgba(0, 0, 0, 0.27);
  box-shadow: 0px 5px 35px 9px rgba(0, 0, 0, 0.27); */
`;

// CONTAINER FOR CARD BODY - FLEX - COL
export const CardBodyFlex = styled("div")`
  display: flex;
  flex-direction: column; // This should modulate when screen shrinks
`;

export const CardFooterFlex = styled("div")`
  display: flex;
  position: relative;
  flex-direction: row;
   
  justify-content: space-between;
  align-content: center;
   
  width: 100% !important;
`;
