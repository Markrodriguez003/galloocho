import styled, { css } from "styled-components";
import { Card, Button } from "react-bootstrap";

// ENTIRE CONTAINER THAT WILL HOLD PRODUCT CARDS
export const ProductCardsContainer = styled("div")`
  display: block;
  position:relative;
  margin-top: 42px;
 margin-left: auto;
 margin-right: auto; 
 overflow: hidden; 
 
`;

// INDIVIDUAL PRODUCT CARD
export const ProductCardElement = styled(Card)`
  position: relative !important;
  background-color: transparent !important ;
  margin-bottom: 10px;
  height: auto;
  border: white 2px solid !important; 
 
  -webkit-box-shadow: 1px 4px 45px -12px rgba(0,0,0,0.45); 
  box-shadow: 1px 4px 45px -12px rgba(0,0,0,0.45);
`;

// CONTAINER FOR CARD BODY - FLEX - COL
export const CardBodyFlex = styled("div")`
  display: flex;
  flex-direction: column; // This should modulate when screen shrinks
  margin-top: "20px";
`;
export const CardFooterFlex = styled("div")`
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: space-around;
  align-content: center;
  width: 100% !important;
`;

export const ProductHeaderTitle=styled('img')`
width: 220px;
height: auto;
text-align:center;


`
 