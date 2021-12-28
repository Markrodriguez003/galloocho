import styled, { css } from "styled-components";
import { Card, Button } from "react-bootstrap";

// ENTIRE CONTAINER THAT WILL HOLD PRODUCT CARDS
export const ProductCardsContainer = styled("div")`
  display: block;
  position:relative;
  margin-top: 42px;
 margin-left: auto;
 margin-right: auto;
`;

// INDIVIDUAL PRODUCT CARD
export const ProductCardElement = styled(Card)`
  position: relative !important;
  margin-bottom: 10px;
  height: auto;
 

  ${props => props.zanyBorder && css`
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
  `}
  
  -webkit-box-shadow: 1px 4px 45px -12px rgba(0,0,0,0.45); 
box-shadow: 1px 4px 45px -12px rgba(0,0,0,0.45);
`;

// CONTAINER FOR CARD BODY - FLEX - COL
export const CardBodyFlex = styled("div")`
  display: flex;
  flex-direction: column; // This should modulate when screen shrinks
  margin-top: "20px"
`;

export const CardFooterFlex = styled("div")`
  display: flex;
  position: relative;
  flex-direction: row;
   
  justify-content: space-around;
  align-content: center;
   
  width: 100% !important;
`;
